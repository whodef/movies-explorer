import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

function AccountForm() {
    return (
        <form className="account-form" onSubmit={ handleSubmit } noValidate>
            <div className="account-form__container">
                <Logo/>
                <h1 className="account-form__title">{ title }</h1>
                <fieldset className="account-form__input-area">
                    { children }
                </fieldset>
            </div>
            <div className="account-form__container">
                <button className="account-form__button app__link" type="submit" disabled={ isButtonDisabled }>
                    { buttonText }
                </button>
                <div className="account-form__caption-container">
                    <p className="account-form__caption">{ caption }</p>
                    <Link to={ link } className="account-form__caption-link app__link">{ linkText }</Link>
                </div>
            </div>
        </form>
    );
}

export default AccountForm;

