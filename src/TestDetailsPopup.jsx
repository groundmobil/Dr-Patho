import React, { useState } from 'react';
import LabDetailsPopup from './LabDetailsPopup';

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

  // Test data for each grid square
  const testData = [
    { name: 'HBA1c', description: 'Description for Test 1' },
    { name: 'Complete Blood Count(CBC)- EDTA Whole Blood', description: 'Description for Test 2' },
    { name: 'Glucose Post Prandial (PPBS)', description: 'Description for Test 2' },
    { name: 'Glucose Random(RBS)- Sodium Fluoride', description: 'Description for Test 2' },
    { name: 'Liver Function Test (LFT)', description: 'Description for Test 2' },
    { name: 'Glucose, Fluid', description: 'Description for Test 2' },
    { name: 'Diabetes Profile, Basic', description: 'Description for Test 2' },
    { name: 'Electrolytes Urine', description: 'Description for Test 2' },
    { name: 'Glucose Fasting(FBS)- Sodium Fluoride', description: 'Description for Test 2' },
    { name: 'Stool Examination', description: 'Description for Test 2' },
    { name: 'Lipid Profile- Serum', description: 'Description for Test 2' },
    { name: 'Complete Urine Examination(CUE)- Spot Urine', description: 'Description for Test 2' },
  ];

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
          {testData.map((test, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ccc", borderRadius: "8px", width: "13vw", height: "15vw", textAlign: "center", background: "#fff", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "3px", marginBottom: "20px",
              }}
            >
              <div>
                
                <h4>{test.name}</h4>
                <p>{test.description}</p>
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
            disabled={!isAnyTestSelected}
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
