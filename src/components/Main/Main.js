import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';

function Main() {
    return (
        <div className="landing">
            <Promo/>
            <AboutProject/>
            <Techs/>
            <AboutMe/>
        </div>
    );
}

export default Main;
