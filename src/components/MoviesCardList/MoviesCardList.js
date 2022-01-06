import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import { windowSizes, cardsNumbers, nextCardsNumbers } from '../../utils/constants';
import localStorageHandler from "../../utils/LocalStorageHandler";

function MoviesCardList({ movies, onSave, onRemove }) {
    const location = useLocation();

    const [ cardsToShow, setCardsToShow ] = useState([]);
    const [ cardsPerPage, setCardsPerPage ] = useState(0);
    const [ nextCards, setNextCards ] = useState(0);
    const [ windowWidth, setWindowWidth ] = useState(window.innerWidth);

    const checkWindowWidth = () => setTimeout(() => setWindowWidth(window.innerWidth), 500);

    const handleShowMoreCards = () => setCardsToShow(movies.slice(0, cardsToShow.length + nextCards));

    useEffect(() => {
        window.addEventListener('resize', checkWindowWidth);

        if (windowWidth > windowSizes.desktop) {
            setCardsPerPage(cardsNumbers.desktop);
            setNextCards(nextCardsNumbers.desktop);
        } else if (windowWidth > windowSizes.mobile && windowWidth <= windowSizes.desktop) {
            setCardsPerPage(cardsNumbers.tablet);
            setNextCards(nextCardsNumbers.tablet);
        } else if (windowWidth <= windowSizes.mobile) {
            setCardsPerPage(cardsNumbers.mobile);
            setNextCards(nextCardsNumbers.mobile);
        }

        return () => window.removeEventListener('resize', checkWindowWidth);
    }, [ windowWidth ]);

    useEffect(() => {
        if (location.pathname === '/movies') {
            setCardsToShow(movies.slice(0, cardsPerPage));
        } else {
            setCardsToShow(movies);
        }
    }, [ cardsPerPage, location.pathname, movies ]);

    return (
        <section className="movies-card-list">
            <ul className="movies-card-list__list">
                { cardsToShow.map(movie =>
                    <MoviesCard
                        key={ movie.movieId.toString() }
                        movie={ movie }
                        onSave={ onSave }
                        onRemove={ onRemove }
                        isSaved={ localStorageHandler.get('savedMovies').includes(String(movie.movieId)) }
                    />
                ) }
            </ul>
            { location.pathname === '/movies' && movies.length > cardsToShow.length &&
                <button className="movies-card-list__button app__link" type="submit" onClick={ handleShowMoreCards }>
                    Ещё
                </button>
            }
        </section>
    );
}

export default MoviesCardList;
