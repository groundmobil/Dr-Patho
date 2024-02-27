import React, { useState } from 'react';


const steps = ['Address', 'Date and Time', 'Payment'];

const Checkout = () => {
  const [step, setStep] = useState(1);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleNext = () => {
    if (step < steps.length) {
      setStep(step + 1);
    } 
      
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleDateSelection = (date) => {
    setSelectedDate((prevDate) => (prevDate === date ? null : date));
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
            margin-bottom: 40px;
            margin-top: -60px;
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
            height: 4px;
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
            position: absolute;
            right: -190px; /* Adjust the right position as needed */
            bottom: -30px; /* Adjust the bottom position as needed */
          }
          .previous-button {
            position: absolute;
            left: -190px; /* Adjust the left position as needed */
            bottom: -30px; /* Adjust the bottom position as needed */
          }


          .next-button:hover,
          .previous-button:hover {
            background-color: #0056b3;
          }

          .transparent-button {
            background-color: transparent;
            border: 2px solid #007bff; /* Blue border color */
            color: #007bff; /* Blue text color */
            padding: 8px 16px;
            margin: 5px;
            border-radius: 5px;
            cursor: pointer;
          }
          
          .transparent-button:hover,
          .transparent-button.selected {
            background-color: #007bff; /* Blue background color on hover or selected */
            color: white; /* White text color on hover or selected */
          }

          .step-title,
    .date-time-box {
      max-width: 800px; /* Set the desired maximum width */
      margin: 0 auto; /* Center the boxes horizontally */
    }

    .button-container {
      margin-top: 20px; /* Add margin for spacing */
      text-align: center; /* Center the buttons horizontally */
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
      {step === 1 && (
        <div>
          <div className="step-title">
            <h2>Address</h2>
            <button className="bottom-right-button" onClick={() => alert('Address Changed')}>
              Change Address
            </button>
          </div>
          <button className="next-button" onClick={handleNext}  style={{
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    position: 'absolute',
    right: '20px', 
    bottom: '20px', 
  }}>
            Next
          </button>
        </div>
      )}
      {step === 2 && (
  <div>
    <div className="step-title" style={{ textAlign: 'center', margin: 'auto' }}>
      <h2>Select Date and Time</h2>
      <div className="date-time-box" style={{ textAlign: 'center', margin: 'auto' }}>
        
        <div className="calendar-buttons">
          {[...Array(5)].map((_, index) => {
            const currentDate = new Date();
            const date = new Date(currentDate);
            date.setDate(currentDate.getDate() + index);
            const dayOptions = { weekday: 'short' };
            const formattedDate = date.toLocaleDateString('en-US', { day: 'numeric', month: 'short' });
            const formattedDay = date.toLocaleDateString('en-US', dayOptions);

            return (
              <button
  key={index}
  className={`transparent-button ${selectedDate === date ? 'selected' : ''}`}
  onClick={() => handleDateSelection(date)}
>
  <div>
    <div>{formattedDate}</div>
    <span>{formattedDay}</span>
  </div>
</button>
            );
          })}
        </div>
        
        <h3>Morning Slots</h3>
        <div className="time-slot-buttons">
          <button
            className={`transparent-button ${selectedTimeSlot === '7-8am' ? 'selected' : ''}`}
            onClick={() => setSelectedTimeSlot('7-8am')}
          >
            7:00-8:00am
          </button>
          <button
            className={`transparent-button ${selectedTimeSlot === '8-9am' ? 'selected' : ''}`}
            onClick={() => setSelectedTimeSlot('8-9am')}
          >
            8:00-9:00am
          </button>
          <button
            className={`transparent-button ${selectedTimeSlot === '9-10am' ? 'selected' : ''}`}
            onClick={() => setSelectedTimeSlot('9-10am')}
          >
            9:00-10:00am
          </button>
          <button
            className={`transparent-button ${selectedTimeSlot === '10-11am' ? 'selected' : ''}`}
            onClick={() => setSelectedTimeSlot('10-11am')}
          >
            10:00-11:00am
          </button>
          <button
            className={`transparent-button ${selectedTimeSlot === '12-1pm' ? 'selected' : ''}`}
            onClick={() => setSelectedTimeSlot('12-1pm')}
          >
            12:00-1:00pm
          </button>
        </div>

        <h3>Evening Slots</h3>
        <div className="time-slot-buttons">
          <button
            className={`transparent-button ${selectedTimeSlot === '4-6pm' ? 'selected' : ''}`}
            onClick={() => setSelectedTimeSlot('4-6pm')}
          >
            4:00-6:00pm
          </button>
          <button
            className={`transparent-button ${selectedTimeSlot === '5-6pm' ? 'selected' : ''}`}
            onClick={() => setSelectedTimeSlot('5-6pm')}
          >
            5:00-6:00pm
          </button>
          <button
            className={`transparent-button ${selectedTimeSlot === '6-7pm' ? 'selected' : ''}`}
            onClick={() => setSelectedTimeSlot('6-7pm')}
          >
            6:00-7:00pm
          </button>
          <button
            className={`transparent-button ${selectedTimeSlot === '7-8pm' ? 'selected' : ''}`}
            onClick={() => setSelectedTimeSlot('7-8pm')}
          >
            7:00-8:00pm
          </button>
          <button
            className={`transparent-button ${selectedTimeSlot === '8-9pm' ? 'selected' : ''}`}
            onClick={() => setSelectedTimeSlot('8-9pm')}
          >
            8:00-9:00pm
          </button>
        </div>
        </div>
    <div className="button-container">
      <button className="previous-button" onClick={handlePrev}>Previous</button>
      <button className="next-button" onClick={handleNext}>Next</button>
    </div>
  </div>
  </div>
)}

{step === 3 && (
  <div>
    <div className="step-title" style={{ textAlign: 'center', margin: 'auto' }}>
      <h3>Order Summary</h3>
      <p>MRP: </p>
      <p>Total Discount: </p>
      <p>Total Price: </p>
    </div>
    <button
  className="previous-button"
  onClick={handlePrev}
  style={{
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    position: 'absolute',
    left: '20px', 
    bottom: '20px', 
  }}
>
  Previous
</button>
    <button
  className="next-button"
  onClick={handleNext}
  style={{
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    position: 'absolute',
    right: '20px',
    bottom: '20px',
  }}
>
  Complete Purchase
</button>
  </div>
  
)}

    </div>
  );
};

export default Checkout;
