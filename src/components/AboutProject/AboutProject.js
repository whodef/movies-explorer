function AboutProject() {
    return (
        <section className="about-project">
            <h2 className="landing__section-title">О проекте</h2>
            <div className="about-project__container">
                <div className="about-project__element">
                    <h3 className="about-project__element-title">
                        Дипломный проект включал 5 этапов
                    </h3>
                    <p className="about-project__element-text">
                        Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные
                        доработки.
                    </p>
                </div>
                <div className="about-project__element">
                    <h3 className="about-project__element-title">
                        На выполнение диплома ушло 5 недель
                    </h3>
                    <p className="about-project__element-text">
                        У каждого этапа был мягкий и жёсткий дедлайн, который нужно было соблюдать, чтобы успешно
                        защититься.
                    </p>
                </div>
            </div>

            <div className="progress-bar">
                <div className="progress-bar__container">
                    <div className="progress-bar__element">
                        <p className="progress-bar__caption">1 неделя</p>
                    </div>
                    <p className="progress-bar__text">Back-end</p>
                </div>
                <div className="progress-bar__container">
                    <div className="progress-bar__element progress-bar-element_color">
                        <p className="progress-bar__caption progress-bar__caption_color">4 недели</p>
                    </div>
                    <p className="progress-bar__text">Front-end</p>
                </div>
            </div>
        </section>
    );
}

export default AboutProject;
