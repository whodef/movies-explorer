import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { formatDuration } from '../../utils/utils';

function MoviesCard({ movie, onSave, onRemove, isSaved }) {
    const location = useLocation();

    const { image, nameRU, duration, trailer } = movie;

    const [ saved, setSaved ] = useState(isSaved);

    const handleSave = () => {
        onSave(movie)
        setSaved(true);
    }

    const handleRemove = () => {
        onRemove(movie)
        setSaved(false);
    }

    return (
        <li className="movies-card">
            <div className="movies-card__heading">
                <div className="movies-card__title-wrapper">
                    <h3 className="movies-card__title">{ nameRU }</h3>
                    <p className="movies-card__subtitle">{ formatDuration(duration) }</p>
                </div>
                { location.pathname === '/saved-movies'
                    ? <button onClick={ handleRemove } className="movies-card__button movies-card__remove-button"/>
                    : saved
                        ? <button onClick={ handleRemove } className="movies-card__button movies-card__active-button"/>
                        : <button onClick={ handleSave } className="movies-card__button movies-card__save-button"/>
                }
            </div>
            <a className="movies-card__url" href={ trailer } target="_blank" rel="noreferrer">
                <img className="movies-card__image" src={ image } alt={ nameRU }/>
            </a>
        </li>

    );
}

export default MoviesCard;
