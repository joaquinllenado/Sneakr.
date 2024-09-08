import "../css/Modal.css";

function Modal({shoe, onClose}){
    if(!shoe) return null;
    const {shoeName, thumbnail, lowestResellPrice, resellLinks, description, retailPrice} = shoe;

    return (
        <div className="modal" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <img src={thumbnail} alt="Shoe"/>
                <div id="shoeInfo">
                    <button className="modal-close" onClick={onClose}>x</button>
                    <h2 id="shoeName">{shoeName}</h2>
                    { description && <p id="shoeDescription">{description}</p> }
                    <p id="retail">Retail: <span className="price">${retailPrice}</span></p>
                    <ul className="resellSites">
                        {lowestResellPrice.stockX &&
                            <li><a href={resellLinks.stockX}>StockX: <span className="price">${lowestResellPrice.stockX}</span></a></li>
                        }
                        {lowestResellPrice.goat &&
                            <li><a href={resellLinks.goat}>Goat: <span className="price">${lowestResellPrice.goat}</span></a></li>
                        }
                        {lowestResellPrice.flightClub &&
                            <li><a href={resellLinks.flightClub}>Flight Club: <span className="price">${lowestResellPrice.flightClub}</span></a></li>
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Modal;