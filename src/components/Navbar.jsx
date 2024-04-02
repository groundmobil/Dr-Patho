import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CgMenu, CgClose } from "react-icons/cg";

const Header = styled.header`
  padding: 0.5rem 2rem; /* Decrease top padding */
`;

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  @media screen and (max-width: ${({ theme }) => theme.media.mobile}) {
    display: none;
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  margin-top: -6rem;
  margin-right: -5rem;
`;

const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
  transition: color 0.3s, transform 0.3s, border-bottom 0.3s;

  &:hover {
    color: lightblue;
    transform: scale(1.1);
    border-bottom: 2px solid lightblue;
  }

  &:active {
    color: blue;
    transform: scale(0.9);
    border-bottom: 2px solid blue;
  }
`;

const NavItem = styled.li`
  margin-right: 20px;
`;

const MobileNavbarBtn = styled.div`
  display: none;

  @media screen and (max-width: ${({ theme }) => theme.media.mobile}) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    z-index: 1001;
    font-size: 2rem;
    position: fixed;
    top: 20px;
    right: 60px;
    cursor: pointer;
  }

  .close-icon {
    color: black;
    display: ${({ isMenuOpen }) => (isMenuOpen ? "block" : "none")};
  }

  .menu-outline {
    color: white;
    display: ${({ isMenuOpen }) => (isMenuOpen ? "none" : "block")};
  }

  .navbar-list {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    right: 0;
    background-color: black;
    display: ${({ isMenuOpen }) => (isMenuOpen ? "flex" : "none")};
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
  }
`;

const MobileMenuContainer = styled.div`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  width: 70%;
  height: 100%;
  background-color: white;
  transition: right 0.3s ease-in-out;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MobileNavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track user authentication status

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <NavbarContainer>
        <NavList>
          <NavItem>
            <NavLinkStyled to="/">Home</NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled to="/BookNow">Book Now</NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled to="/AboutUs">About Us</NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled to="/MyCart">My Cart</NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled to="/Login">Login</NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled to="Profile">Profile</NavLinkStyled>
          </NavItem>
          
        </NavList>
      </NavbarContainer>
      <MobileNavbarBtn onClick={toggleMenu} isMenuOpen={isMenuOpen}>
        <CgMenu className={`mobile-nav-icons menu-outline ${isMenuOpen ? 'hidden' : ''}`} />
        <CgClose className={`mobile-nav-icons close-icon ${isMenuOpen ? '' : 'hidden'}`} />
      </MobileNavbarBtn>

      <MobileMenuContainer isOpen={isMenuOpen}>
        <MobileNavLinkStyled to="/" onClick={toggleMenu}>
          Home
        </MobileNavLinkStyled>
        <MobileNavLinkStyled to="/BookNow" onClick={toggleMenu}>
          Book Now
        </MobileNavLinkStyled>
        <MobileNavLinkStyled to="/AboutUs" onClick={toggleMenu}>
          About Us
        </MobileNavLinkStyled>
        <MobileNavLinkStyled to="/MyCart" onClick={toggleMenu}>
          My Cart
        </MobileNavLinkStyled>
        {isLoggedIn ? ( // Conditionally render based on login status
          <>
            <MobileNavLinkStyled to="/Profile" onClick={toggleMenu}>
              Profile
            </MobileNavLinkStyled>
          </>
        ) : (
          <>
            <MobileNavLinkStyled to="/Login" onClick={toggleMenu}>
              Login
            </MobileNavLinkStyled>
          </>
        )}
      </MobileMenuContainer>
    </>
  );
};

export default Navbar;
