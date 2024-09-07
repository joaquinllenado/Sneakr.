import "../css/AboutCard.css";

//TODO: Reformat UI 
function AboutCard({title, content}) {
    return(
        <div className="aboutCard">
            <div className="cardContent">
                <h2>{title}</h2>
                <p>{content}</p>
            </div>
        </div>
    )
}

export default AboutCard;