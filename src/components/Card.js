import React from 'react';

function Card(props) {
    function handleClick() {
        props.onCardClick(props.card);
    };

return (
        <li className="element">
            <img src={props.card.link}
                 alt={props.card.name}
                 className='element__photo'
                 onClick={handleClick} />
                <button className="element__button-delete" type="button"></button>
                <div className="element__info">
                    <h2 className="element__title">{props.card.name}</h2>
                    <div className="element__button-group">
                        <button className="element__button" type="button"></button>
                        <p className="element__like-counter">{props.card.likes.length}</p>
                    </div>
                </div>
        </li>
)
}
export default Card

