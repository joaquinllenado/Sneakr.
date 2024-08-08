import Row from "../components/Row";
import Modal from "../components/Modal";
import { useState } from "react";

function MostPopular({shoes, loading}){
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
                <h3>Most Popular</h3>
                <div className="loading">Loading...</div>
            </div>
        )
    }
    
    return(
        <div className="main">
            <h3>Most Popular</h3>
            <div className="rowDivider">
                <Row shoes={shoes.slice(0,5)} onShoeClick={handleShoeClick} />
            </div>
            <div className="rowDivider">
                <Row shoes={shoes.slice(5,10)} onShoeClick={handleShoeClick} />
            </div>
            {selectedShoe && (
            <Modal shoe={selectedShoe} onClose={handleCloseModal} />
            )}
        </div>
    )
}

export default MostPopular;