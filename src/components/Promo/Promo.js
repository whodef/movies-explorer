import promoLogo from '../../images/landing-logo.svg';

function Promo() {
    return (
        <section className="promo">
            <div className="promo__info">
                <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
                <p className="promo__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                <button className="promo__button app__link">Узнать больше</button>
            </div>
            <img className="promo__img" src={ promoLogo } alt="Планета из слова WEB"/>
        </section>
    );
}

export default Promo;
