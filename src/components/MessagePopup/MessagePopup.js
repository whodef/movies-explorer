import messageIconOk from '../../images/image-popup-ok.svg';
import messageIconError from '../../images/image-popup-error.svg';

const MessagePopup = ({ isOpen, message, success, onClose }) => {
    return (
        <div className={ `popup popup_content_message ${ isOpen ? 'popup_opened' : '' }` }>
            <div className="popup__container popup__container_content_message">
                <button
                    className="popup__close"
                    onClick={ onClose }
                />
                <img
                    className="popup__icon"
                    src={ success ? messageIconOk : messageIconError }
                    alt="Состояние"
                />
                <p className="popup__message">{ message }</p>
            </div>
        </div>
    )
}

export default MessagePopup;
