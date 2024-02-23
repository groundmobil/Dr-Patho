import React, { useState } from 'react';
import PropTypes from 'prop-types';


const LabDetailsPopup = ({ onClose }) => {
  const [isAddedToCartArray, setIsAddedToCartArray] = useState(new Array(5).fill(false));
  const [selectedLabs, setSelectedLabs] = useState([]);

  const handleAddToCartClick = (index) => {
    const updatedArray = [...isAddedToCartArray];
    updatedArray[index] = !updatedArray[index];
    setIsAddedToCartArray(updatedArray);

    if (!isAddedToCartArray[index]) {
      setSelectedLabs((prevSelectedLabs) => [...prevSelectedLabs, index]);
    } else {
      setSelectedLabs((prevSelectedLabs) =>
        prevSelectedLabs.filter((selectedLab) => selectedLab !== index)
      );
    }
  };

  const renderStars = (rating) => {
    const filledStars = Math.floor(rating);
    const emptyStars = 5 - filledStars;
    const stars = [];

    for (let i = 0; i < filledStars; i++) {
      stars.push(<span key={i} style={{ color: '#ffc107', marginRight: '6px' }}>★</span>);
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={filledStars + i} style={{ color: '#fff', marginRight: '6px' }}>☆</span>);
    }

    return stars;
  };

  const isCheckoutEnabled = selectedLabs.length > 0;

  return (
    <div className="popup-container">
      <div className="popup">
        <div className="popup-header" style={{ color: '#fff', marginTop: '-70px' }}>
          <h2>Lab Details</h2>
        </div>

        <div className="lab-details-table">
          <table style={{ borderCollapse: 'collapse', width: '100%', height: '80%', color: '#fff' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid #fff', padding: '18px' }}>Lab Name</th>
                <th style={{ border: '1px solid #fff', padding: '18px' }}>Price</th>
                <th style={{ border: '1px solid #fff', padding: '18px' }}>Address</th>
                <th style={{ border: '1px solid #fff', padding: '18px' }}>Rating</th>
                <th style={{ border: '1px solid #fff', padding: '18px' }}>Select Lab</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((labIndex) => (
                <tr key={labIndex - 1}>
                  <td style={{ border: '1px solid #fff', padding: '18px' }}>Lab {labIndex}</td>
                  <td style={{ border: '1px solid #fff', padding: '18px' }}>${labIndex * 10}</td>
                  <td style={{ border: '1px solid #fff', padding: '18px' }}>123 Lab Street</td>
                  <td style={{ border: '1px solid #fff', padding: '18px' }}>
                    {labIndex + 0.5} {renderStars(labIndex + 0.5)}
                  </td>
                  <td style={{ border: '1px solid #fff', padding: '18px' }}>
                    <button
                      onClick={() => handleAddToCartClick(labIndex - 1)}
                      style={{
                        background: isAddedToCartArray[labIndex - 1] ? '#28a745' : 'blue',
                        color: '#fff',
                        borderRadius: '20px',
                      }}
                    >
                      {isAddedToCartArray[labIndex - 1] ? 'Added' : 'Add to Cart'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
          <button
            onClick={onClose}
            style={{
              background: 'blue',
              color: '#fff',
              fontSize: '15px',
              padding: '2px 20px',
              borderRadius: '40px',
            }}
          >
            Back
          </button>
          <button
            onClick={() => {
              if (isCheckoutEnabled) {
                console.log('Checkout clicked with selected labs:', selectedLabs);
                // Implement your checkout logic here
              }
            }}
            disabled={!isCheckoutEnabled}
            style={{
              background: isCheckoutEnabled ? 'blue' : '#ccc',
              color: '#fff',
              fontSize: '15px',
              padding: '8px 10px',
              borderRadius: '20px',
              height: '40px',
            }}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

LabDetailsPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default LabDetailsPopup;
