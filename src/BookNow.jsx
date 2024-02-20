import React, { useRef, useState } from "react";
import { FaMapMarkerAlt, FaSearch, FaFileSignature } from "react-icons/fa";

const BookNow = () => {
  const fileInputRef = useRef(null);
  const [pincode, setPincode] = useState("");
  const [searchTest, setSearchTest] = useState("");

  const handleFileUpload = () => {
    if (fileInputRef.current) {
  
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
  
    const selectedFile = event.target.files[0];
    console.log("Selected File:", selectedFile);

  };

  const handleSearch = () => {
  
    console.log("Pin Code:", pincode);
    console.log("Search Test:", searchTest);
  };

  return (
    <div>
      <div style={{ textAlign: "center", color: "white", marginTop: "25vh", transform: "translateY(-50%)", fontSize: "24px", fontWeight: "30", fontFamily: "sans-serif"}}>
        <h1>Book Any Test From Any Lab</h1>
        
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px" }}>
          <div style={{ display: "flex", marginBottom: "30px" }}>
            <div style={{ position: "relative" }}>
              <FaMapMarkerAlt className="icons" style={{ position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)", color: "black" }} />
              <input 
                type="text" 
                placeholder="Enter Pincode" 
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                style={{ marginRight: "10px", padding: "10px", fontSize: "16px", borderRadius: "70px", border: "1px solid #ccc", paddingLeft: "40px" }}
              />
            </div>
            
            <div style={{ position: "relative" }}>
              <FaSearch className="icons" style={{ position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)", color: "black" }} />
              <input 
                type="text" 
                placeholder="Search Test" 
                value={searchTest}
                onChange={(e) => setSearchTest(e.target.value)}
                style={{ padding: "10px", fontSize: "16px", borderRadius: "70px", border: "1px solid #ccc", paddingLeft: "40px" }}
              />
            </div>
          </div>
          <button 
            onClick={handleSearch}
            style={{ padding: "10px 20px", fontSize: "18px", backgroundColor: "#007BFF", color: "white", borderRadius: "70px", cursor: "pointer" }}
          >
            Search
          </button>
          <div>or</div>
          <button 
            onClick={handleFileUpload}
            style={{ padding: "10px 20px", fontSize: "18px", backgroundColor: "#007BFF", color: "white", borderRadius: "70px", cursor: "pointer" }}
          >
            <FaFileSignature className="icons" style={{ color: "black", fontSize: "15px" }} />  Upload Prescription
          </button>
          
          <input
            ref={fileInputRef}
            type="file"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </div>
      </div>
    </div>
  );
};

export default BookNow;
