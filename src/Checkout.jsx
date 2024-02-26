// CheckoutPage.jsx
import React, { useState } from 'react';

const steps = ['Address', 'Date and Time', 'Payment'];

const CheckoutPage = () => {
  const [step, setStep] = useState(1);
  const [showCelebration, setShowCelebration] = useState(false);

  const handleNext = () => {
    if (step < steps.length) {
      setStep(step + 1);
    } else {
      setShowCelebration(true);
      // Simulating a delay before resetting the celebration state
      setTimeout(() => {
        setShowCelebration(false);
        setStep(1); // Reset to the first step
      }, 3000); // Adjust the duration of the celebration animation
    }
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  return (
    <div>
      <style>
        {`
          body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f2f2f2;
            color: #333;
          }

          .timeline {
            display: flex;
            align-items: center;
            margin-bottom: 20px;
          }

          .step {
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
          }

          .completed .dot {
            background-color: #4caf50;
            border: 2px solid #4caf50;
          }

          .dot {
            width: 25px;
            height: 25px;
            background-color: white;
            border: 2px solid #ddd;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            color: white;
          }

          .line {
            flex: 1;
            height: 2px;
            background-color: #4caf50;
          }

          span {
            margin-top: 5px;
            color: white;
          }

          .step-title {
            background-color: transparent;
            padding: 5px;
            border-radius: 5px;
            color: white;
            margin-bottom: 5px;
            border: 2px solid #007bff;
            position: relative;
          }

          .bottom-right-button,
          .next-button,
          .previous-button {
            background-color: #007bff;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 20px;
            cursor: pointer;
            position: absolute;
            bottom: 20px;
          }

          .bottom-right-button {
            right: 20px;
          }

          .next-button {
            right: 20px;
          }

          .previous-button {
            left: 20px;
          }

          .next-button:hover,
          .previous-button:hover {
            background-color: #0056b3;
          }

          .date-time-box {
            margin-top: 20px;
            padding: 20px;
            border: 2px solid #007bff;
            border-radius: 10px;
          }

          .celebration-container {
            display: ${showCelebration ? 'block' : 'none'};
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 9999;
          }

          .celebration-animation {
            font-size: 3em;
            color: #4caf50;
            animation: bounce 2s infinite;
          }

          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(-30px);
            }
            60% {
              transform: translateY(-15px);
            }
          }
        `}
      </style>
      <div className="timeline">
        {steps.map((stepName, index) => (
          <React.Fragment key={index}>
            {index > 0 && <div className="line"></div>}
            <div className={`step ${index + 1 <= step ? 'completed' : ''}`}>
              <div className="dot">{index + 1 < step ? '✔' : index + 1}</div>
              <span>{stepName}</span>
            </div>
          </React.Fragment>
        ))}
      </div>
      <div className="celebration-container">
        <div className="celebration-animation">🎉</div>
      </div>
      {step === 1 && (
        <div>
          <div className="step-title">
            <h2>Step 1: Address</h2>
            <button className="bottom-right-button" onClick={() => alert('Address Changed')}>
              Change Address
            </button>
          </div>
          <button className="next-button" onClick={handleNext}>
            Next
          </button>
        </div>
      )}
      {step === 2 && (
        <div>
          <div className="step-title">
            <h2>Step 2: Date and Time</h2>
            <div className="date-time-box">
              <h3>Calendar</h3>
              {/* Display 10 days calendar with date and day */}
              {/* Morning Slots */}
              <h3>Morning Slots</h3>
              {/* Display morning time slots as buttons */}
              {/* Evening Slots */}
              <h3>Evening Slots</h3>
              {/* Display evening time slots as buttons */}
            </div>
          </div>
          <button className="previous-button" onClick={handlePrev}>Previous</button>
          <button className="next-button" onClick={handleNext}>
            Next
          </button>
        </div>
      )}
      {step === 3 && (
        <div>
          <h2 style={{ color: 'white' }}>Step 3: Payment</h2>
          {/* Your payment form components go here */}
          <button className="previous-button" onClick={handlePrev}>Previous</button>
          <button className="next-button" onClick={handleNext}>
            Complete Purchase
          </button>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
