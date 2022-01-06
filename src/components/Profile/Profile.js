import { useContext } from 'react';
import { currentUserContext } from '../../contexts/CurrentUserContext';
import { useFormValidation } from '../../hooks/useFormValidation';
import { regExp } from '../../utils/constants';

function Profile({ onSubmit, onLogout }) {
    const currentUser = useContext(currentUserContext);

    const { values, errors, isValid, handleChange } = useFormValidation({
        name: currentUser.name,
        email: currentUser.email,
    });

    const isDisabledProfileForm = (currentUser.name === values.name && currentUser.email === values.email)
        || values.name === '' || values.email === '' || !isValid;

    const handleProfileFormSubmit = (e) => {
        e.preventDefault();
        !isDisabledProfileForm && onSubmit(values);
    }

    return (
        <section className="profile">
            <h1 className="profile__title">Привет, { currentUser.name }!</h1>
            <form className="profile__form" onClick={ handleProfileFormSubmit }>
                <div className="profile__inputs-wrapper">
                    <div className="profile__input-container">
                        <label className="profile__form-label" htmlFor="name">Имя</label>
                        <input
                            className="profile__input"
                            id="name"
                            type="text"
                            name="name"
                            value={ values.name }
                            onChange={ handleChange }
                            pattern={ regExp.name }
                        />
                    </div>
                    <div className="profile__input-container">
                        <label className="profile__form-label" htmlFor="email">E-mail</label>
                        <input
                            className="profile__input"
                            id="email"
                            type="email"
                            name="email"
                            value={ values.email }
                            onChange={ handleChange }
                            // pattern={ regExp.email }
                        />
                    </div>
                </div>
                <div className="profile__button-container">
                    { errors.name ? <p className="profile__error-message">Ошибка имени: { errors.name }</p> : '' }
                    { errors.email ? <p className="profile__error-message">Ошибка e-mail: { errors.email }</p> : '' }
                    <button
                        className={ `profile__button ${ isDisabledProfileForm ? 'profile__button_disabled' : '' }` }
                        type="submit"
                        onClick={ handleProfileFormSubmit }
                    >
                        Редактировать
                    </button>
                    <button
                        className="profile__button profile__button_color_red"
                        type="submit"
                        onClick={ onLogout }
                    >
                        Выйти из аккаунта
                    </button>
                </div>
            </form>
        </section>
    );
}

export default Profile;
