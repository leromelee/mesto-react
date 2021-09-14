import Card from './Card.js'
import React from 'react';
import api from '../utils/Api.js'

function Main(props) {

    const [userInfo, setUserInfo] = React.useState({ userName: "", userDescription: "", userAvatar: "" });
    const [cards, setCards] = React.useState([]);
    React.useEffect(() => {
        Promise.all([api.getUserData(), api.getInitialCards()])
            .then(([userData, initialCards]) => {
                setUserInfo({
                    userName: userData.name,
                    userDescription: userData.about,
                    userAvatar: userData.avatar,
                });
                setCards(initialCards);
                console.log(initialCards);
            })

            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <main className="main">
            <section className="profile">
                <div className="profile__avatar-overlay">
                    <img src={userInfo.userAvatar} alt="Аватар" className="profile__avatar"></img>
                    <button type="button" className="profile__avatar-button" onClick={props.isEditAvatarPopupOpen}></button>
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">{userInfo.userName}</h1>
                    <p className="profile__disc">{userInfo.userDescription}</p>
                    <button name="popup__edit" className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
                </div>
                <button className="profile__add-button" type="button" onClick={props.isAddPlacePopupOpen}></button>
            </section>
            <section className="cards">
                <ul className='card'>
                    {cards.map((card, i) => {
                        return (
                            <Card card={card} key={card._id} onCardClick={props.onCardClick} />
                        )
                    })}
                </ul>
            </section>

        </main>
    )
}
export default Main