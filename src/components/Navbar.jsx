import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 80px;
  width: 100%;
  position: fixed; // Fixed positioning
  top: 0; // Stick to the top
  z-index: 1000; // Ensure it stays above other elements
  background-color: rgba(227, 227, 227, 0.8); // Semi-transparent background
  backdrop-filter: blur(10px); // Blur effect
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); // Optional: Add a shadow for better visibility
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.h1`
  font-weight: bold;
  text-decoration: underline crimson;
  cursor: pointer;
`;
const Menu = styled.ul`
  display: flex;
  list-style: none;
`;
const MenuItem = styled.li`
  margin-right: 30px;
  font-size: 20px;
  font-weight: bold;
  color: grey;
  cursor: pointer;
  text-decoration: none; /* Remove underline for links */
  
  a {
    text-decoration: none; /* Ensure the link itself has no underline */
    color: inherit; /* Ensure the link inherits the color from the parent */
  }
`;
const Button = styled.button`
  border: 2px solid white;
  cursor: pointer;
  padding: 10px 20px;
  background-color: #ddffd3;
  color: #30711c;
  font-weight: bold;
  border-radius: 10px;
  border-color: darkgreen;
  text-decoration: none; /* Remove underline for links */
  
  a {
    text-decoration: none; /* Ensure the link itself has no underline */
    color: inherit; /* Ensure the link inherits the color from the parent */
  }
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>Agency</Logo>
          <Menu>
            <MenuItem as="a" href="#home">Home</MenuItem>
            <MenuItem as="a" href="#features">Features</MenuItem>
            <MenuItem as="a" href="#services">Services</MenuItem>
            <MenuItem as="a" href="#pricing">Pricing</MenuItem>
            <MenuItem as="a" href="#contacts">Contacts</MenuItem>
          </Menu>
        </Left>
        <Button as="a" href="#pricing">JOIN TODAY</Button>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
