import React, { Component } from "react";
import "./Menu.css";
import { Nav, Navbar, Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 250;
      if (isTop !== true) {
        this.setState({ scrolled: true });
      } else {
        this.setState({ scrolled: false });
      }
    });
  }
  render() {
    return (
      <Container className="navbarmenu ">
        <Navbar expand="lg" className="fixed-top bg-light ">
          <Container>
            <Link to="/">
              <Navbar.Brand>
                <img src={logo} border="0" alt="logo" height="50px" />
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav ">
              <Nav className="ml-auto ">
                <Nav.Link className="nav-link">
                  <Link to="/login">Connexion</Link>
                </Nav.Link>
                <Nav.Link className="nav-link">
                  <Link to="/inscription">Devenir Jobber</Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    );
  }
}

export default Menu;
