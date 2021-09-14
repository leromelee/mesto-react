import React from 'react';
import Header from './Header.js'
import Footer from './Footer.js'
import Main from './Main.js'
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from './ImagePopup.js'
function App() {
    const [profilePopupOpen, setProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [selectedCard, selectCard] = React.useState({});
    const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);


    function handleCardClick(select) {
        selectCard(select);
        setIsImagePopupOpen(true);
    }
    function handleEditProfileClick() {
        setProfilePopupOpen(true);
    }
    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }
    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }




    function closeAllPopups() {
        setIsEditAvatarPopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setProfilePopupOpen(false);
        setIsImagePopupOpen(false);
    }


  return (
      <div className="root">
      <div className="page">
          <Header />
          <Main onEditProfile={handleEditProfileClick} isAddPlacePopupOpen={handleAddPlaceClick} isEditAvatarPopupOpen={handleEditAvatarClick}
                onCardClick={handleCardClick} card={selectedCard}/>
          <ImagePopup card={selectedCard} isOpen={isImagePopupOpen} closeAllPopups={closeAllPopups} />
          <PopupWithForm name="edit" title="Редактировать&nbsp;профиль" buttonName="Сохранить" isOpen={profilePopupOpen} closeAllPopups={closeAllPopups}>
              <div className="popup__input-container">
                  <input id="name-profile" className="popup__input popup__input_form_title" type="text" name="name-profile" minLength="2"
                         maxLength="40" required />
                  <span className="popup__error" id="name-profile-error"></span>
              </div>
              <div className="popup__input-container">
                  <input id="description-profile" className="popup__input popup__input_form_link" type="text" name="description-profile"
                         minLength="2" maxLength="40" required />
                  <span className="popup__error" id="description-profile-error"></span>
              </div>
          </PopupWithForm>
          <PopupWithForm name="add" title="Новое&nbsp;место" buttonName="Сохранить" isOpen={isAddPlacePopupOpen} closeAllPopups={closeAllPopups}>
              <div className="popup__input-container">
                  <input id="name-place" className="popup__input popup__input_form_title" placeholder="Название" type="text" name="name-place" minLength="2"
                         maxLength="30" required />
                  <span className="popup__error" id="name-place-error"></span>
              </div>
              <div className="popup__input-container">
                  <input id="link" className="popup__input popup__input_form_link" placeholder="Ссылка на картинку" type="url" name="link" required />
                  <span className="popup__error" id="link-error"></span>
              </div>
          </PopupWithForm>
          <PopupWithForm name="avatar" title="Обновить&nbsp;аватар" buttonName="Сохранить" isOpen={isEditAvatarPopupOpen} closeAllPopups={closeAllPopups}>
              <div className="popup__input-container">
                  <input type="url" id="avatar-link" name="avatar-link" className="popup__input popup__input_form_link" placeholder="Введите ссылку"
                         required />
                  <span className="popup__error" id="avatar-link-error"></span>
              </div>
          </PopupWithForm>
          <PopupWithForm name="sure" title="Вы&nbsp;уверены?" buttonName="Да" isOpen={false} />
          <Footer />
      </div>
      </div>
  );
}

export default App;
