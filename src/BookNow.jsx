import React, { useRef, useState } from "react";
import { FaMapMarkerAlt, FaSearch, FaFileSignature } from "react-icons/fa";
import TestDetailsPopup from './TestDetailsPopup';


const BookNow = () => {
  const fileInputRef = useRef(null);
  const [pincode, setPincode] = useState("");
  const [selectedTest, setSelectedTest] = useState("");
  const [searchTest, setSearchTest] = useState("");
  const [showPopup, setShowPopup] = useState(false); 
  const [isSearchEnabled, setIsSearchEnabled] = useState(false);

  const handleFileUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (event) => {
    const selectedFile = event.target.files[0];
  
    try {
      const formData = new FormData();
      formData.append('file', selectedFile);
  
     
      const fileUploadResponse = await fetch('http://localhost:8080/upload', {
        method: 'POST',
        body: formData,
      });
  
      console.log('File upload response:', fileUploadResponse);
    } catch (error) {
      console.error('Error uploading file:', error.message);
    }
  };

  const handleSearch = async () => {
    try {
      const allowedPincodes = ['411017', '444606'];
  
      if (allowedPincodes.includes(pincode)) {
        if (selectedTest.toLowerCase() === 'diabetes') {
          setShowPopup(true);
          console.log("Pin Code:", pincode);
          console.log("Selected Test:", selectedTest);
  
          await fetch('http://localhost:8080/booknow', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ pincode, selectedTest }),
          });
  
        } else {
         
          alert('This test is not availabe currently.');
        }
      } else if (!allowedPincodes.includes(pincode) && selectedTest.toLowerCase() === 'diabetes') {
        
        alert('We work only at pin codes 411017 and 444606.');
      } else {
       
        alert('We work only at pin codes 411017 and 444606 and currently, this test is not availabe.');
      }
    } catch (error) {
      console.error('Error storing BookNow data:', error.message);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handlePincodeChange = (e) => {
    const inputPincode = e.target.value;
    if (/^\d{0,6}$/.test(inputPincode)) {
      setPincode(inputPincode);
    }
    updateSearchButtonStatus();
  };

  const handleSearchTestChange = (e) => {
    setSelectedTest(e.target.value);
    updateSearchButtonStatus();
  };

  const updateSearchButtonStatus = () => {
    setIsSearchEnabled(pincode.trim() !== "" && selectedTest.trim() !== "");
  };

  return (
    <div>
      {showPopup ? (
  <TestDetailsPopup onClose={closePopup} pincode={pincode} />
) : (
  <div
  style={{
    textAlign: "center",
    color: "white",
    marginTop: "25vh",
    transform: "translateY(-50%)",
    fontSize: "24px",
    fontWeight: "30",
    fontFamily: "sans-serif",
  }}
>
  <h1>Book Any Test From Any Lab</h1>

  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "20px",
    }}
  >
    <div className="mobile-layout">
      <div style={{ position: "relative" }}>
        <FaMapMarkerAlt
          className="icons"
          style={{
            position: "absolute",
            left: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            color: "black",
          }}
        />
        <input
          type="text"
          placeholder="Enter Pincode"
          value={pincode}
          onChange={handlePincodeChange}
          style={{
            marginBottom: "10px",
            padding: "10px",
            fontSize: "16px",
            borderRadius: "70px",
            border: "1px solid #ccc",
            paddingLeft: "40px",
          }}
        />
      </div>

      <div style={{ position: "relative" }}>
        <FaSearch
          className="icons"
          style={{
            position: "absolute",
            left: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            color: "black",
          }}
        />
        <input
          type="text"
          placeholder="Select Test"
          value={selectedTest}
          onChange={handleSearchTestChange}
          style={{
            padding: "10px",
            fontSize: "16px",
            borderRadius: "70px",
            border: "1px solid #ccc",
            paddingLeft: "40px",
          }}
        />
      </div>
    </div>

    <div className="desktop-tab-layout">
      <div style={{ display: "flex", marginBottom: "30px" }}>
        <div style={{ position: "relative" }}>
          <FaMapMarkerAlt
            className="icons"
            style={{
              position: "absolute",
              left: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "black",
            }}
          />
          <input
            type="text"
            placeholder="Enter Pincode"
            value={pincode}
            onChange={handlePincodeChange}
            style={{
              marginRight: "10px",
              padding: "10px",
              fontSize: "16px",
              borderRadius: "70px",
              border: "1px solid #ccc",
              paddingLeft: "40px",
            }}
          />
        </div>

        <div style={{ position: "relative" }}>
          <FaSearch
            className="icons"
            style={{
              position: "absolute",
              left: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "black",
            }}
          />
          <input
            type="text"
            placeholder="Select Test"
            value={selectedTest}
            onChange={handleSearchTestChange}
            style={{
              padding: "10px",
              fontSize: "16px",
              borderRadius: "70px",
              border: "1px solid #ccc",
              paddingLeft: "40px",
            }}
          />
        </div>
      </div>
    </div>

    <button
      onClick={handleSearch}
      disabled={!isSearchEnabled}
      style={{
        padding: "10px 20px",
        fontSize: "18px",
        backgroundColor: "#007BFF",
        color: "white",
        borderRadius: "70px",
        cursor: isSearchEnabled ? "pointer" : "not-allowed", 
        marginTop: "20px",
      }}
    >
      Search
    </button>
    <div>or</div>
    <button
      onClick={handleFileUpload}
      style={{
        padding: "10px 20px",
        fontSize: "18px",
        backgroundColor: "#007BFF",
        color: "white",
        borderRadius: "70px",
        cursor: "pointer",
      }}
    >
      <FaFileSignature
        className="icons"
        style={{ color: "black", fontSize: "15px" }}
      />{" "}
      Upload Prescription
    </button>

    <input
      ref={fileInputRef}
      type="file"
      style={{ display: "none" }}
      onChange={handleFileChange}
    />
  </div>
</div>
)}
</div>
);
};

export default BookNow;



const styles = `
@media (min-width: 768px) {
  .mobile-layout {
    display: none;
  }

  .desktop-tab-layout {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
}

@media (max-width: 767px) {
  .mobile-layout {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .desktop-tab-layout {
    display: none;
  }
}
`;


const styleSheet = new CSSStyleSheet();
styleSheet.replaceSync(styles);
document.adoptedStyleSheets = [...document.adoptedStyleSheets, styleSheet];