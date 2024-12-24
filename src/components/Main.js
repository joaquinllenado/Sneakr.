import React, { useState } from "react";
import Row from "./Row";
import Modal from "./Modal";
import { TailSpin } from "react-loader-spinner";
import "../css/Main.css";

const categories = [
  { name: "Most Popular", key: "mostpopular" },
  { name: "Jordan", key: "jordan" },
  { name: "Nike", key: "nike" },
  { name: "New Balance", key: "newbalance" },
  { name: "Adidas", key: "adidas" },
  { name: "Puma", key: "puma" },
  { name: "Crocs", key: "crocs" },
  { name: "Converse", key: "converse" },
  { name: "Hoka", key: "hoka" },
  { name: "On", key: "on" },
];

function Main({ loading, ...shoesData }) {
  const [selectedShoe, setSelectedShoe] = useState(null);

  const handleShoeClick = (shoe) => setSelectedShoe(shoe);

  const handleCloseModal = () => setSelectedShoe(null);

  if (loading) {
    return (
      <main className="main" aria-live="polite">
        <TailSpin
          ariaLabel="Loading spinner"
          height="100"
          width="100"
          color="cornflowerblue"
          wrapperClass="loading"
        />
      </main>
    );
  }

  return (
    <main className="main">
      {categories.map(({ name, key }) => (
        <div key={key} className="rowDivider">
          <h3>{name}</h3>
          <Row shoes={shoesData[key]} onShoeClick={handleShoeClick} />
        </div>
      ))}
      {selectedShoe && 
        <Modal 
          shoe={selectedShoe} 
          onClose={handleCloseModal} 
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        />}
    </main>
  );
}

export default Main;
