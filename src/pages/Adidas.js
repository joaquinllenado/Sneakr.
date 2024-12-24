import Row from "../components/Row";
import Modal from "../components/Modal";
import { useState } from "react";

function Adidas({shoes, loading}){
    const [selectedShoe, setSelectedShoe] = useState(null);

    const handleShoeClick = (shoe) => {
        setSelectedShoe(shoe);
    };

    const handleCloseModal = () => {
        setSelectedShoe(null);
    }

    if (loading) {
        return( 
            <div className="main">
                <h3>Adidas</h3>
                <div className="loading">Loading...</div>
            </div>
        )
    }
    
    return(
        <div className="main">
            <h3>Adidas</h3>
            <div className="rowDivider">
                <Row shoes={shoes.slice(0,6)} onShoeClick={handleShoeClick} />
            </div>
            <div className="rowDivider">
                <Row shoes={shoes.slice(6,12)} onShoeClick={handleShoeClick} />
            </div>
            <div className="rowDivider">
                <Row shoes={shoes.slice(12,18)} onShoeClick={handleShoeClick} />
            </div>
            <div className="rowDivider">
                <Row shoes={shoes.slice(18,24)} onShoeClick={handleShoeClick} />
            </div>
            {selectedShoe && (
            <Modal shoe={selectedShoe} onClose={handleCloseModal} />
            )}
        </div>
    )
}

export default Adidas;