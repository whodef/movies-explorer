import Portfolio from '../Portfolio/Portfolio';
import student from '../../images/whodef.jpg';

function AboutMe() {
    return (
        <section className="about-me">
            <h2 className="landing__section-title">Студент Яндекс.Практикума</h2>
            <article className="about-me__two-columns">
                <div className="about-me__two-columns-container">
                    <h3 className="about-me__title">Татьяна</h3>
                    <p className="about-me__subtitle">Full-stack, Веб-разработчик</p>
                    <p className="about-me__text">
                        В настоящее время повышаю квалификацию в Яндекс.Практикум на роль «Веб-разработчик». Здесь я
                        изучаю Frontend с VanillaJS и React.js. Также и серверную часть, где есть Node.js, express,
                        MongoDB. В свободное время интересно изучать что-нибудь новенькое. Интересуюсь Linux как Open
                        source, подтягиваю Go и Python. В общем, открыта для сотрудничеству и совместной работе.
                    </p>
                    <nav>
                        <ul className="about-me__social-links-list">
                            <li className="about-me__social-links-list-element">
                                <a className="about-me__social-link app__link"
                                   href="https://www.facebook.com/whodef" target="_blank" rel="noreferrer">
                                    Facebook
                                </a>
                            </li>
                            <li className="about-me__social-links-list-element">
                                <a className="about-me__social-link app__link"
                                   href="https://github.com/whodef" target="_blank" rel="noreferrer">
                                    Github
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <img className="about-me__photo" src={ student }
                     alt="Фотография автора диплома - Татьяны, студентки Yandex.Praktikum"/>
            </article>
            <Portfolio/>
        </section>
    );
}

export default AboutMe;
