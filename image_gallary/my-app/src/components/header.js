import React from "react";
import { Container, Navbar } from "react-bootstrap";

const navbarStyle = {
  backgroundColor: "lightblue",
  color: "black",
  marginBottom: "20px",
};

const Header = ({ title }) => {
  return (
    <Navbar style={navbarStyle} variant="light">
      <Container className="justify-content-center">
        <Navbar.Brand href="/">{title}</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
