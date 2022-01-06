import Api from './Api';

class MoviesApi extends Api {
    constructor({ baseUrl, headers, credentials }) {
        super({ baseUrl, headers, credentials })
    }

    getMovies() {
        return this.request({
            path: '/',
            method: 'GET',
        });
    }
}


const moviesApi = new MoviesApi({
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
    headers: {
        'Content-Type': 'application/json',
    }
});

export default moviesApi;
