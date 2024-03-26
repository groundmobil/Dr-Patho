import React, { useState, useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { MdOutlineMyLocation } from "react-icons/md";

const LocationPopup = ({ onAddressSubmit, onClose }) => {
  const [pinCode, setPinCode] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const navigate = useNavigate(); 
  const detectLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            // Fetch address details using reverse geocoding service
            const response = await axios.get(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
            if (response.data.address) {
              setAddress(response.data.display_name);
              const addressComponents = response.data.address;
              let city = addressComponents.city || addressComponents.town || "";
              let pinCode = addressComponents.postcode || "";
              setState(addressComponents.state || addressComponents.country);
              setCity(city);
              setPinCode(pinCode);
            } else {
              alert("Failed to detect location.");
            }
          } catch (error) {
            console.error("Error while fetching address:", error);
            alert("Failed to detect location.");
          }
        },
        (error) => {
          console.error("Error while getting user's location:", error);
          alert("Failed to detect location.");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };
 
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate if all input fields are filled
    if (!pinCode || !address || !city || !state) {
      alert("Please fill in all address details.");
      return;
    }


    onAddressSubmit({ pinCode, address, city, state });
    setPinCode("");
    setAddress("");
    setCity("");
    setState("");
    onClose();

    navigate('/BookNow');
  };

  const modalStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#F0F8FF",
    padding: "50px",
    borderRadius: "30px",
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
    color: "black",
  };

  const closeModalStyle = {
    position: "absolute",
    top: "15px",
    right: "15px",
    cursor: "pointer",
  };

  const inputStyle = {
    width: "90%",
    height: "40px",
    borderRadius: "30px",
    marginBottom: "30px",
    fontSize: "16px",
    paddingLeft: "10px",
  };

  const submitButtonStyle = {
    width: "100%",
    height: "50px",
    borderRadius: "25px",
    backgroundColor: "blue",
    color: "white",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
  };

  return (
    <div style={{ position: "auto", top: 0, left: 0, width: "50%", height: "50%", backgroundColor: "rgba(0, 0, 0, 0.5)", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div style={modalStyle}>
        <span style={closeModalStyle} onClick={onClose}>&times;</span>
        <button onClick={detectLocation} style={{ marginBottom: "10px",  width: "45%", height: "30px", borderRadius: "25px", backgroundColor: "blue", color: "white", fontSize: "18px",}}><MdOutlineMyLocation className="icons" /> Detect My Location</button>
        <h2>Address Information</h2>
        
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Pin Code"
            value={pinCode}
            onChange={(e) => setPinCode(e.target.value)}
            style={{ ...inputStyle, width: "80%", marginRight: 0 }}
          />
          <div style= {{display: "flex", marginBottom: "10px"}}>
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              style={{ ...inputStyle, width: "35%", marginLeft: 38,  marginRight: 5 }}
            />
            <input
              type="text"
              placeholder="State"
              value={state}
              onChange={(e) => setState(e.target.value)}
              style={{ ...inputStyle, width: "35%", marginRight: 0, marginLeft: 24 }}
            />
          </div>
          
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            style={{ ...inputStyle, width: "80%", marginRight: 0 }}
          />

          <button type="submit" style={submitButtonStyle}>Done</button>
        </form>
      </div>
    </div>
  );
};

const PersonalInfo = ({ onSubmit, onClose }) => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!Name || !Email || !dob || !gender) {
      alert("Please fill in all personal information.");
      return;
    }

    onSubmit({ Name, Email, dob, gender });
    setName("");
    setEmail("");
    setDob("");
    setGender("");
    onClose();
  };

  const modalStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#F0F8FF",
    padding: "50px",
    borderRadius: "30px",
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
    color: "black",
  };

  const closeModalStyle = {
    position: "absolute",
    top: "15px",
    right: "15px",
    cursor: "pointer",
  };

  const inputStyle = {
    width: "90%",
    height: "40px",
    borderRadius: "30px",
    marginBottom: "30px",
    fontSize: "16px",
    paddingLeft: "10px",
  };

  const submitButtonStyle = {
    width: "100%",
    height: "50px",
    borderRadius: "25px",
    backgroundColor: "blue",
    color: "white",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
  };

  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div style={modalStyle}>
        <span style={closeModalStyle} onClick={onClose}>&times;</span>
        <h2>Personal Information</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={Name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
          />
          <input
            type="text"
            placeholder="Email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />
          <div style={{ display: "flex", marginBottom: "10px" }}>
            <input
              type="date"
              placeholder="Date of Birth"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              style={{ ...inputStyle, marginRight: "20px", marginLeft: "15px" }}
            />
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              style={{ ...inputStyle, marginRight: "20px"}}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <button type="submit" style={submitButtonStyle}>Submit</button>
        </form>
      </div>
    </div>
  );
};

