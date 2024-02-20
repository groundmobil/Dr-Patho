import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";

const HeaderContainer = styled.div`
    padding: 0 4.8rem;
    background-color: ${({ theme }) => theme.colors.bg};
`;

const MainHeader = styled.header`
    height: 10rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

const DrPathoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const DrPatho = styled.h1`
    font-size: 3rem;
    font-weight: 400;
    color: white;
    margin: -5rem 0;

    @media (max-width: 768px) {
        margin: 0; // Adjust as needed for mobile view
    }
`;

const HamburgerIcon = styled.div`
    display: none; // Hidden by default

    @media (max-width: 768px) {
        display: block; // Displayed for mobile view
        cursor: pointer;
        font-size: 2rem;
        color: white;
        // Add styling for your hamburger icon, e.g., three horizontal lines
    }
`;

const Header = () => {
    return (
        <HeaderContainer>
            <MainHeader>
                <DrPathoContainer>
                    <DrPatho>Dr.Patho</DrPatho>
                </DrPathoContainer>
                <Navbar />
                <HamburgerIcon>&#9776;</HamburgerIcon>
            </MainHeader>
        </HeaderContainer>
    );
};

export default Header;
