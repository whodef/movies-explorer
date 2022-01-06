import { useHistory } from 'react-router-dom';

function ErrorMessage() {
    const history = useHistory();

    return (
        <div className="error-message">
            <h1 className="error-message__title">404</h1>
            <p className="error-message__text">Страница не найдена</p>
            <button
                className="error-message__button app__link"
                onClick={ () => history.go(-2) }
            >
                Назад
            </button>
        </div>
    );
}

export default ErrorMessage;
