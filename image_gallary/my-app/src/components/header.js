import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { ReactComponent as Logo } from "../images/Logo.svg";

const navbarStyle = {
  backgroundColor: "#eeeeee",
  color: "black",
  marginBottom: "20px",
};

const Header = ({ title }) => {
  return (
    <Navbar style={navbarStyle} variant="light">
      <Container
        className="justify-content-center"
        style={{ maxHeight: "3Rem" }}
      >
        <a href="https://unsplash.com/">
          <Logo alt={title} style={{ maxWidth: "15rem" }} />
        </a>
        {/* <Navbar.Brand href="">{title}</Navbar.Brand> */}
      </Container>
    </Navbar>
  );
};

export default Header;
