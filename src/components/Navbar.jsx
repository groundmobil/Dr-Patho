import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

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

const Navbar = () => {
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
            </div>
        </NavbarContainer>
    );
};

export default Navbar;
