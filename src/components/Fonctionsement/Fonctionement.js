import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Comment from "../../images/how-it-works.png";
import "./Fonctionement.css";
class Fonctonement extends Component {
  state = {};
  render() {
    return (
      <section className="fonctionement my-5">
        <Container>
          <Row>
            <Col className="text-center ">
              <h1 className="text-center fonctionment-heading">
                Comment ça fonctionne
              </h1>
            </Col>
          </Row>
          <Row className="my-3">
            <Col md="10" className="mx-auto">
              <Row>
                <Col lg={6} className="mx-auto my-2 text-center">
                  <img src={Comment} />
                </Col>
                <Col lg={6} className="mx-auto  my-2">
                  <h3 className="heading-description  ">
                    1. Dites-nous ce dont vous avez besoin
                  </h3>
                  <p className="lead fonct-para my-3">
                    Tout d’abord, sélectionnez le service professionnel requis
                    concernant le type de professionnel que vous recherchez.
                  </p>
                  <h3 className="heading-description  ">
                    2. Examiner les Jobbers disponibles
                  </h3>
                  <p className="lead fonct-para my-3">
                    En quelques secondes, trouver plusieurs profil de jobbers.
                    Consultez leurs évaluations et choisissez l'un d'entre eux.
                  </p>
                  <h3 className="heading-description  ">
                    3. Contacter le bon Jobber
                  </h3>
                  <p className="lead fonct-para my-3">
                    Comparez les prix, les profils et les avis, puis embauchez
                    le Jobber qui vous convient.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default Fonctonement;
