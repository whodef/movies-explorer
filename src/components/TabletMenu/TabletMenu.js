import { Link, useLocation } from 'react-router-dom';

function TabletMenu({ isOpened, onTabletMenuClose }) {
    const location = useLocation();

    const handleTabletMenuClose = () => onTabletMenuClose();

    return (
        <div className={ `tablet-menu__container ${ isOpened ? 'tablet-menu__container_opened' : '' }` }>
            <div className={ `tablet-menu ${ isOpened ? 'tablet-menu_opened' : '' }` }>
                <button className="tablet-menu__close-button" onClick={ handleTabletMenuClose }/>
                <nav className="tablet-menu__navigation">
                    <ul className="tablet-menu__list">
                        <li className="tablet-menu__list-element">
                            <Link className="tablet-menu__link app__link"
                                  to="/"
                                  onClick={ handleTabletMenuClose }>
                                Главная
                            </Link>
                        </li>
                        <li className="tablet-menu__list-element">
                            <Link
                                className={ `tablet-menu__link ${ location.pathname === 'movies' ? 'tablet-menu__link_active' : '' } app__link` }
                                to="/movies"
                                onClick={ handleTabletMenuClose }>
                                Фильмы
                            </Link>
                        </li>
                        <li className="tablet-menu__list-element">
                            <Link
                                className={ `tablet-menu__link ${ location.pathname === 'saved-movies' ? 'tablet-menu__link_active' : '' } app__link` }
                                to="/saved-movies"
                                onClick={ handleTabletMenuClose }>
                                Сохранённые фильмы
                            </Link>
                        </li>
                    </ul>
                    <Link className="navigation__profile-edit navigation__profile-edit_place_tablet-menu app__link"
                          to="/profile"
                          onClick={ handleTabletMenuClose }>
                        <p className="navigation__profile-text">Аккаунт</p>
                        <div className="navigation__profile-icon-wrapper">
                            <div className="navigation__profile-icon"/>
                        </div>
                    </Link>
                </nav>
            </div>
        </div>
    );
}

export default TabletMenu;
