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
    const [puma, setPuma] = useState([]);
    const [converse, setConverse] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedShoe, setSelectedShoe] = useState(null);

    const popularRequest = fetch("http://localhost:8000/mostpopular");
    const jordanRequest = fetch("http://localhost:8000/jordan");
    const nikeRequest = fetch("http://localhost:8000/nike");
    const newBalanceRequest = fetch("http://localhost:8000/newbalance");
    const adidasRequest = fetch("http://localhost:8000/adidas");
    const pumaRequest = fetch("http://localhost:8000/puma");
    const converseRequest = fetch("http://localhost:8000/converse");

    async function fetchData(){
        Promise.all([
            popularRequest,
            jordanRequest,
            nikeRequest,
            newBalanceRequest,
            adidasRequest,
            pumaRequest,
            converseRequest
        ])
         .then(([resPopular, resJordan, resNike, resNewBalance, resAdidas, resPuma, resConverse]) =>
            Promise.all([
                resPopular.json(), 
                resJordan.json(), 
                resNike.json(), 
                resNewBalance.json(), 
                resAdidas.json(),
                resPuma.json(),
                resConverse.json()
            ])
        )
         .then(([dataPopular, dataJordan, dataNike, dataNewBalance, dataAdidas, dataPuma, dataConverse]) => {
            setPopular(dataPopular);
            setJordan(dataJordan);
            setNike(dataNike);
            setNewBalance(dataNewBalance);
            setAdidas(dataAdidas);
            setPuma(dataPuma);
            setConverse(dataConverse);
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
            <div className="rowDivider">
                <h3>Puma</h3>
                <Row shoes={puma} onShoeClick={handleShoeClick}/>
            </div>
            <div className="rowDivider">
                <h3>Converse</h3>
                <Row shoes={converse} onShoeClick={handleShoeClick}/>
            </div>
            {selectedShoe && (
                <Modal shoe={selectedShoe} onClose={handleCloseModal} />
            )}
        </div>
    )
}

export default Main;