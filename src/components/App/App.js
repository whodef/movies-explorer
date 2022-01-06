import { useCallback, useEffect, useState } from 'react';
import { withRouter, Route, Switch, useHistory } from 'react-router-dom';
import { currentUserContext } from '../../contexts/CurrentUserContext.js';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import MessagePopup from '../MessagePopup/MessagePopup';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.js';
import mainApi from '../../utils/MainApi.js';
import moviesApi from '../../utils/MoviesApi.js';
import jwtToken from '../../utils/JwtHandler.js';
import localStorageHandler from "../../utils/LocalStorageHandler";
import { getMovieData } from '../../utils/utils.js';

function App() {
    const history = useHistory();

    const [ currentUser, setCurrentUser ] = useState({ _id: '', name: '', email: '' });
    const [ initialMovies, setInitialMovies ] = useState([]);
    const [ savedMovies, setSavedMovies ] = useState([]);
    const [ loggedIn, setLoggedIn ] = useState(false);
    const [ popupMessage, setPopupMessage ] = useState('');
    const [ isPopupOpened, setIsPopupOpened ] = useState(false);
    const [ isSuccess, setIsSuccess ] = useState(true);

    useEffect(() => {
        if (loggedIn) {
            Promise.all([ moviesApi.getMovies(), mainApi.getAllMovies() ])
                .then(([ movies, mainMovies ]) => {
                    const getMoviesData = getMovieData(movies);

                    setInitialMovies(getMoviesData);
                    setSavedMovies(mainMovies);

                    localStorageHandler.save('savedMovies', mainMovies.map((movie) => movie.movieId));
                })
                .catch(err => console.error(err));
        }
    }, [ loggedIn, currentUser._id ]);

    // For User
    const letsCheckToken = useCallback(() => {
        if (!jwtToken.hasToken()) {
            return;
        }
        return mainApi.getUser()
            .then((user) => {
                setCurrentUser(user);
                setLoggedIn(true);
            })
            .catch(err => console.error(err));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ history ]);

    useEffect(() => {
        letsCheckToken()?.then();
    }, [ letsCheckToken ]);

    const handleSignUp = ({ name, email, password }) => {
        mainApi.register({ name, email, password })
            .then(user => {
                handleSignIn({ email: user.email, password });
            })
            .catch(err => console.error(err));
    }

    const handleSignIn = ({ email, password }) => {
        localStorageHandler.flushAll();
        mainApi.login({ email, password })
            .then((res) => {
                jwtToken.setToken(res['token']);
                letsCheckToken()?.then(() => history.push('/movies'));
                openPopup({
                    success: true,
                    message: res.message,
                });
            })
            .catch(err => console.error(err));
    }

    const handleUserUpdate = ({ name, email }) => {
        mainApi.updateProfile({ name, email })
            .then(user => {
                setCurrentUser(user);
                openPopup({
                    success: true,
                    message: 'Профиль успешно изменён',
                });
            })
            .catch(err => console.error(err));
    }

    const handleLogout = (e) => {
        e.preventDefault();
        localStorageHandler.flushAll();
        setLoggedIn(false);
        setCurrentUser({ _id: '', name: '', email: '' });
        setSavedMovies([]);
        history.push('/');
    }

    // For Movies
    const handleSaveMovie = (movie) => {
        mainApi.saveMovie(movie)
            .then(movie => {
                setSavedMovies([ movie, ...savedMovies ]);

                const savedList = localStorageHandler.get('savedMovies');

                localStorageHandler.save('savedMovies', [ movie.movieId.toString(), ...savedList ]);
            })
            .catch(err => console.error(err));
    }

    const handleRemoveMovie = (movie) => {
        const savedMovie = savedMovies.find((item) => item.movieId === movie.movieId);

        mainApi.removeMovie(savedMovie._id)
            .then(() => {
                setSavedMovies(savedMovies.filter((item) => item._id !== savedMovie._id));

                const savedList = localStorageHandler.get('savedMovies');

                localStorageHandler.save('savedMovies', savedList.filter((id) => id !== movie.movieId.toString()));
            })
            .catch(err => console.error(err));
    }

    const handleEmptySearch = () => {
        openPopup({
            success: false,
            message: 'Введите запрос',
        })
    }

    // Overlay
    const openPopup = ({ success, message }) => {
        setIsSuccess(success);
        setPopupMessage(message);
        setIsPopupOpened(true);
        setTimeout(handleCloseMessagePopup, 3000);
    }

    const handleCloseMessagePopup = () => {
        setIsPopupOpened(false);
    }

    useEffect(() => {
        const closeByEscape = (e) => {
            if (e.key === "Escape") {
                handleCloseMessagePopup();
            }
        };
        document.addEventListener("keyup", closeByEscape);

        return () => document.removeEventListener("keyup", closeByEscape);
    }, []);

    useEffect(() => {
        const closeByClick = (e) => {
            if (e.target.classList.contains("popup_opened")) {
                handleCloseMessagePopup();
            }
        };
        document.addEventListener("mousedown", closeByClick);

        return () => document.removeEventListener("mousedown", closeByClick);
    }, []);

    return (
        <currentUserContext.Provider value={ currentUser }>
            <div className="app">
                <Switch>
                    <Route exact path="/">
                        <Header color="velvet" loggedIn={ loggedIn }/>
                        <Main/>
                        <Footer/>
                    </Route>
                    <ProtectedRoute path="/movies" loggedIn={ loggedIn }>
                        <Header loggedIn={ loggedIn }/>
                        <Movies
                            movies={ initialMovies }
                            onSave={ handleSaveMovie }
                            onRemove={ handleRemoveMovie }
                            onEmptySearch={ handleEmptySearch }
                        />
                        <Footer/>
                    </ProtectedRoute>
                    <ProtectedRoute path="/saved-movies" loggedIn={ loggedIn }>
                        <Header loggedIn={ loggedIn }/>
                        <Movies
                            savedMovies={ savedMovies }
                            movies={ savedMovies }
                            onRemove={ handleRemoveMovie }
                            onEmptySearch={ handleEmptySearch }
                        />
                        <Footer/>
                    </ProtectedRoute>
                    <ProtectedRoute path="/profile" loggedIn={ loggedIn }>
                        <Header loggedIn={ loggedIn }/>
                        <Profile
                            onSubmit={ handleUserUpdate }
                            onLogout={ handleLogout }
                        />
                    </ProtectedRoute>
                    <Route path="/signup">
                        <Register onSubmit={ handleSignUp }/>
                    </Route>
                    <Route path="/signin">
                        <Login onSubmit={ handleSignIn }/>
                    </Route>
                    <Route path="*">
                        <ErrorMessage/>
                    </Route>
                </Switch>
                <MessagePopup
                    isOpen={ isPopupOpened }
                    message={ popupMessage }
                    success={ isSuccess }
                    onClose={ handleCloseMessagePopup }
                />
            </div>
        </currentUserContext.Provider>
    );
}

export default withRouter(App);
