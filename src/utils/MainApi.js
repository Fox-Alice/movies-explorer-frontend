import { apiConfig } from "./constants";
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

    getUser() {
        const token = localStorage.getItem('jwt');
        return fetch(`${this._url}/users/me`, {
            headers: {
                'authorization': `Bearer ${token}`,
            }
        })
            .then(this._onResponse)
    }

    editProfile(data) {
        const token = localStorage.getItem('jwt');

        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: {
                'authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email
            })
        })
        .then(this._onResponse)
    }

    handleSave(data) {
        const token = localStorage.getItem('jwt');

        return fetch(`${this._url}/movies`, {
            method: 'POST',
            headers: {
                'authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(this._onResponse)
    }

    handleSaveDelete(id) {
        const token = localStorage.getItem('jwt');

        return fetch(`${this._url}/movies/${id}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
            .then(this._onResponse)
    }

    getSavedMovies() {
        const token = localStorage.getItem('jwt');

        return fetch(`${this._url}/movies/`, {
            headers: {
                'authorization': `Bearer ${token}`,
            }
        })

            .then(this._onResponse)
    }


}

const api = new Api(apiConfig);

export default api