import "../css/ShoeCard.css";


function ShoeCard({shoe, toggleModal}) {
    const {shoeName, thumbnail, lowestResellPrice, resellLinks} = shoe;

    return (
        <div className="shoeCard" onClick={toggleModal}>
            <img src={thumbnail} alt={shoeName}/>
            <p id="shoeName">{shoeName}</p>
            <p>Lowest Resell Prices:</p>
            <ul className="resellSites">
                {lowestResellPrice.stockX &&
                    <li>
                        <a 
                            href={resellLinks.stockX} 
                            target="_blank" 
                            rel="noopener noreferrer">
                            StockX: <span>${lowestResellPrice.stockX}</span>
                        </a>
                    </li>
                }
                {lowestResellPrice.goat &&
                    <li>
                        <a 
                            href={resellLinks.goat} 
                            target="_blank" 
                            rel="noopener noreferrer">
                            Goat: <span>${lowestResellPrice.goat}</span>
                        </a>
                    </li>
                }
                {lowestResellPrice.flightClub &&
                    <li>
                        <a 
                            href={resellLinks.flightClub} 
                            target="_blank" 
                            rel="noopener noreferrer">
                            Flight Club: <span>${lowestResellPrice.flightClub}</span>
                        </a>
                    </li>
                }
            </ul>
        </div>
    )
}

export default ShoeCard;