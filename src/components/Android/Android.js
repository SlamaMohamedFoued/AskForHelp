import React, { Component } from "react";
import "./Android.css";
import { Container, Col, Row } from "react-bootstrap";
import Appel from "../../images/apple.png";
import Google from "../../images/google.png";
class Android extends Component {
  render() {
    return (
      <section className="android">
        <Container>
          <Col md={12} className="mx-auto">
            <Row>
              <Col md={6}></Col>
              <Col md={6}>
                <div className="my-4 pt-5 android-description">
                  <h2>Soyez plus productif n'importe quand et n'importe où</h2>
                  <p>
                    Envoyez des demandes de projets, obtenez des devis et
                    embauchez le bon professionnel avec l'application gratuite
                    Thumbtack pour iPhone.
                  </p>
                </div>
                <div className="android-button my-5">
                  <a href="#" className="mr-4">
                    <img src={Appel} />
                  </a>
                  <a href="#" className="ml-2">
                    <img src={Google} />
                  </a>
                </div>
              </Col>
            </Row>
          </Col>
        </Container>
      </section>
    );
  }
}

export default Android;
