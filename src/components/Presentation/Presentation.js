import React, { Component } from "react";
import "./Pres.css";
import { Nav, Navbar, Container, Col, Row } from "react-bootstrap";
class Presentation extends Component {
  render() {
    return (
      <div className="content my-4">
        <div className="presentation text-white text-center">
          <div className="container ">
            <div class="row  ">
              <div className="mx-auto pt-5">
                <h1 className="title-big mb-3  big-title ">
                  Des profesionnels pour vous aider
                </h1>
              </div>
              <h2 className="title mt-1  mx-auto  ">
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
                    <button class="btn search" type="button" id="button-addon1">
                      Rechercher
                    </button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Presentation;
