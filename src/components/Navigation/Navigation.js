import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import TabletMenu from '../TabletMenu/TabletMenu';

function Navigation() {
    const location = useLocation();

    const [ isTabletMenuOpen, setIsTabletMenuOpen ] = useState(false);

    const handleTabletMenuOpen = () => setIsTabletMenuOpen(true);

    const onTabletMenuClose = () => setIsTabletMenuOpen(false);

    useEffect(() => {
        setIsTabletMenuOpen(false);
    }, [location.pathname]);

    return (
        <nav className="navigation">
            <ul className={ `navigation__films ${ location.pathname === 'landing' ? 'navigation__films_hidden' : '' }` }>
                <li className="navigation__films-element">
                    <Link
                        to="/movies"
                        className="navigation__link app__link">
                        Фильмы
                    </Link>
                </li>
                <li className="navigation__films-element">
                    <Link
                        to="/saved-movies"
                        className="navigation__link app__link">
                        Сохранённые фильмы
                    </Link>
                </li>
            </ul>

            <Link
                to="/profile"
                className={ `navigation__profile-edit navigation__profile-edit_place_header app__link ${ location.pathname === 'landing'
                    ? 'navigation__profile-edit_hidden'
                    : '' } navigation__profile_edit_place_header` }>
                <span className="navigation__profile-text">Аккаунт</span>
                <div className="navigation__profile-icon-wrapper">
                    <div className="navigation__profile-icon"/>
                </div>
            </Link>

            <button className={ `navigation__burger-button ${ isTabletMenuOpen || location.pathname === 'landing'
                ? 'navigation__burger-button_hidden'
                : '' } app__link` }
                    type="button"
                    onClick={ handleTabletMenuOpen }>
            </button>

            <TabletMenu
                isOpened={ isTabletMenuOpen }
                onTabletMenuClose={ onTabletMenuClose }
            />
        </nav>
    );
}

export default Navigation;
