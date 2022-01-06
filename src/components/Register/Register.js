import { Link } from 'react-router-dom';
import { useFormValidation } from '../../hooks/useFormValidation';
import { regExp } from '../../utils/constants';
import Logo from '../Logo/Logo';

function Register({ onSubmit }) {
    const { values, errors, isValid, handleChange } = useFormValidation({ email: '', password: '' });

    const isDisabled = values.name === '' || values.email === '' || values.password === '' || !isValid;

    function handleSubmit(e) {
        e.preventDefault();
        !isDisabled && onSubmit(values);
    }


    return (
        <form className="form">
            <div className="form__container">
                <Logo/>
                <h1 className="form__title">Добро пожаловать!</h1>
                <fieldset className="form__input-area">
                    <label className="form__label" htmlFor="name">Имя</label>
                    <input
                        className={ `form__input ${ errors.name ? 'form__input_error' : '' }` }
                        required
                        id="name"
                        type="text"
                        name="name"
                        value={ values.name || '' }
                        onChange={ handleChange }
                    />
                    { errors.name ? <p className="form__error-message">{ errors.name }</p> : '' }

                    <label className="form__label" htmlFor="email">E-mail</label>
                    <input
                        className={ `form__input ${ errors.email ? 'form__input_error' : '' }` }
                        required
                        id="email"
                        type="email"
                        name="email"
                        value={ values.email || '' }
                        onChange={ handleChange }
                        //pattern={ regExp.email }
                    />
                    { errors.email ? <p className="form__error-message">{ errors.email }</p> : '' }

                    <label className="form__label" htmlFor="password">Пароль</label>
                    <input
                        className={ `form__input ${ errors.password ? 'form__input_error' : '' }` }
                        required
                        id="password"
                        type="password"
                        name="password"
                        minLength={ 6 }
                        onChange={ handleChange }
                        pattern={ regExp.password }
                    />
                    { errors.password ? <p className="form__error-message">{ errors.password }</p> : '' }
                </fieldset>
            </div>
            <div className="form__container">
                <button
                    className={ `form__button ${ isDisabled ? 'form__button_disabled' : '' } app__link` }
                    type="submit"
                    onClick={ handleSubmit }
                >
                    Зарегистрироваться
                </button>
                <div className="form__caption-container">
                    <p className="form__caption">
                        Уже зарегистрированы?&nbsp;
                        <Link to='/signin' className='form__caption-link app__link'>
                            Войти
                        </Link>
                    </p>
                </div>
            </div>
        </form>
    );
}

export default Register;
