import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { filterMovie } from '../../utils/utils';

function Movies({ onSave, onRemove, movies, savedMovies, onEmptySearch }) {
    const location = useLocation();

    const [ values, setValues ] = useState({ title: '', short: false });
    const [ isLoaded, setIsLoaded ] = useState(true);
    const [ isFound, setIsFound ] = useState(true);
    const [ result, setResult ] = useState(savedMovies || []);

    const handleButtonClick = () => (values.title) ? handleSubmit() : onEmptySearch();

    const handleCheckboxClick = (e) => setValues({ ...values, short: e.target.checked });

    const handleFormChange = (value) => setValues({ ...values, title: value });

    const handleSubmit = () => {
        setIsLoaded(false);

        const foundMovies = movies.filter((movie) => filterMovie(movie, values.title, values.short));

        setIsFound(foundMovies.length);
        setResult(foundMovies);

        setTimeout(() => setIsLoaded(true), 1500);

    };

    useEffect(() => {
        if (values.title || location.pathname === '/saved-movies') {
            handleSubmit();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ values.short ]);

    useEffect(() => {
        setValues({ title: '', short: false });
        setIsFound(true);
    }, [ location.pathname ]);

    useEffect(() => {
        setResult(savedMovies || []);
    }, [ savedMovies ]);


    return (
        <main className="movies">
            <SearchForm
                onSubmit={ handleButtonClick }
                onChange={ handleFormChange }
                value={ values.title }
            >
                <FilterCheckbox
                    onClick={ handleCheckboxClick }
                    value={ values.short }
                />
            </SearchForm>
            { isLoaded ? (isFound ?
                    <MoviesCardList
                        movies={ result }
                        onSave={ onSave }
                        onRemove={ onRemove }
                    /> : <p className="movies__not-found-text">Ничего не найдено</p>)
                : <Preloader/>
            }
        </main>
    );
}

export default Movies;
