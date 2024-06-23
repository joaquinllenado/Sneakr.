import "../css/ShoeCard.css";

function ShoeCard(shoes) {
    return (
        <div className="shoeCard">
            <img src={shoes.thumbnail} />
            <p>{shoes.name}</p>
            <p>{shoes.price}</p>
        </div>
    )
}

export default ShoeCard;