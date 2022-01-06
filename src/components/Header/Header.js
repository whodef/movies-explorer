import { Link } from "react-router-dom";
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

function Header({ color, loggedIn, children }) {
    return (
        <header className={ `header header_authorized_${ color }` }>
            <Logo/>
            { loggedIn ?
                <Navigation/>
                :
                <div className="navigation__login">
                    <Link to="/signup" className="navigation__login-element navigation__link app__link">Регистрация</Link>
                    <Link to="/signin" className="navigation__button navigation__login-element app__link">Войти</Link>
                </div>
            }
            { children }
        </header>
    );
}

export default Header;
