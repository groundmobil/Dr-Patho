import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MyCart = () => {
  const [showPatientModal, setShowPatientModal] = useState(false); // State to control the visibility of the patient details modal
  const navigate = useNavigate();

  const styles = `
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
    }

    .row:not(:last-child) {
      border-bottom: 2px solid rgba(255, 255, 255, 0.3);
    }

    .pricing-section {
      border: 2px solid blue;
      padding: 20px;
      border-radius: 10px;
      height: 400px;
      width: 20%;
      margin-left: 20px;
    }

    .column h3 {
      font-size: 44px;
      color: white;
    }

    .button-container {
      display: flex;
      justify-content: center;
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
      border-radius: 20px; /* Added border-radius for a curvy look */
      width: 400px; /* Increased the width of the modal */
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

    .modal-content textarea {
      height: 30px;
      width: 370px;
      margin-bottom: 15px;
      border-radius: 28px; /* Added border-radius for a curvy look */
      padding: 8px; /* Added padding for better aesthetics */
      resize: none;
    }

    .modal-content textarea::placeholder {
      color: #aaa; /* Change placeholder color to a lighter gray */
      fontSize: "24px",
      fontWeight: "30"
    }
  `;

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
  };

  return (
    <>
      <style>{styles}</style>
      <div className="landing-page">
        <div className="container">
          <div className="details-section">
            <div className="row">
              <h3>Test Details</h3>
              <div className="button-container">
                <button className="button" onClick={handleAddTests}>
                  + Add more tests
                </button>
              </div>
            </div>
            <div className="row">
              <h3>Lab Details</h3>
              <div className="button-container">
                <button className="button" onClick={handleChangeLab}>
                  Change Lab
                </button>
              </div>
            </div>
            <div className="row">
              <h3>Patient Details</h3>
              <div className="button-container">
                <button className="button" onClick={handleAddPatientDetails}>
                  Add Patient Details
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
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={handleCloseModal}>
              &times;
            </span>
            <h3>Enter Patient Details</h3>
            <form onSubmit={handlePatientDetailsSubmit}>
              <label>
                
                <textarea placeholder="Enter patient name" rows="1" />
              </label>
              <label>
              
                <textarea placeholder="Enter date of birth" rows="1" />
              </label>
              <label>
                
                <textarea placeholder="Enter gender" rows="1" />
              </label>
              <button type="submit" className="button">
                Add Patient Details
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyCart;
