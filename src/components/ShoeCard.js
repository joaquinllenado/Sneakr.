import "../css/ShoeCard.css";

function ShoeCard({shoe}) {
    const {shoeName, thumbnail, lowestResellPrice} = shoe;
    return (
        <div className="shoeCard">
            <img src={thumbnail} />
            <p id="shoeName">{shoeName}</p>
            <p>Lowest Resell Prices:</p>
            <ul className="resellSites">
                <li>StockX: <span>${lowestResellPrice.stockX}</span></li>
                {lowestResellPrice.goat &&
                    <li>Goat: <span>${lowestResellPrice.goat}</span></li>
                }
                {lowestResellPrice.flightClub &&
                    <li>Flight Club: <span>${lowestResellPrice.flightClub}</span></li>
                }
            </ul>
        </div>
    )
}

export default ShoeCard;