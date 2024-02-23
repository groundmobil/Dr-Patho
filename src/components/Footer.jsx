import React from "react";
import { FaInstagram, FaYoutube, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
return (
<div>
   <div
        style={{ 
          position: "relative",
          textAlign: "center",
          color: "#fefefe",
          fontSize: "18px",
          fontFamily: "Roboto, sans-serif",
          backgroundColor: "#104c94",

          overflow: "hidden", 
        }}
      >
        <h2>Our Lab Partners</h2>
          <div
          style={{
            overflow: 'hidden',
            position: 'relative',
            whiteSpace: 'nowrap',
            background: '#FFFFFF'
          }}
          >
            <div
          style={{
            overflow: 'hidden',
            position: 'relative',
            display: 'inline-block',
            animation: 'slideshow 13s linear infinite',
            whiteSpace: 'nowrap'
          
          }}
          >
          <img src="/Images/partners/final.jpg" 
          style = {{
          height: '75px',
          width: 'auto',
          paddingTop: '15px',
            paddingBottom: '15px',
          }}
          />
          
          </div>
          <div
          style={{
            overflow: 'hidden',
            position: 'relative',
            display: 'inline-block',
            animation: 'slideshow 13s linear infinite',
            whiteSpace: 'nowrap'
            
          }}
          >
          <img src="/Images/partners/final.jpg" 
          style = {{ 
            paddingTop: '15px',
            paddingBottom: '15px',
          height: '75px',
          width: 'auto',
          }}
          />
          
          </div>
          
          </div>
          

          
    
        
      </div>

      <style>
        {`
          @keyframes slideshow {
            from    { transform: translateX(0%); }
            to  { transform: translateX(-100%); }
          }
        `}
      </style>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          borderSpacing: "0",
          margin: "0 auto",
          whiteSpace: 'nowrap'
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
            <li>- Bangalore</li> 
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
            style={{ maxWidth: "100%", height: "100%", borderRadius:'18px' }}
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