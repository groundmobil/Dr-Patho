import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Login from "./Login";
import MyCart from "./MyCart";
import BookNow from "./BookNow";
import Profile from "./Profile";
import LabDetailsPopup from "./LabDetailsPopup";
import TestDetailsPopup from "./TestDetailsPopup";
import Checkout from "./Checkout";
import Purchase from "./Purchase";
import Signin from "./SignIn";

const App = () => {
  const theme = {
    colors: {
      heading: "rgb(255, 255, 255)",
      text: "rgb(255, 255, 255)",
      white: "#fff",
      black: "#212529",
      helper: "#8490ff",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient: "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%",
      shadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
      shadowSupport: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: { mobile: "768px", tab: "998px" },
  };

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(/Images/dr.png)`,
          backgroundSize: 'cover',
          minHeight: '100vh',
        }}
      >
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/MyCart" element={<MyCart />} />
            <Route path="/BookNow" element={<BookNow />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/LabDetailsPopup" element={<LabDetailsPopup />} />
            <Route path="/TestDetailsPopup" element={<TestDetailsPopup />} />
            <Route path="/Checkout" element={<Checkout />} />
            <Route path="/Purchase" element={<Purchase />} />
            <Route path="/SignIn" element={<Signin />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
};

export default App;
