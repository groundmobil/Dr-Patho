import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MyCart = () => {
  const [showPatientModal, setShowPatientModal] = useState(false); // State to control the visibility of the patient details modal
  const [patientName, setPatientName] = useState(""); // State to hold patient name
  const [dateOfBirth, setDateOfBirth] = useState(""); // State to hold date of birth
  const [gender, setGender] = useState(""); // State to hold gender
  const navigate = useNavigate();

  

  const handleAddTests = () => {
    console.log("Adding more tests");
    // Add your logic here
    navigate("/TestDetailsPopup");
  };

  const handleChangeLab = () => {
    console.log("Changing lab");
    // Add your logic here
    navigate("/LabDetailsPopup");
  };

  const handleAddPatientDetails = () => {
    setShowPatientModal(true); // Show the patient details modal
  };

  const handleCloseModal = () => {
    setShowPatientModal(false); // Close the patient details modal
  };

  const handleCheckout = () => {
    console.log("Checking out");
    // Add your logic here
    navigate("/Checkout");
  };

  const handlePatientDetailsSubmit = (event) => {
    event.preventDefault();
    // Add logic to handle the submitted patient details
    console.log("Patient details submitted");
    // Close the modal after submitting details
    setShowPatientModal(false);
  };

  return (
    <>
      <style>
        {`
          .landing-page {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: transparent;
          }

          .container {
            display: flex;
            flex-direction: row;
            width: 100%;
            height: 120%;
            padding: 10px;
            background-color: transparent;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
            margin: 0 auto;
            border-radius: 10px;
            color: white;
            font-size: 18px;
            text-align: center;
          }

          .details-section {
            display: flex;
            flex-direction: column;
            border: 2px solid blue;
            border-radius: 10px;
            padding: 20px;
            width: 70%;
            height: 400px;
          }

          .row {
            flex: 1;
            margin-bottom: 10px;
            text-align: left;
            display: flex;
            flex-direction: row;
            align-items: center;
          }

          .row:not(:last-child) {
            border-bottom: 2px solid rgba(255, 255, 255, 0.3);
          }

          .patient-details input {
            height: 30px;
            margin-left: 10px;
            border-radius: 28px;
            padding: 8px;
            font-size: 18px;
            font-family: "Arial";
            text-indent: 1em;
          }

          .pricing-section {
            border: 2px solid blue;
            padding: 20px;
            border-radius: 10px;
            height: 400px;
            width: 20%;
            margin-left: 20px;
          }

          .button-container {
            display: flex;
            justify-content: flex-end;
            margin-top: 10px;
          }

          .button {
            background-color: blue;
            color: white;
            border: none;
            padding: 10px 20px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            cursor: pointer;
            border-radius: 20px;
          }

          .modal {
            display: ${showPatientModal ? "flex" : "none"};
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            justify-content: center;
            align-items: center;
          }

          .modal-content {
            background: white;
            padding: 30px;
            border-radius: 20px;
            width: 400px;
            text-align: center;
            position: relative;
          }

          .close-button {
            position: absolute;
            top: 10px;
            right: 10px;
            cursor: pointer;
          }

          .modal-content form {
            display: flex;
            flex-direction: column;
          }

          .modal-content label {
            margin-bottom: 10px;
          }

          .modal-content input[type="text"] {
            height: 30px;
            width: 90%;
            margin-bottom: 15px;
            border-radius: 28px;
            padding: 8px;
            font-size: 18px;
            font-family: "Arial";
            text-indent: 1em;
          }
    
          .modal-content input[type="text"]::placeholder {
            color: #aaa;
            font-size: 18px;
            font-weight: 300;
            font-family: "Arial";
          }
    
          .modal-content .button-container {
            display: flex;
            justify-content: center;
            margin-top: 20px;
          }
    
          .modal-content .button {
            background-color: blue;
            color: white;
            border: none;
            padding: 10px 20px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            cursor: pointer;
            border-radius: 20px;
        `}
      </style>
      <div className="landing-page">
        <div className="container">
          <div className="details-section">
            <div className="row">
              <h3>Test Details :</h3>
              <div className="button-container">
                <button className="button" onClick={handleAddTests} style={{ marginLeft: "570px" }}>
                  + Add more tests
                </button>
              </div>
            </div>
            <div className="row">
              <h3>Lab Details :</h3>
              <div className="button-container">
                <button className="button" onClick={handleChangeLab} style={{ marginLeft: "600px" }}>
                  Change Lab
                </button>
              </div>
            </div>
            <div className="row">
              <h3>Patient Details:  </h3> 
              <div className="patient-details">
                <p>  &nbsp; Patient Name: {patientName}</p>
                <p>  &nbsp; Date of Birth: {dateOfBirth}</p>
                <p>  &nbsp; Gender: {gender}</p>
              </div>
              <div className="button-container">
                <button className="button" onClick={handleAddPatientDetails} style={{ marginLeft: "370px" }}>
                  Add/Edit Patient Details
                </button>
              </div>
            </div>
          </div>
          <div className="pricing-section">
            <h3>Pricing Details</h3>
            <div className="button-container">
              <button className="button" onClick={handleCheckout}>
                Checkout
              </button>
            </div>
          </div>
        </div>

        {/* Patient Details Modal */}
        {showPatientModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close-button" onClick={handleCloseModal}>
                &times;
              </span>
              <h3>Enter Patient Details</h3>
              <form onSubmit={handlePatientDetailsSubmit}>
                <label>
                  <input
                    textarea placeholder="Enter Patient Name" rows="1"
                    type="text"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    className="input-field" // Add class for styling
                  />
                </label>
                <label>
                  <input
                    textarea placeholder="Date of birth" rows="1" 
                    type="text"
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                    className="input-field" // Add class for styling
                  />
                </label>
                <label>
                  <input
                  textarea placeholder="Gender" rows="1"
                    type="text"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="input-field" // Add class for styling
                  />
                </label>
                <button type="submit" className="button">
                  Add Patient Details
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MyCart;