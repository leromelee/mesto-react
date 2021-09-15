import React from 'react';
import api from '../utils/Api.js';
import CurrentUserContext from '../contexts/CurrentUserContext.js';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import EditProfilePopup from './EditProfilePopup.js';
import AddPlacePopup from './AddPlacePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';

function App () {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [cards, setCards] = React.useState([]);
    const [selectedCard, setSelectedCard] = React.useState({});
    const [currentUser, setCurrentUser] = React.useState({});

    function closeAllPopups () {
        setSelectedCard({});
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
    }

    function handleClick (card) {
        setSelectedCard(card);
    }
    function handleProfileClick () {
        setIsEditProfilePopupOpen(true);
    }
    function handleAddCardClick () {
        setIsAddPlacePopupOpen(true);
    }
    function handleAvatarClick () {
        setIsEditAvatarPopupOpen(true);
    }



    React.useEffect (() => {
        Promise.all([api.getUserInfo (), api.getInitialCards ()])
            .then(([userInfo, initialCards]) => {
                setCurrentUser(userInfo);
                setCards(initialCards);
            })
            .catch(err => console.log (err));
    }, []);



    function handleUpdateUser(currentUser) {
        api.updateUser(currentUser.name, currentUser.about)
            .then(res => {
                setCurrentUser (res);
                closeAllPopups ();
            })
            .catch(err => console.log (err));
    }
    function handleUpdateAvatar(currentUser) {
        api.updateAvatar(currentUser.avatar)
            .then (res => {
                setCurrentUser (res);
                closeAllPopups ();
            })
            .catch (err => console.log (err));
    }
    function handleCardLike(card, isLiked) {
        (isLiked ? api.removeLike(card._id) : api.addLike(card._id))
            .then(newCard => {
                setCards(cards =>
                    cards.map(item => (item._id === card._id ? newCard : item))
                );
            })
            .catch(err => console.log (err));
    }
    function handleCardDelete(card) {
        api.deleteCard(card._id)
            .then (() => {
                setCards(cards => cards.filter(item => item._id !== card._id));
            })
            .catch(err => console.log(err));
    }
    function handleAddPlaceSubmit(card) {
        api.addCard(card.name, card.link)
            .then(newCard => {
                setCards([newCard, ...cards]);
                closeAllPopups();
            })
            .catch(err => console.log (err));
    }


    return (
        <div className="root">
            <div className="page">
        <CurrentUserContext.Provider value={currentUser}>
            <Header />
            <Main onCardLike={handleCardLike} onCardDelete={handleCardDelete}
                  onAddPlace={handleAddCardClick} onEditAvatar={handleAvatarClick} onEditProfile={handleProfileClick}
                  onCardClick={handleClick} cards={cards}
            />
            <PopupWithForm name="card-delete-confirm" title="Вы уверены?" buttonText="Да"
            />
            <EditAvatarPopup  onClose={closeAllPopups} isOpen={isEditAvatarPopupOpen}onUpdateAvatar={handleUpdateAvatar}
            />
            <EditProfilePopup  onClose={closeAllPopups} isOpen={isEditProfilePopupOpen} onUpdateUser={handleUpdateUser}
            />
            <AddPlacePopup  onClose={closeAllPopups} isOpen={isAddPlacePopupOpen} onAddPlace={handleAddPlaceSubmit}
            />
            <ImagePopup card={selectedCard} onClose={closeAllPopups}
            />
            <Footer />
        </CurrentUserContext.Provider>

            </div>

        </div>

    );
}

export default App;