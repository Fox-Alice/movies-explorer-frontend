// import { getMovies } from "../../../movies-explorer-api/controllers/movies";
import { moviesApiConfig } from "./constants";
class Api {
    constructor(options) {
        this._url = options.url;
        this._headers = options.headers
    }

    _onResponse = (res) => {
        if (res.ok) {
            return res.json()
        }
        return Promise.reject('Oшибка на стороне сервера')
    }

    getMovies() {
        // const token = localStorage.getItem('jwt');

        return fetch(`${this._url}`, {
            // headers: {
            //     'authorization': `Bearer ${token}`,
            // }
        })

            .then(this._onResponse)
    }
}

const moviesApi = new Api(moviesApiConfig);

export default moviesApi