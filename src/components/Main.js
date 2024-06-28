import React, { useState, useEffect } from "react";
import "../css/Main.css"
import Row from "./Row";

function Main(){
    const [popular, setPopular] = useState([]);
    const [jordan, setJordan] = useState([]);
    const [nike, setNike] = useState([]);
    const [newBalance, setNewBalance] = useState([]);
    const [adidas, setAdidas] = useState([]);

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
            Promise.all([resPopular.json(), resJordan.json(), resNike.json(), resNewBalance.json(), resAdidas.json()])
        )
         .then(([dataPopular, dataJordan, dataNike, dataNewBalance, dataAdidas]) => {
            setPopular(dataPopular);
            setJordan(dataJordan);
            setNike(dataNike);
            setNewBalance(dataNewBalance);
            setAdidas(dataAdidas);
         })
    }

    useEffect(() => {
        fetchData();
    }, [])

    return(
        <div className="main">
            <div className="rowDivider">
                <h3>Most Popular</h3>
                <Row shoes={popular}/>
            </div>
            <div className="rowDivider">
                <h3>Jordan</h3>
                <Row shoes={jordan}/>
            </div>
            <div className="rowDivider">
                <h3>Nike</h3>
                <Row shoes={nike}/>
            </div>
            <div className="rowDivider">
                <h3>New Balance</h3>
                <Row shoes={newBalance}/>
            </div>
            <div className="rowDivider">
                <h3>Adidas</h3>
                <Row shoes={adidas}/>
            </div>
        </div>
    )
}

export default Main;