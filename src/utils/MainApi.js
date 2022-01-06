import Api from './Api';
import { OWN_API_URL } from './constants';

class MainApi extends Api {
    constructor({ baseUrl, headers, credentials }) {
        super({ baseUrl, headers, credentials })
    }

    getUser() {
        return this.request({
            method: 'GET',
            path: '/users/me',
            isProtected: true,
        });
    }

    register({ name, email, password }) {
        return this.request({
            method: 'POST',
            path: '/signup',
            body: { name, email, password }
        });
    }

    login({ email, password }) {
        return this.request({
            method: 'POST',
            path: '/signin',
            body: { email, password },
        });
    }

    logout() {
        return this.request({
            method: 'POST',
            path: '/logout',
        });
    }

    updateProfile({ name, email }) {
        return this.request({
            method: 'PATCH',
            path: '/users/me',
            body: { name, email },
            isProtected: true,
        });
    }

    getAllMovies() {
        return this.request({
            method: 'GET',
            path: '/movies',
            isProtected: true,
        });
    }

    saveMovie(movie) {
        return this.request({
            method: 'POST',
            path: '/movies',
            body: movie,
            isProtected: true,
        });
    }

    removeMovie(id) {
        return this.request({
            method: 'DELETE',
            path: `/movies/${ id }`,
            isProtected: true,
        });
    }
}

const mainApi = new MainApi({
    baseUrl: OWN_API_URL || 'http://localhost:4000',
    headers: {
        'Content-Type': 'application/json',
    },
    credentials: 'include',
});

export default mainApi;
