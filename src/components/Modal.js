import "../css/Modal.css";

function Modal({shoe, onClose}){
    if(!shoe) return null;
    const {shoeName, thumbnail, lowestResellPrice, resellLinks, description} = shoe;

    return (
        <div className="modal" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                
                <img src={thumbnail} alt="Shoe"/>
                <div id="shoeInfo">
                    <button className="modal-close" onClick={onClose}>x</button>
                    <h2 id="shoeName">{shoeName}</h2>
                    <p id="shoeDescription">{description}</p>
                    <p>Lowest Resell Prices:</p>
                    <ul className="resellSites">
                        {lowestResellPrice.stockX &&
                            <li><a href={resellLinks.stockX}>StockX: <span>${lowestResellPrice.stockX}</span></a></li>
                        }
                        {lowestResellPrice.goat &&
                            <li><a href={resellLinks.goat}>Goat: <span>${lowestResellPrice.goat}</span></a></li>
                        }
                        {lowestResellPrice.flightClub &&
                            <li><a href={resellLinks.flightClub}>Flight Club: <span>${lowestResellPrice.flightClub}</span></a></li>
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Modal;