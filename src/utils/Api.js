class Api {

    constructor({ url, headers }) {
        this._url = url;
        this._headers = headers;
    }

    updateUser(user) {
        const url = `${this._url}/users/me`;
        return fetch(url, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify(user),
        }).then(handleResponse);
    }

    updateAvatar(user) {
        const url = `${this._url}/users/me/avatar`;
        return fetch(url, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify(user),
        }).then(handleResponse);
    }

    getInitialCards() {
        const url = `${this._url}/cards`;
        return fetch(url, {
            headers: this._headers,
        }).then(handleResponse);
    }

    getUserData() {
        const url = `${this._url}/users/me`;
        return fetch(url, {
            headers: this._headers,
        }).then(handleResponse);
    }

    createCard(card) {
        const url = `${this._url}/cards`;
        return fetch(url, {
            headers: this._headers,
            method: "POST",
            body: JSON.stringify(card),
        }).then(handleResponse);
    }

    deleteCard(cardId) {
        const url = `${this._url}/cards/${cardId}`;
        return fetch(url, {
            headers: this._headers,
            method: "DELETE",
        }).then(handleResponse);
    }

    removeLike(cardId) {
        const url = `${this._url}/cards/likes/${cardId}`;
        return fetch(url, {
            method: "DELETE",
            headers: this._headers,
        }).then(handleResponse);
    }

    addLike(cardId) {
        const url = `${this._url}/cards/likes/${cardId}`;
        return fetch(url, {
            method: "PUT",
            headers: this._headers,
        }).then(handleResponse);
    }
};

const handleResponse = (res) => {
    if (!res.ok) {
        return Promise.reject(`Error: ${res.status}`);
    }
    return res.json();
}

const api = new Api({
    url: "https://mesto.nomoreparties.co/v1/cohort-26",
    headers: {
        authorization: "e343e8e1-608e-40c1-bda2-485b4f9fb449",
        "Content-Type": "application/json",
    },
});

export default api;