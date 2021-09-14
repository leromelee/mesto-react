function ImagePopup(props) {
    return ((
        <div className={props.isOpen ? `popup popup_active popup_type_${props.name}` : `popup popup_type_${props.name}`}>
            <div className="popup__form">
                <figure className="popup__content-closecard">
                    <img className="popup__photo" src={props.card.link} alt={props.card.name} />
                    <figcaption className="popup__name">{props.card.name}</figcaption>
                    <button className="popup__button-close" type="reset" onClick={props.closeAllPopups}></button>
                </figure>

            </div>
        </div>
    ));
};

export default ImagePopup;