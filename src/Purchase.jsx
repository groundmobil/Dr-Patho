import React, { useState } from 'react';

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [formData, setFormData] = useState({
    creditCardNumber: '',
    expirationDate: '',
    cvv: '',
    paypalEmail: '',
    upiMethod: 'gpay',
    UPIID: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    switch (paymentMethod) {
      case 'creditCard':
        
        console.log('Credit Card Payment:', formData.creditCardNumber, formData.expirationDate, formData.cvv);
        break;
      case 'paypal':
        
        console.log('PayPal Payment:', formData.paypalEmail);
        break;
      case 'UPI':
       
        console.log('UPI Payment:', formData.upiMethod, formData.UPIID);
        break;
      case 'COD':
        
        console.log('Cash on Delivery');
        break;
      default:
        console.log('Unknown Payment Method');
    }
  
    alert('Payment successful!');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
      <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '20px', maxWidth: '500px', width: '100%', height: '400px', backgroundColor: '#f0f0f0' }}>
        <h2 style={{ color: '#fff', backgroundColor: '#555', padding: '10px', borderRadius: '5px', textAlign: 'center', marginBottom: '20px' }}>Mode of Payment</h2>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label style={{ marginBottom: '10px', border: paymentMethod === 'creditCard' ? '2px solid blue' : 'none', padding: '5px', borderRadius: '5px' }}>
            <input
              type="radio"
              name="paymentMethod"
              value="creditCard"
              checked={paymentMethod === 'creditCard'}
              onChange={() => setPaymentMethod('creditCard')}
            />
            Credit Card
          </label>
          {paymentMethod === 'creditCard' && (
            <div>
              <input
                type="text"
                name="creditCardNumber"
                placeholder="Credit Card Number"
                value={formData.creditCardNumber}
                onChange={handleInputChange}
                style={{ marginBottom: '10px', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
              />
              <input
                type="text"
                name="expirationDate"
                placeholder="Expiration Date"
                value={formData.expirationDate}
                onChange={handleInputChange}
                style={{ marginBottom: '10px', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
              />
              <input
                type="text"
                name="cvv"
                placeholder="CVV"
                value={formData.cvv}
                onChange={handleInputChange}
                style={{ marginBottom: '10px', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
              />
            </div>
          )}
          <label style={{ marginBottom: '10px', border: paymentMethod === 'paypal' ? '2px solid blue' : 'none', padding: '5px', borderRadius: '5px' }}>
            <input
              type="radio"
              name="paymentMethod"
              value="paypal"
              checked={paymentMethod === 'paypal'}
              onChange={() => setPaymentMethod('paypal')}
            />
            PayPal
          </label>
          {paymentMethod === 'paypal' && (
            <div>
              <input
                type="email"
                name="paypalEmail"
                placeholder="PayPal Email"
                value={formData.paypalEmail}
                onChange={handleInputChange}
                style={{ marginBottom: '10px', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
              />
            </div>
          )}
          <label style={{ marginBottom: '10px', border: paymentMethod === 'UPI' ? '2px solid blue' : 'none', padding: '5px', borderRadius: '5px' }}>
            <input
              type="radio"
              name="paymentMethod"
              value="UPI"
              checked={paymentMethod === 'UPI'}
              onChange={() => setPaymentMethod('UPI')}
            />
            UPI
          </label>
          {paymentMethod === 'UPI' && (
            <div>
              <select
                name="upiMethod"
                value={formData.upiMethod}
                onChange={handleInputChange}
                style={{ marginBottom: '10px', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
              >
                <option value="gpay">Google Pay</option>
                <option value="phonepay">PhonePe</option>
                <option value="paytm">Paytm</option>
                <option value="credupi">CRED UPI</option>
              </select>
              <input
                type="text"
                name="UPIID"
                placeholder="UPI ID"
                value={formData.UPIID}
                onChange={handleInputChange}
                style={{ marginBottom: '10px', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
              />
              <p style={{ fontSize: '12px', color: '#888' }}>Enter your UPI ID associated with your selected UPI method.</p>
            </div>
          )}
          <label style={{ marginBottom: '10px', border: paymentMethod === 'COD' ? '2px solid blue' : 'none', padding: '5px', borderRadius: '5px' }}>
            <input
              type="radio"
              name="paymentMethod"
              value="COD"
              checked={paymentMethod === 'COD'}
              onChange={() => setPaymentMethod('COD')}
            />
            Cash on Delivery
          </label>
        </div>

        <form onSubmit={handleSubmit} style={{ position: 'relative' }}>
          <button type="submit" style={{  backgroundColor: '#007bff',
            color: 'white', border: 'none',
            borderRadius: '20px',
            cursor: 'pointer',
            padding: '10px 20px',
            width: '100%',
            
          }}>Pay Now</button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
