import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Row from "../components/Row";
import Modal from "../components/Modal";

function Search(){
    const [results, setResults] = useState([]);
    const [selectedShoe, setSelectedShoe] = useState(null);
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('q');
    
    useEffect(() => {
        fetch(`http://localhost:8000/search?q=${query}`)
            .then(response => response.json())
            .then(data => setResults(data))
            .catch(error => console.error('Error:', error));
    }, [location.search]);

    const handleShoeClick = (shoe) => {
        setSelectedShoe(shoe);
    };

    const handleCloseModal = () => {
        setSelectedShoe(null);
    }

    return(
        <div className="main">
            <h3>{query}</h3>
            <div className="rowDivider">
                <Row shoes={results.slice(0,5)} onShoeClick={handleShoeClick} />
            </div>
            <div className="rowDivider">
                <Row shoes={results.slice(5,10)} onShoeClick={handleShoeClick} />
            </div>
            <div className="rowDivider">
                <Row shoes={results.slice(10,15)} onShoeClick={handleShoeClick} />
            </div>
            <div className="rowDivider">
                <Row shoes={results.slice(15,20)} onShoeClick={handleShoeClick} />
            </div>
            {selectedShoe && (
            <Modal shoe={selectedShoe} onClose={handleCloseModal} />
            )}
        </div>
    )
}

export default Search;