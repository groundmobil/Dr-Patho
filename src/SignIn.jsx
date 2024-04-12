import React, { useState, useRef } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otpSent, setOtpSent] = useState(false); 
  const [otpSubmitted, setOtpSubmitted] = useState(false); 
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const navigate = useNavigate();
  const inputRefs = useRef([]);
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(true);

  const handlePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleSendOTP = async () => {
    try {
      
      const response = await axios.post('http://localhost:8080/api/check-phone-number', {
        phoneNumber: phoneNumber
      });

      if (response.data.exists) {
        
        alert("OTP sent successfully");
        setOtpSent(true); 
      } else {
        
        setIsPhoneNumberValid(false);
      }
    } catch (error) {
      console.error("Error while checking phone number:", error);
      alert("Failed to check phone number");
    }
  };

  const handleOtpSubmit = async (event) => {
    event.preventDefault();
    
   
    navigate('/BookNow');
    setOtpSubmitted(true); 

    
    console.log("Successfully logged in!");
  };

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    if (value && index < 5 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleClick = (index) => {
    inputRefs.current[index].setSelectionRange(1, 1);

    if (index > 0 && !otp[index - 1]) {
      inputRefs.current[otp.indexOf("")].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className="App" style={{ color: "white", textAlign: "center", marginTop: "-62px" }}>
      <h1>Login With Your Mobile Number and OTP</h1>
      <form onSubmit={handleOtpSubmit}>
        <h3>Mobile Number:</h3>
        <input
          type="tel"
          className="phonefield"
          value={phoneNumber}
          maxLength={10}
          onChange={handlePhoneNumber}
          placeholder="Enter Mobile Number"
          style={{
            paddingLeft: "50px",
            color: "black",
            borderRadius: "80px",
            width: "250px",
            height: "50px",
            marginRight: "25px",
            fontSize: "20px",
          }}
        />
        <button
          onClick={handleSendOTP}
          style={{
            padding: "15px 20px",
            fontSize: "18px",
            backgroundColor: "blue",
            color: "white",
            borderRadius: "70px",
            cursor: "pointer",
            marginLeft: "10px",
          }}
          type="button"
        >
          SEND OTP
        </button>
        {!isPhoneNumberValid && <p style={{ color: 'red' }}>Phone number does not exist. Please enter a valid phone number.</p>}
        {otpSent && ( 
          <>
            <h3>Enter OTP:</h3>
            <div>
              {otp.map((value, index) => (
                <input
                  key={index}
                  type="text"
                  ref={(input) => (inputRefs.current[index] = input)}
                  value={value}
                  onChange={(e) => handleChange(index, e)}
                  onClick={() => handleClick(index)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="otpInput"
                  style={{ color: "black", width: "30px", height: "30px", borderRadius: "5px", margin: "0 5px", fontSize: "16px", paddingLeft: "5px", textAlign: "center" }}
                />
              ))}
            </div>
            {otp.length === 6 && ( 
              <button
                style={{
                  padding: "15px 20px",
                  fontSize: "18px",
                  backgroundColor: "blue",
                  color: "white",
                  borderRadius: "70px",
                  cursor: "pointer",
                  marginTop: "20px",
                }}
                type="submit"
              >
                SUBMIT
              </button>
            )}
          </>
        )}
        {otpSubmitted && <p style={{ color: 'green' }}>Successfully logged in!</p>}
      </form>
    </div>
  );
};

export default SignIn;
