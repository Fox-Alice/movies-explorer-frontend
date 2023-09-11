import React from 'react'
import success from '../../images/success.png';
import fail from '../../images/fail.png';
import '../InfoTooltip/InfoTooltip.css'


function InfoTooltip({ active, onClose, isUserUpdate, message }) {

    return (
        <div className={`popup ${active && 'popup_opened'}`}>
            <div className="popup__container">
                <button
                    onClick={onClose}
                    className="popup__close-icon"
                    aria-label="close"
                    type="button"
                />
                <div>
                    <img
                        className="popup__image"
                        src={isUserUpdate ? success : fail}
                        alt="Success"
                    />
                    <p className="popup__title">{message ? message : 'Ошибка'}</p>
                </div>
            </div>
        </div>
    );
}

export default InfoTooltip;