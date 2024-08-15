import React, { useState} from "react";
import Row from "./Row";
import Modal from "./Modal";
import { TailSpin } from "react-loader-spinner";
import "../css/Main.css";

function Main({popular, jordan, nike, newBalance, adidas, puma, crocs, converse, HOKA, cloudOn, loading}){
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
                <TailSpin 
                ariaLabel="tail-spin-loading"
                height="100"
                width="100"
                color="cornflowerblue"
                wrapperClass="loading"
                />
            </div>
        )
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
                <h3>Crocs</h3>
                <Row shoes={crocs} onShoeClick={handleShoeClick}/>
            </div>
            <div className="rowDivider">
                <h3>Converse</h3>
                <Row shoes={converse} onShoeClick={handleShoeClick}/>
            </div>
            <div className="rowDivider">
                <h3>Hoka</h3>
                <Row shoes={HOKA} onShoeClick={handleShoeClick}/>
            </div>
            <div className="rowDivider">
                <h3>On</h3>
                <Row shoes={cloudOn} onShoeClick={handleShoeClick}/>
            </div>
            {selectedShoe && (
                <Modal shoe={selectedShoe} onClose={handleCloseModal} />
            )}
        </div>
    )
}

export default Main;