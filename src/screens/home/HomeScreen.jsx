import Achievements from "../../components/achievements/Achievements";
import BackgroundEffect from "../../components/background_effect/BackgroundEffect";
import Education from "../../components/education/Education";
import Experience from "../../components/experience/experience";
import Header from "../../components/header/Header";
import Hobbies from "../../components/hobbies/Hobbies";
import Skill from "../../components/skills/Skills";

const HomeScreen = () => {
    return (
        <div>
            <Header />
            <Skill />
            <Experience />
            <Education />
            <Achievements />
            <Hobbies />
            <BackgroundEffect />
        </div>
    )
}

export default HomeScreen;