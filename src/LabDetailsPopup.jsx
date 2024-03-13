import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const LabDetailsPopup = ({ onClose, pincode }) => {
  const navigate = useNavigate();
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
    if (rating > 0) {
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
    }
  
    return null; // Return null when rating is not available
  };

  const isCheckoutEnabled = selectedLabs.length > 0;

  const handleCheckoutClick = () => {
    if (isCheckoutEnabled) {
      console.log('Checkout clicked with selected labs:', selectedLabs);
      // Implement your checkout logic here
      navigate('/MyCart'); // Navigate to "MyCart" on checkout
    }
  };

  // Manually input lab details here
  const labsForPincode444606 = [
    { name: 'Suburban Diagnostics', price: 200, address: 'Lifecare Laboratories, Rukmani Nagar, Opp. Atul Mangal Hall', rating: 2.7},
    { name: 'Dr.Lal path labs', price: 250, address: 'VMV Road Near Shegaon Naka Malviya complex, Rathi Nagar', rating: 5 },
    { name: 'Lupin Diagnostics', price: 200, address: 'Tank Chamber First Floor, Gadge Nagar', rating: 'No Reviews'},
    { name: 'Camp diagnostics', price: 350, address: 'Old Bypass Road, Camp Rd, near Camp Masjeed, Chaprasi Pura', rating: 'No Reviews'},
    { name: 'Balaji diagnostics', price: 300, address: 'Jain hostel Road, Maltekdi Road, near Bus Stand', rating: 2.1 },
    { name: 'Pathkind Labs', price: 190, address: 'Shop No 18, Laxmi Complex, Sindhi Chowk, New Cotton Market Rd, near MM motors, Camp', rating: 4.9 },
  ];

  const labsForPincode411017 = [
    { name: 'Pathkind Lab', price: 200, address: 'Besides Satnam Medical, Shop No 2, Ground Floor, Survey No 5/3, Kalewadi - Rahatani Rd, near Radhika Electronics, Ram Nagar, Pimple Saudagar', rating: 4.9},
    { name: 'Neubrg AG Diagnostics', price: 350, address: 'c/o Star Imaging and Research Centre, 1st Floor Solitaire Business Hub, Survey No. 208/206, Kalewadi Phata, Kaspate Wasti, Wakad', rating: 'No Reviews'},
    { name: 'Metropolis', price: 350, address: 'Sukhwani Chamber Pimpri Colony, Pimpri Chinchwad, near Hotel Ratna', rating: 4.3},
    { name: 'Redcliffe', price: 350, address: 'Office No 7 & 8, Sr No 101, Jm Heights, Sai Shrishti Angan, Kuldeep Angan Society, Nehru Nagar, Pimpri Colony', rating: 4.9},
    { name: 'Dr Lal Path Labs', price: 350, address: 'Shop No. 76, Ground Floor, Vision 9 Mall, Kunal Icon Rd, Pimple Saudagar', rating: 'No Reviews'},
  ];

  const labs = pincode === '411017' ? labsForPincode411017 : labsForPincode444606;

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
              {labs.map((lab, index) => (
                <tr key={index}>
                  <td style={{ border: '1px solid #fff', padding: '18px' }}>{lab.name}</td>
                  <td style={{ border: '1px solid #fff', padding: '18px' }}>{lab.price}</td>
                  <td style={{ border: '1px solid #fff', padding: '18px' }}>{lab.address}</td>
                  <td style={{ border: '1px solid #fff', padding: '18px' }}>
                    {lab.rating} {renderStars(lab.rating)}
                  </td>
                  <td style={{ border: '1px solid #fff', padding: '18px' }}>
                    <button
                      onClick={() => handleAddToCartClick(index)}
                      style={{
                        background: isAddedToCartArray[index] ? '#28a745' : 'blue',
                        color: '#fff',
                        borderRadius: '20px',
                      }}
                    >
                      {isAddedToCartArray[index] ? 'Added' : 'Add to Cart'}
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
            onClick={handleCheckoutClick}
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
