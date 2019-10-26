import React, { Component } from "react";
import "./Home.css";
import { Nav, Navbar, Container, Image, Col, Row } from "react-bootstrap";

class Home extends Component {
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
      <header>
        <Container className="navbarmenu">
          <Navbar expand="lg" className="fixed-top bg-light">
            <Container>
              <Navbar.Brand href="#home">
                <img
                  src="http://demowpthemes.com/buy2thumbsup/local/images/settings/1501838962.png"
                  border="0"
                  alt="logo"
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav ">
                <Nav className="ml-auto ">
                  <Nav.Link className="nav-link" href="#link1">
                    Inscription
                  </Nav.Link>
                  <Nav.Link className="nav-link" href="#link2">
                    Connexion
                  </Nav.Link>
                  <Nav.Link className="nav-link" href="#link3">
                    Language
                  </Nav.Link>
                  <Nav.Link className="nav-link" href="#link3">
                    <a href="#" class="borbtn ">
                      Poster un bessoin
                    </a>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Container>
        <div className="content">
          <div className="presentation text-white text-center">
            <div className="container ">
              <div class="row ">
                <div className="mx-auto d-md-none d-sm-none d-none d-lg-block pt-4">
                  <h1 className="title-big mb-3  big-title ">
                    Des profesionnels pour vous aider
                  </h1>
                </div>
                <h2 className="title mt-1 d-lg-block d-sm-none d-md-none d-none  ">
                  Travaux, déménagement, livraison & services à domicile
                </h2>
              </div>
            </div>
            <Container>
              <Row>
                <Col md={8} xs={10} className="mx-auto mt-5 pt-0">
                  <div class="input-group mb-5">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="De quel service vous avez besoin"
                    />
                    <div class="input-group-prepend">
                      <button
                        class="btn search"
                        type="button"
                        id="button-addon1"
                      >
                        Commencer
                      </button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div id="banner">
            <div id="overlays">
              <img
                src="http://demowpthemes.com/buy2thumbsup/local/images/settings/1501837831.jpg"
                class="img-fluid bannerheight"
              />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Home;
