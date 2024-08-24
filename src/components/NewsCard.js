import "../css/NewsCard.css";

function NewsCard({reversed = false, thumbnail, title, description}){
    return(
        <>
            <div className={`newsCard ${reversed ? 'reversed' : ''}`}>
                <div className="imageSection">
                    <img src={thumbnail} alt="Thumbnail for article"/>
                </div>
                <div className={`textSection`}>
                    <h1 className="newsTitle">{title}</h1>
                    <p className="newsDescription">{description}</p>
                    <button className="readButton">Read Now</button>
                </div>
            </div>
        </>
    )
}

export default NewsCard;