import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [activeOption, setActiveOption] = useState("Your Account");
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleOptionClick = (option) => {
    if (option === "My Cart") {
      navigate("/MyCart"); // Navigate to the MyCart route
    } else if (option === "Logout") {
      // Handle logout
      setIsLoggedIn(false);
      // Redirect to login page or any other desired action
      navigate("/");
    } else {
      setActiveOption(option);
    }
  };

  const handleMouseEnter = (option) => {
    const hoveredCell = document.getElementById(option);
    if (hoveredCell) {
      hoveredCell.style.backgroundColor = "#658cbb";
    }
  };

  const handleMouseLeave = (option) => {
    const hoveredCell = document.getElementById(option);
    if (hoveredCell) {
      hoveredCell.style.backgroundColor = "transparent";
    }
  };

  const handleStarClick = (starValue) => {
    setRating(starValue);
  };

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleReviewSubmit = async () => {
    try {
      await axios.post("http://localhost:8080/reviews", {
        rating: rating,
        reviewText: review,
      });
  
      console.log("Review submitted successfully");
      // Add any additional logic you need after submitting the review
    } catch (error) {
      console.error("Error submitting review:", error.message);
      // Handle the error appropriately
    }
  };
  
  return (
    <div style={{ display: "flex", backgroundColor: "white", marginTop: "-95px" }}>
      {isLoggedIn && (
        <div style={{ width: "200px", backgroundColor: "white", padding: "10px", borderRight: "1px solid #ccc" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid #ccc" }}>
          <tbody>
            <tr>
              <td
                id="My Account"
                onClick={() => handleOptionClick("My Account")}
                onMouseEnter={() => handleMouseEnter("My Account")}
                onMouseLeave={() => handleMouseLeave("My Account")}
                style={{
                  cursor: "pointer",
                  color: activeOption === "My Account" ? "black" : "black",
                  borderBottom: "1px solid #ccc",
                  padding: "10px",
                }}
              >
                My Account
              </td>
            </tr>
            <tr>
              <td
                id="My Cart"
                onClick={() => handleOptionClick("My Cart")}
                onMouseEnter={() => handleMouseEnter("My Cart")}
                onMouseLeave={() => handleMouseLeave("My Cart")}
                style={{
                  cursor: "pointer",
                  color: activeOption === "My Cart" ? "black" : "black",
                  borderBottom: "1px solid #ccc",
                  padding: "10px",
                }}
              >
                My Cart
              </td>
            </tr>
            <tr>
              <td
                id="My Orders"
                onClick={() => handleOptionClick("My Orders")}
                onMouseEnter={() => handleMouseEnter("My Orders")}
                onMouseLeave={() => handleMouseLeave("My Orders")}
                style={{
                  cursor: "pointer",
                  color: activeOption === "My Orders" ? "black" : "black",
                  borderBottom: "1px solid #ccc",
                  padding: "10px",
                }}
              >
               My Orders
              </td>
            </tr>
            <tr>
              <td
                id="Coupons"
                onClick={() => handleOptionClick("Coupons")}
                onMouseEnter={() => handleMouseEnter("Coupons")}
                onMouseLeave={() => handleMouseLeave("Coupons")}
                style={{
                  cursor: "pointer",
                  color: activeOption === "Coupons" ? "black" : "black",
                  borderBottom: "1px solid #ccc",
                  padding: "10px",
                }}
              >
                Coupons
              </td>
            </tr>
            <tr>
              <td
                id="Privacy Policy"
                onClick={() => handleOptionClick("Privacy Policy")}
                onMouseEnter={() => handleMouseEnter("Privacy Policy")}
                onMouseLeave={() => handleMouseLeave("Privacy Policy")}
                style={{
                  cursor: "pointer",
                  color: activeOption === "Privacy Policy" ? "black" : "black",
                  borderBottom: "1px solid #ccc",
                  padding: "10px",
                }}
              >
                Privacy Policy
              </td>
            </tr>
            <tr>
              <td
                id="Rate Us"
                onClick={() => handleOptionClick("Rate Us")}
                onMouseEnter={() => handleMouseEnter("Rate Us")}
                onMouseLeave={() => handleMouseLeave("Rate Us")}
                style={{
                  cursor: "pointer",
                  color: activeOption === "Rate Us" ? "black" : "black",
                  borderBottom: "1px solid #ccc",
                  padding: "10px",
                }}
              >
                Rate Us
              </td>
            </tr>
            <tr>
              <td
                id="Help"
                onClick={() => handleOptionClick("Help")}
                onMouseEnter={() => handleMouseEnter("Help")}
                onMouseLeave={() => handleMouseLeave("Help")}
                style={{
                  cursor: "pointer",
                  color: activeOption === "Help" ? "black" : "black",
                  borderBottom: "1px solid #ccc",
                  padding: "10px",
                }}
              >
                Help
              </td>
            </tr>
            <tr>
              <td
                id="Logout"
                onClick={() => handleOptionClick("Logout")}
                onMouseEnter={() => handleMouseEnter("Logout")}
                onMouseLeave={() => handleMouseLeave("Logout")}
                style={{
                  cursor: "pointer",
                  color: activeOption === "Logout" ? "black" : "black",
                  padding: "10px",
                }}
              >
                Logout
              </td>
            </tr>
            {/* Add more menu options as needed */}
          </tbody>
        </table>
      </div>
      )}
      <div style={{ flex: 1, padding: "20px", border: "1px solid #ccc", minHeight: "550px" }}>
        <h1>{activeOption}</h1>

        {activeOption === "Privacy Policy" && (
          <div>
            <p>
              This Privacy Policy outlines how your personal information is collected, used,
              and protected when you use our services.
            </p>
            <h2>Information Collection and Use</h2>
            <p>
              We may collect personal information, such as your name, email address, and
              usage data, for the purpose of providing and improving our services.
            </p>
            <h2>Information Sharing</h2>
            <p>
              We do not share your personal information with third parties except as described
              in this Privacy Policy.
            </p>
            {/* Add more sections as needed for your privacy policy */}
          </div>
        )}

        {activeOption === "Help" && (
          <div>
            <p>
              Welcome to our Help Center! If you have any questions or need assistance,
              please don't hesitate to contact our support team.
            </p>
            <h2>Contact Information</h2>
            <p>
              Support Email:
              <br /> 
              Contact Us at: +91
            </p>
            <p>
              Our team is available to assist you from Monday to Friday, 9 AM to 5 PM.
            </p>
          </div>
        )}

{activeOption === "My Account" && (
  <div style={{ border: "2px solid black", padding: "20px", borderRadius: "10px",}}>
    <h3>Name:</h3>
    <h3>Date of Birth:</h3>
    <h3>Gender:</h3>
    <h3>Phone Number:</h3>
    <h3>Email ID:</h3>
    <h3>Address:</h3>
    <button 
      style={{ 
        padding: "10px 20px", 
        fontSize: "16px", 
        backgroundColor: "black", 
        color: "white", 
        borderRadius: "5px", 
        border: "none", 
        cursor: "pointer",
        marginTop: "20px"
      }}
      onClick={() => handleOptionClick("Edit")}
    >
      Edit
    </button>
  </div>
)}

{activeOption === "Rate Us" && (
  <div>
    <div>
      <div style={{ textAlign: "center", display: "flex", justifyContent: "center" }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            style={{ cursor: "pointer", fontSize: "50px", color: star <= rating ? "#ffc107" : "#ccc" }}
            onClick={() => handleStarClick(star)}
          >
            &#9733;
          </span>
        ))}
      </div>
    </div>
    <textarea
      rows="7"
      cols="70"
      style={{
        padding: "5px 10px",
        fontSize: "18px",
        borderRadius: "30px",
        textAlign: "center",
        display: "block",
        margin: "auto",
        resize: "none", // Prevents resizing
      }}
      placeholder="Write your review here..."
      value={review}
      onChange={handleReviewChange}
    ></textarea>
    <div style={{ marginTop: "10px" }}>
      <button
        style={{
          padding: "10px 20px",
          fontSize: "18px",
          backgroundColor: "#007BFF",
          color: "white",
          borderRadius: "70px",
          cursor: "pointer",
          textAlign: "center",
          display: "block",
          margin: "auto",
        }}
        onClick={handleReviewSubmit}
      >
        Submit Review
      </button>
    </div>
  </div>

)}

        
      </div>
    </div>
      
    
  );
};
export default Profile;
