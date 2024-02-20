import React from "react";
import { FaInstagram, FaYoutube, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div
        style={{
          position: "relative",
          textAlign: "center",
          color: "white",
          fontSize: "18px",
          fontFamily: "Roboto, sans-serif",
          backgroundColor: "#000080",
          marginTop: "-53px",
          overflow: "hidden", // Add this to hide the overflow
        }}
      >
        <h2>Our Lab Partners</h2>
        <img
          src="/Images/partner.jpg"
          style={{
            maxWidth: "100%",
            height: "auto",
            animation: "moveLeftRight 10s linear infinite", 
          }}
        />
      </div>

      <style>
        {`
          @keyframes moveLeftRight {
            0% {
              transform: translateX(-100%); // Start from the right
            }
            100% {
              transform: translateX(100%); // Move to the left
            }
          }
        `}
      </style>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          borderSpacing: "0",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            flexBasis: "30%",
            textAlign: "flex",
            backgroundColor: "#0E4C92",
            padding: "20px",
            color: "white",
            border: "none",
          }}
        >
          <h2>Services</h2>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              textAlign: "flex",
            }}
          >
            <li>- Pune</li>
            <li>- Mumbai</li>
            <li>- Delhi</li>
            <li>- Banglore</li>
          </ul>
        </div>

        <div
          style={{
            flexBasis: "30%",
            textAlign: "center",
            backgroundColor: "#0E4C92",
            padding: "20px",
            color: "white",
            border: "none",
          }}
        >
          <img
            src="/Images/logo.jpg"
            style={{ maxWidth: "100%", height: "100%" }}
          />
        </div>

        <div
          style={{
            flexBasis: "30%",
            textAlign: "center",
            backgroundColor: "#0E4C92",
            padding: "50px",
            color: "white",
            border: "none",
          }}
        >
          <h2>Connect With Us</h2>
          <div
            className="footer-social-icons"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div style={{ margin: "0 10px" }}>
              <FaInstagram className="icons" />
            </div>
            <div style={{ margin: "0 10px" }}>
              <FaYoutube className="icons" />
            </div>
            <div style={{ margin: "0 10px" }}>
              <FaTwitter className="icons" />
            </div>
            <div style={{ margin: "0 10px" }}>
              <FaFacebook className="icons" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
