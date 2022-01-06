function Footer() {
    return (
        <footer className="footer">
            <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__content">
                <p className="footer__copyright">&#169;2021</p>
                <nav>
                    <ul className="footer__list">
                        <li className="footer__list-element">
                            <a className="footer__link app__link" href="https://practicum.yandex.ru/" target="_blank"
                               rel="noreferrer">
                                Яндекс.Практикум
                            </a>
                        </li>
                        <li className="footer__list-element">
                            <a className="footer__link app__link" href="https://github.com/whodef/" target="_blank"
                               rel="noreferrer">
                                Github
                            </a>
                        </li>
                        <li className="footer__list-element">
                            <a className="footer__link app__link" href="https://www.facebook.com/whodef" target="_blank"
                               rel="noreferrer">
                                Facebook
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;
