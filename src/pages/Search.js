import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Row from "../components/Row";
import Modal from "../components/Modal";
import searchErrorIcon from "../images/search-error-svgrepo-com.svg";
import { TailSpin } from "react-loader-spinner";

function Search(){
    const [results, setResults] = useState([]);
    const [selectedShoe, setSelectedShoe] = useState(null);
    const [searchError, setSearchError] = useState(false);
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('q');
    
    useEffect(() => {
        setSearchError(false);
        setLoading(true);

        fetch(`https://sneakr-server.vercel.app/search?q=${query}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => {
                // Check if data is valid
                if (Array.isArray(data)) {
                    setResults(data);
                } else {
                    throw new Error("Invalid data format");
                }
                setLoading(false);
            })
            .catch(error => {
                console.error("Search failed:", error);
                setSearchError(true);
                setLoading(false);
            });

    }, [location.search]);

    const handleShoeClick = (shoe) => {
        setSelectedShoe(shoe);
    };

    const handleCloseModal = () => {
        setSelectedShoe(null);
    }

    if (loading) {
        return (
            <TailSpin
                ariaLabel="tail-spin-loading"
                height="100"
                width="100"
                color="cornflowerblue"
                wrapperClass="loading"
            />
        )
    }

    if(searchError){
        return(
            <div className="main">
                <div className="error">
                    <img src={searchErrorIcon} alt="Search Error"/>
                    <p>No results found for "{query}" Please try again.</p>
                </div>
            </div>
        )
    }
    
    return(
        <div className="main">
            <h3>Search Results for "{query}":</h3>
            <p className="results">Showing {results.length} results</p>
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