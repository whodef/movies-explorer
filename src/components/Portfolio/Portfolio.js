function Portfolio() {
    return (
        <section className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <div className="portfolio__list">
                <a className="portfolio__link app__link" href="https://whodef.github.io/how-to-learn/" target="_blank"
                   rel="noreferrer">
                    <p className="portfolio__project-name">Статичный сайт</p>
                    <p className="portfolio__list-element">↗</p>
                </a>
                <a className="portfolio__link app__link" href="https://whodef.github.io/russian-travel/" target="_blank"
                   rel="noreferrer">
                    <p className="portfolio__project-name">Адаптивный сайт</p>
                    <p className="portfolio__list-element">↗</p>
                </a>
                <a className="portfolio__link app__link" href="https://react-mesto-auth-theta.vercel.app/sign-up"
                   target="_blank" rel="noreferrer">
                    <p className="portfolio__project-name">Одностраничное приложение</p>
                    <p className="portfolio__list-element">↗</p>
                </a>
            </div>
        </section>
    );
}

export default Portfolio;
