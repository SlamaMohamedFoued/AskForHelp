import React, { Component } from "react";
import "./Menu.css";
import { Nav, Navbar, Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

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
                <img
                  src="http://demowpthemes.com/buy2thumbsup/local/images/settings/1501838962.png"
                  border="0"
                  alt="logo"
                />
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav ">
              <Nav className="ml-auto ">
                <Nav.Link className="nav-link">Inscription</Nav.Link>
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
