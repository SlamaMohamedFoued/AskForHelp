import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Evenement from "../../images/evenement.png";
import Accueil from "../../images/Accueil.png";
import Cours from "../../images/cours.png";
import Bien from "../../images/bien-etre.png";
import Entreprise from "../../images/Entreprise.png";
import Artisinat from "../../images/Artisanat.png";
import Design from "../../images/Design et web.png";
import "./CategoriesIcons.css";

class CategoriesIcons extends Component {
  state = {};
  render() {
    return (
      <section
        className="catg-icons bg-gray mr-0"
        style={{ backgroundColor: "rgb(244,244,244)", marginTop: "-17px" }}
      >
        <Container className="my-5">
          <Row>
            <Col md="8" xs="12" className="mx-auto my-3">
              <Row className="d-flex justify-content-center">
                <div className="icon-blog d-inline mx-3 text-center">
                  <a href="#" className="link-icons">
                    <img
                      className="img-icons "
                      src={Evenement}
                      style={{ width: "50px", height: "50px" }}
                    />
                    <p className="text-center mt-2">Evenéments</p>
                  </a>
                </div>
                <div className="icon-blog d-inline mx-3 text-center">
                  <a href="#" className="link-icons">
                    <img
                      className="img-icons "
                      src={Accueil}
                      style={{ width: "50px", height: "50px" }}
                    />
                    <p className="text-center mt-2">Accueil</p>
                  </a>
                </div>
                <div className="icon-blog d-inline mx-3 text-center">
                  <a href="#" className="link-icons">
                    <img
                      className="img-icons "
                      src={Cours}
                      style={{ width: "50px", height: "50px" }}
                    />
                    <p className="text-center mt-2">Cours</p>
                  </a>
                </div>
                <div className="icon-blog d-inline mx-3 text-center">
                  <a href="#" className="link-icons">
                    <img
                      className="img-icons "
                      src={Bien}
                      style={{ width: "50px", height: "50px" }}
                    />
                    <p className="text-center mt-2">Bien-etre</p>
                  </a>
                </div>
                <div className="icon-blog d-inline mx-3 text-center">
                  <a href="#" className="link-icons">
                    <img
                      className="img-icons "
                      src={Entreprise}
                      style={{ width: "50px", height: "50px" }}
                    />
                    <p className="text-center mt-2">Entreprise</p>
                  </a>
                </div>
                <div className="icon-blog d-inline mx-3 text-center">
                  <a href="#" className="link-icons">
                    <img
                      className="img-icons "
                      src={Artisinat}
                      style={{ width: "50px", height: "50px" }}
                    />
                    <p className="text-center mt-2">Artisinat</p>
                  </a>
                </div>
                <div className="icon-blog d-inline mx-3 text-center">
                  <a href="#" className="link-icons">
                    <img
                      className="img-icons "
                      src={Design}
                      style={{ width: "50px", height: "50px" }}
                    />
                    <p className="text-center mt-2">Design et web</p>
                  </a>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default CategoriesIcons;
