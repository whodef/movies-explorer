import jwtHandler from './JwtHandler'

export default class Api {
    constructor({ baseUrl, headers, credentials }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
        this._credentials = credentials;
    }

    request({ path, method, body, isProtected= false }) {
        const extHeaders = {};

        if (isProtected && jwtHandler.hasToken()) {
            extHeaders["Authorization"] = `Bearer ${ jwtHandler.getToken() }`;
        }

        return fetch(this._baseUrl + path, {
            method,
            headers: {...this._headers, ...extHeaders},
            body: JSON.stringify(body),
            credentials: this._credentials,
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка ${ res.status }: ${ res.statusText }`);
            });
    }
}
