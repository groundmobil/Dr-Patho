import React, { useState } from 'react';
import LabDetailsPopup from './LabDetailsPopup'; // Adjust the import based on your project structure

const TestDetailsPopup = ({ onClose }) => {
  const [addedToCart, setAddedToCart] = useState(Array(12).fill(false));
  const [showLabDetails, setShowLabDetails] = useState(false);

  const handleAddToCart = (index) => {
    setAddedToCart((prev) => {
      const newAddedToCart = [...prev];
      newAddedToCart[index] = !newAddedToCart[index];
      return newAddedToCart;
    });
  };

  const openLabDetails = () => {
    setShowLabDetails(true);
  };

  const closeLabDetails = () => {
    setShowLabDetails(false);
  };

  const isAnyTestSelected = addedToCart.some((isSelected) => isSelected);

  return (
    <div>
      {showLabDetails ? (
        <LabDetailsPopup onClose={closeLabDetails} />
      ) : (
        <div
          style={{
            position: "fixed", left: "50%", top: "55%", transform: "translate(-50%, -50%)", borderRadius: "10px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)", display: "grid", gridTemplateColumns: "repeat(4, minmax(15vw, 1fr))", gap: "20px", padding: "15px", background: "transparent",
          }}
        >
          {Array.from({ length: 12 }, (_, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ccc", borderRadius: "8px", width: "13vw", height: "15vw", textAlign: "center", background: "#fff", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "3px", marginBottom: "20px",
              }}
            >
              <div>
                <h3>Test {index + 1}</h3>
                <p>Test Name</p>
                <p>Test Description</p>
              </div>
              <button
                onClick={() => handleAddToCart(index)}
                style={{
                  marginTop: "10px", background: addedToCart[index] ? "green" : "blue", color: "#fff", fontSize: "12px", padding: "5px 10px", borderRadius: "15px",
                }}
              >
                {addedToCart[index] ? "Selected" : "Select Test"}
              </button>
            </div>
          ))}
          <button
            onClick={openLabDetails}
            disabled={!isAnyTestSelected} // Disable the button if no test is selected
            style={{
              gridColumn: "span 6", marginTop: "-4px", background: "blue", color: "#fff", fontSize: "15px", padding: "8px 10px", width: "120px", justifySelf: "end", borderRadius: "40px",
            }}
          >
            Select Lab
          </button>
          <button
            onClick={onClose}
            style={{
              gridColumn: "span 6", marginTop: "-60px", background: "blue", color: "#fff", fontSize: "15px", padding: "8px 10px", width: "120px", justifySelf: "start", borderRadius: "20px", height: "40px"
            }}
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
};

export default TestDetailsPopup;
