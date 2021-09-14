import React from 'react';

function PopupWithForm(props) {
    return ((
        < div className={props.isOpen ? `popup popup_active popup_type_${props.name}` : `popup popup_type_${props.name}`} >
            <div className="popup__form">
            <form className="popup__content" name={props.name}>
                <button className="popup__button-close" type="reset" onClick={props.closeAllPopups}></button>
                <h2 className="popup__title">{props.title}</h2>
                {props.children}
                <button className="popup__save" type="submit">{props.buttonName}</button>
            </form>
        </div >
        </div>
    ));
};

export default PopupWithForm;