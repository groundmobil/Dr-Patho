import React, { useState } from 'react';
import LabDetailsPopup from './LabDetailsPopup';

const TestDetailsPopup = ({ onClose }) => {
  const [addedToCart, setAddedToCart] = useState(Array(12).fill(false));
  const [showLabDetails, setShowLabDetails] = useState(false);
  const [expandedDescriptionIndex, setExpandedDescriptionIndex] = useState(null);

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
    setExpandedDescriptionIndex(null); 
  };

  const toggleDescription = (index) => {
    setExpandedDescriptionIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  
  const getDescriptionPopup = (test) => (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(/Images/dr.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%', 
        height: '100vh', 
        padding: '20px',
        borderRadius: '18px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
        zIndex: '9999',
        color: 'white',
        display: 'flex',
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      textAlign: 'center', 
      }}
    >
      <button
        onClick={() => setExpandedDescriptionIndex(null)}
        style={{
          background: 'transparent',
          border: 'none',
          position: 'absolute',
          top: '10px',
          right: '10px',
          cursor: 'pointer',
          fontSize: '16px',
          color: 'white',
        }}
      >
        &times;
      </button>
      <h4 style={{ fontSize: '44px' }}>{test.name}</h4>
    <p style={{ fontSize: '25px' }}>{test.description}</p> 
    </div>
  );

  const isAnyTestSelected = addedToCart.some((isSelected) => isSelected);

  // Test data for each grid square
  const testData = [
    { name: 'HBA1c', description: 'This is a blood test which shows a 3 months average sugar level in blood. Heamoglobin A1c is a type of protein in red blood cell that is resposible for exchange of gases, oxygen to the cell and brings back carbon dioxide. When sugar builds in the blood it binds to Heamoglobin. This test determines how much sugar is bound to RBC. Since RBC lives for 3 months it shows a 3 months average. This test helps ypur doctor understand the effectiveness of the sugar control regime he/she has prescribed and adjust (if required) accordingly.' },
    { name: 'Complete Blood Count- EDTA Blood', description: 'Description for Test 2' },
    { name: 'Glucose Post Prandial (PPBS)', description: 'Description for Test 2' },
    { name: 'Glucose Random(RBS)', description: 'Description for Test 2' },
    { name: 'Liver Function Test (LFT)', description: 'Description for Test 2' },
    { name: 'Glucose, Fluid', description: 'Description for Test 2' },
    { name: 'Diabetes Profile, Basic', description: 'Description for Test 2' },
    { name: 'Electrolytes Urine', description: 'Description for Test 2' },
    { name: 'Glucose Fasting(FBS)- Sodium Fluoride', description: 'Description for Test 2' },
    { name: 'Stool Examination', description: 'Description for Test 2' },
    { name: 'Lipid Profile- Serum', description: 'Description for Test 2' },
    { name: 'Complete Urine Examination', description: 'Description for Test 2' },
  ];

  return (
    <div>
      {showLabDetails ? (
        <LabDetailsPopup onClose={closeLabDetails} />
      ) : (
       <div>
          <div
            className={expandedDescriptionIndex !== null ? 'grid-hidden' : 'grid-visible'}
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
                <p>
                  {`${test.description.slice(0, 15)}...`}
                  {test.description.length > 15 && (
                    <span
                      style={{
                        color: 'blue',
                        textDecoration: 'underline',
                        cursor: 'pointer',
                        marginLeft: '5px',
                      }}
                      onClick={() => setExpandedDescriptionIndex(index)}
                    >
                      Show more
                    </span>
                  )}
                </p>
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
            {expandedDescriptionIndex !== null &&
            getDescriptionPopup(testData[expandedDescriptionIndex])}
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
        </div>
      )}
    </div>
  );
};

export default TestDetailsPopup;
