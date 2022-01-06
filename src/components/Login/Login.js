import { Link } from 'react-router-dom';
import { useFormValidation } from '../../hooks/useFormValidation';
import { regExp } from '../../utils/constants';
import Logo from '../Logo/Logo';

function Login({ onSubmit }) {
    const { values, errors, isValid, handleChange } = useFormValidation({ email: '', password: '' });

    const isDisabled = values.email === '' || values.password === '' || !isValid;

    function handleSubmit(e) {
        e.preventDefault();
        !isDisabled && onSubmit(values);
    }

    return (
        <form className="account-form">
            <div className="account-form__container">
                <Logo/>
                <h1 className="account-form__title">Рады видеть!</h1>
                <fieldset className="account-form__input-area">
                    <label className="account-form__label" htmlFor="email">E-mail</label>
                    <input
                        className={ `account-form__input ${ errors.email ? 'account-form__input_error' : '' }` }
                        required
                        id="email"
                        type="email"
                        name="email"
                        value={ values.email || '' }
                        onChange={ handleChange }
                        //pattern={ regExp.email }
                    />
                    { errors.email ? <p className="form__error-message">{ errors.email }</p> : '' }

                    <label className="account-form__label" htmlFor="password">Пароль</label>
                    <input
                        className={ `account-form__input ${ errors.password ? 'account-form__input_error' : '' }` }
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
            <div className="account-form__container">
                <button
                    className={ `account-form__button ${ isDisabled ? 'account-form__button_disabled' : '' } app__link` }
                    type="submit"
                    onClick={ handleSubmit }
                >
                    Войти
                </button>
                <div className="account-form__caption-container">
                    <p className="account-form__caption">
                        Ещё не зарегистрированы?&nbsp;
                        <Link className='account-form__caption-link app__link' to='/signup'>
                            Зарегистрироваться
                        </Link>
                    </p>
                </div>
            </div>
        </form>
    );
}

export default Login;
