import React, { useState, useEffect } from "react";
import "../css/Main.css"
import Row from "./Row";
import Modal from "./Modal";

function Main(){
    const [popular, setPopular] = useState([]);
    const [jordan, setJordan] = useState([]);
    const [nike, setNike] = useState([]);
    const [newBalance, setNewBalance] = useState([]);
    const [adidas, setAdidas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedShoe, setSelectedShoe] = useState(null);

    const popularRequest = fetch("http://localhost:8000/mostpopular")
    const jordanRequest = fetch("http://localhost:8000/jordan");
    const nikeRequest = fetch("http://localhost:8000/nike");
    const newBalanceRequest = fetch("http://localhost:8000/newbalance");
    const adidasRequest = fetch("http://localhost:8000/adidas")

    async function fetchData(){
        Promise.all([
            popularRequest,
            jordanRequest,
            nikeRequest,
            newBalanceRequest,
            adidasRequest
        ])
         .then(([resPopular, resJordan, resNike, resNewBalance, resAdidas]) =>
            Promise.all([
                resPopular.json(), 
                resJordan.json(), 
                resNike.json(), 
                resNewBalance.json(), 
                resAdidas.json()
            ])
        )
         .then(([dataPopular, dataJordan, dataNike, dataNewBalance, dataAdidas]) => {
            setPopular(dataPopular);
            setJordan(dataJordan);
            setNike(dataNike);
            setNewBalance(dataNewBalance);
            setAdidas(dataAdidas);
         })
         .finally(() => {
            setLoading(false);
         });
    }

    useEffect(() => {
        fetchData();
    });

    const handleShoeClick = (shoe) => {
        setSelectedShoe(shoe);
    };

    const handleCloseModal = () => {
        setSelectedShoe(null);
    }

    if (loading) {
        return <div className="loading">Loading...</div>
    }

    return(
        <div className="main">
            <div className="rowDivider">
                <h3>Most Popular</h3>
                <Row shoes={popular} onShoeClick={handleShoeClick}/>
            </div>
            <div className="rowDivider">
                <h3>Jordan</h3>
                <Row shoes={jordan} onShoeClick={handleShoeClick}/>
            </div>
            <div className="rowDivider">
                <h3>Nike</h3>
                <Row shoes={nike} onShoeClick={handleShoeClick}/>
            </div>
            <div className="rowDivider">
                <h3>New Balance</h3>
                <Row shoes={newBalance} onShoeClick={handleShoeClick}/>
            </div>
            <div className="rowDivider">
                <h3>Adidas</h3>
                <Row shoes={adidas} onShoeClick={handleShoeClick}/>
            </div>
            {selectedShoe && (
                <Modal shoe={selectedShoe} onClose={handleCloseModal} />
            )}
        </div>
    )
}

export default Main;