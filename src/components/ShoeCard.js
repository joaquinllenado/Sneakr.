import "../css/ShoeCard.css";

function ShoeCard({ shoe, toggleModal }) {
  const { shoeName, thumbnail, lowestResellPrice = {}, resellLinks = {} } = shoe;

  const resellPlatforms = [
    { name: 'StockX', price: lowestResellPrice.stockX, link: resellLinks.stockX },
    { name: 'Goat', price: lowestResellPrice.goat, link: resellLinks.goat },
    { name: 'Flight Club', price: lowestResellPrice.flightClub, link: resellLinks.flightClub },
  ];

  return (
    <div className="shoeCard" onClick={toggleModal}>
      <img src={thumbnail} alt={shoeName} />
      <p id="shoeName">{shoeName}</p>
      <div id="resellPrices">
        <p>Lowest Resell Prices:</p>
        <ul className="resellSites">
          {resellPlatforms.map(
            (platform) =>
              platform.price && (
                <li key={platform.name}>
                  <a href={platform.link} target="_blank" rel="noopener noreferrer">
                    {platform.name}: <span className="price">${platform.price}</span>
                  </a>
                </li>
              )
          )}
        </ul>
    </div>
    </div>
  );
}

export default ShoeCard;