const App = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [showPersonalInfo, setShowPersonalInfo] = useState(false);
  const [showAddressPopup, setShowAddressPopup] = useState(false);
  const [agree1, setAgree1] = useState(false);
  const [agree2, setAgree2] = useState(false);
  
  const handlePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handlePhoneSubmit = async (event) => {
    event.preventDefault();

    const regex = /[^0-9]/g;
    if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
      alert("Invalid Phone Number");
      return;
    }
  
    try {
      // Make a POST request to your backend endpoint
      const response = await axios.post('http://localhost:8080/api/contact', {
        phoneNumber: phoneNumber,
      });

  
      // Assuming your backend responds with a success message
      if (response.data.message === 'Contact info saved successfully') {
        setShowOtpInput(true);
      } else {
        alert("Failed to save contact info");
      }
    } catch (error) {
      console.error("Error while making POST request:", error);
      alert("Failed to save contact info");
    }
  };
  const handlePersonalInfoSubmit = async (personalInfo) => {
    try {
      const response = await axios.post('http://localhost:8080/api/personal-info', {
        name: personalInfo.Name,
        email: personalInfo.Email,
        dob: personalInfo.dob,
        gender: personalInfo.gender,
      });
  
      if (response.data.message === 'Personal info saved successfully') {
        setShowPersonalInfo(false);
        setShowAddressPopup(true);
      } else {
        alert("Failed to save personal info");
      }
    } catch (error) {
      console.error("Error while making POST request:", error);
      alert("Failed to save personal info");
    }
  };
  
  const handleAddressSubmit = async (address) => {
    try {
      const response = await axios.post('http://localhost:8080/api/address', {
      pinCode: address.pinCode,
      address: address.address,
      city: address.city,
      state: address.state,
    });
  
      if (response.data.message === 'Address saved successfully') {
        setShowAddressPopup(false);
      } else {
        alert("Failed to save address info");
      }
    } catch (error) {
      console.error("Error while making POST request:", error);
      alert("Failed to save address info");
    }
  };

  const handleCheckboxChange = (checkbox) => {
    if (checkbox === "agree1") {
      setAgree1(!agree1);
    } else if (checkbox === "agree2") {
      setAgree2(!agree2);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (agree1 && agree2) {
      setShowPersonalInfo(true);
    } else {
      alert("Please agree to the terms");
    }
  };

  const onOtpSubmit = (otp) => {
    console.log("Login Successful", otp);
  };

  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    const combinedOtp = newOtp.join("");
    if (combinedOtp.length === 6) onOtpSubmit(combinedOtp);

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
      <div>
        <h3>Mobile Number:</h3>
        {!showOtpInput ? (
          <form onSubmit={handlePhoneSubmit}>
            <input
              type="tel "
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
              className="otpbtn"
              type="submit"
              style={{
                color: "white",
                borderRadius: "80px",
                width: "120px",
                height: "50px",
                padding: "12px",
                fontSize: "18px",
                backgroundColor: "#007AFF",
              }}
            >
              Send OTP
            </button>

            
          </form>

          
          
        ) : (
          <div>
            <input
              type="text"
              className="phonefield"
              value={phoneNumber}
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
              className="otpbtn"
              type="submit"
              style={{
                color: "white",
                borderRadius: "80px",
                width: "120px",
                height: "50px",
                padding: "12px",
                fontSize: "18px",
                backgroundColor: "#007AFF",
              }}
            >
              Sent
            </button>
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
          </div>
        )}

        <form onSubmit={handleFormSubmit}>
          <br />
          <label>
          &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp;
          &nbsp;   &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <input
              type="checkbox"
              checked={agree1}
              onChange={() => handleCheckboxChange("agree1")}
              style={{ marginRight: 10 }}
            />
            I agree to receive communication through SMS, email, or Whatsapp regarding my booking
          </label>
          <br />

          <label>
             
            <input
              type="checkbox"
              checked={agree2}
              onChange={() => handleCheckboxChange("agree2")}
              style={{ marginRight: 10 }}
            />
            Receive latest offers & discounts through SMS, email, or Whatsapp
          </label>

          <br />
          <br />
          
          <button
            style={{
              padding: "15px 20px",
              fontSize: "18px",
              backgroundColor: agree1 && agree2 ? "blue" : "blue",
              color: "white",
              borderRadius: "70px",
              cursor: agree1 && agree2 ? "pointer" : "not-allowed",
            }}
            disabled={!agree1 || !agree2}
          >
            SUBMIT
          </button>
          <br />
          <br />
          <br/>
          <br/>
          
        </form>

        {showPersonalInfo && (
          <PersonalInfo
            onSubmit={handlePersonalInfoSubmit}
            onClose={() => setShowPersonalInfo(false)}
          />
        )}

        {showAddressPopup && (
          <LocationPopup
            onAddressSubmit={handleAddressSubmit}
            onClose={() => setShowAddressPopup(false)}
          />
        )}
      </div>
    </div>
  );
};

export default App;