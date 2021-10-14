import React from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Header.css";
import logo from "../../../images/logo.png";
const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="200"
            height="50"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        <div className="d-flex header-btn-icon">
          <AiOutlineShoppingCart size="2em" color="white" />
          <Button variant="light">Login</Button>
          <Button variant="danger">Sign Up</Button>
        </div>
      </Container>
    </Navbar>
  );
};
export default Header;
