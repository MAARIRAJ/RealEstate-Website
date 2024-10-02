import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: white;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  color: #4CAF50; /* Logo color */
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 1.5rem;

  a {
    text-decoration: none;
    color: black;
    font-weight: bold;
  }
`;

const GetStartedButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #4CAF50; /* Button color */
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 5px;
`;

const Header = () => {
  return (
    <Nav>
      <Logo>Mari Raj Land Promoters ❤️</Logo>
      <NavLinks>
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Service</a></li>
        <li><a href="/">Property</a></li>
        <li><a href="/">Contact</a></li>
      </NavLinks>
      <GetStartedButton>Get Started</GetStartedButton>
    </Nav>
  );
};

export default Header;



