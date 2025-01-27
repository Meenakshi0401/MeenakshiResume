import Title from "../../common/Title";
import DATA from "../../constant/myData";

const Achievements = () => {
    return (
        <div className="achievement-sc resume-block">
            <div className="container">
                <div className="achievement-sc dotted-border-left">
                    <Title titleText={"Achievements"} />
                    <div className="achievement-list grid">
                        {DATA.achievements?.map((item) => (
                            <AchievementItem key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Achievements;

const AchievementItem = ({ item }) => {
    return (
        <div className="achievement-item" key={item.id}>
            <div className="achieve-title flex items-center">
                <img src={item.icon} className="achieve-icon" alt={item.title} />
                <h3 className="achieve-course">{item.title}</h3>
            </div>
            <p className="achieve-info text">
                {item.info}
            </p>
        </div>
    )
}