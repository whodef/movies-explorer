import { MOVIE_API_URL } from './constants';

export const filterMovie = (movie, value, checkbox) => {
    const lowerCaseNameRU = movie.nameRU?.toLowerCase() || '';
    const lowerCaseNameEN = movie.nameEN?.toLowerCase() || '';
    const isShortFilm = movie.duration <= 40;

    const isNameMatched = lowerCaseNameRU.includes(value.toLowerCase()) || lowerCaseNameEN.includes(value.toLowerCase());

    if (checkbox) {
        return isNameMatched && isShortFilm;
    }
    return isNameMatched;
};

export const formatDuration = (duration) => {
    let hours = Math.floor(duration / 60);
    let minutes = Math.floor(duration % 60);

    if (minutes < 10) minutes = '0' + minutes;
    return (hours ? hours + 'ч ' : '') + minutes + 'м';
};

export const getMovieData = (movies) => {
    return movies.map((movie) => ({
        movieId: movie.id,
        year: movie.year,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        trailer: movie.trailerLink,
        description: movie.description,
        image: MOVIE_API_URL + movie.image.url,
        thumbnail: MOVIE_API_URL + movie.image.formats.thumbnail.url,
    }));
};
