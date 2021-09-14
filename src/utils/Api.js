class Api {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    };

    getInitialCards() {
        const url = `${this._baseUrl}/cards`;
        return fetch(url, {
            headers: this._headers,
        }).then(handleResponse);
    };

    getUserData() {
        const url = `${this._baseUrl}/users/me`;
        return fetch(url, {
            headers: this._headers,
        }).then(handleResponse);
    };

    createCard(card) {
        const url = `${this._baseUrl}/cards`;
        return fetch(url, {
            headers: this._headers,
            method: "POST",
            body: JSON.stringify(card),
        }).then(handleResponse);
    };

    deleteCard(cardId) {
        const url = `${this._baseUrl}/cards/${cardId}`;
        return fetch(url, {
            headers: this._headers,
            method: "DELETE",
        }).then(handleResponse);
    };

    updateUser(user) {
        const url = `${this._baseUrl}/users/me`;
        return fetch(url, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify(user),
        }).then(handleResponse);
    };

    updateAvatar(user) {
        const url = `${this._baseUrl}/users/me/avatar`;
        return fetch(url, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify(user),
        }).then(handleResponse);
    };

    addLike(cardId) {
        const url = `${this._baseUrl}/cards/likes/${cardId}`;
        return fetch(url, {
            method: "PUT",
            headers: this._headers,
        }).then(handleResponse);
    };

    removeLike(cardId) {
        const url = `${this._baseUrl}/cards/likes/${cardId}`;
        return fetch(url, {
            method: "DELETE",
            headers: this._headers,
        }).then(handleResponse);
    };
};

const handleResponse = (res) => {
    if (!res.ok) {
        return Promise.reject(`Error: ${res.status}`);
    }
    return res.json();
};

const api = new Api({
    baseUrl: "https://mesto.nomoreparties.co/v1/cohort-26",
    headers: {
        authorization: "e343e8e1-608e-40c1-bda2-485b4f9fb449",
        "Content-Type": "application/json",
    },
});

export default api;