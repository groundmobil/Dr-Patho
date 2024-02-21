import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CgMenu, CgClose } from "react-icons/cg";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: flex-end;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  margin-top: -3.5rem;
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
    justify-content: flex-end; /* Align the icon to the right */
    align-items: center; 
    z-index: 999;
    font-size: 2rem;
  }

  .close-outline {
    display: none;
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

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <NavbarContainer>
      <div className="menuIcon">
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
            <NavLinkStyled to="/Profile">Profile</NavLinkStyled>
          </NavItem>
        </NavList>
        <MobileNavbarBtn
          style={{ color: "balck" }}
          onClick={toggleMenu}
          isMenuOpen={isMenuOpen}
        >
          <CgMenu className={`mobile-nav-icons ${isMenuOpen ? "hidden" : ""}`} />
          <CgClose className={`close-outline mobile-nav-icons ${isMenuOpen ? "" : "hidden"}`} />
        </MobileNavbarBtn>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
