import React from "react";
import { useNavigate } from "react-router-dom";
import AboutUs from "./AboutUs";
import Footer from "./components/Footer";

const Home = () => {
  const navigate = useNavigate();

  const handleBookTestClick = () => {
    navigate("/Login");
  };

  return (
    <div>
      <div style={{ textAlign: "center", color: "white", marginTop: "23vh", transform: "translateY(-50%)", fontSize: "24px", fontWeight: "50", fontFamily: "sans-serif"}}>
        <h1>Book Any Test <br /> From Any Lab</h1>
        <p>Explore a wide range of tests from various laboratories for your health needs.</p>
        <button
          onClick={handleBookTestClick}
          style={{ marginTop: "20px", padding: "20px 40px", fontSize: "18px", backgroundColor: "#007BFF", color: "white", borderRadius: "70px", cursor: "pointer" }}
        >
          Book a Test
        </button>
      </div>
      
      <AboutUs />
      <Footer />
    </div>
  );
}

export default Home;
