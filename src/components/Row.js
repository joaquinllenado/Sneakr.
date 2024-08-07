import ShoeCard from "./ShoeCard";
import "../css/Row.css";

function Row({shoes, onShoeClick}){
    const displayedShoes = shoes.slice(0, 5);
    return(
        <div className="row">
            {displayedShoes.map((shoe, index) => (
                <ShoeCard key={index} shoe={shoe} toggleModal={() => onShoeClick(shoe)}/>
            ))}
        </div>
    )
}

export default Row;