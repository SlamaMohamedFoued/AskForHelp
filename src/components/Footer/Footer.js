import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import logo from "../../images/logo.png";

export default function Footer() {
  return (
    <div>
      <hr />
      <Container className="my-5">
        <Row>
          <Col md="4" className="mb-5">
            <img
              src={logo}
              border="0"
              alt="logo"
              className="ml-5"
              height="50px"
            />
            <ul className="social-list ">
              <li className="social-icon">
                <a href="http://www.facebook.com" target="_blank">
                  <img
                    src="http://demowpthemes.com/buy2thumbsup/local/images/facebook.png"
                    border="0"
                    alt="facebook"
                    title="facebook"
                  />
                </a>
              </li>
              <li>
                <a href="http://www.twitter.com" target="_blank">
                  <img
                    src="http://demowpthemes.com/buy2thumbsup/local/images/twitter.png"
                    alt="twitter"
                    border="0"
                    title="twitter"
                  />
                </a>
              </li>
              <li>
                <a href="http://www.google.com" target="_blank">
                  <img
                    src="http://demowpthemes.com/buy2thumbsup/local/images/gplus.png"
                    alt="gplus"
                    border="0"
                    title="gplus"
                  />
                </a>
              </li>
              <li>
                <a href="http://www.pinterest.com" target="_blank">
                  <img
                    src="http://demowpthemes.com/buy2thumbsup/local/images/instagram.png"
                    alt="instagram"
                    border="0"
                    title="instagram"
                  />
                </a>
              </li>
              <li>
                <a href="http://www.instagram.com" target="_blank">
                  <img
                    src="http://demowpthemes.com/buy2thumbsup/local/images/pinterest.png"
                    alt="pinterest"
                    border="0"
                    title="pinterest"
                  />
                </a>
              </li>
            </ul>
          </Col>
          <Col md="8">
            <Row>
              <Col md="3" xs="6">
                <h2 className="titre-footer">Pages</h2>
                <a className="link-footer" href="#">
                  À Propos
                </a>
                <a className="link-footer" href="#">
                  Termes Et Conditions
                </a>
                <a className="link-footer" href="#">
                  Politique
                </a>

                <a className="link-footer" href="#">
                  Blog
                </a>
                <a className="link-footer" href="#">
                  Contact
                </a>
              </Col>
              <Col md="3" xs="6">
                <h2 className="titre-footer">Les clients</h2>
                <a className="link-footer" href="#">
                  Fonctionnement
                </a>
                <a className="link-footer" href="#">
                  Sécurité
                </a>
                <a className="link-footer" href="#">
                  Guide De Service
                </a>
                <a className="link-footer" href="#">
                  Pages
                </a>
              </Col>
              <Col md="3" xs="6">
                <h2 className="titre-footer">Avantages</h2>
                <a className="link-footer" href="#">
                  S'inscrire
                </a>
                <a className="link-footer" href="#">
                  S'identifier
                </a>
                <a className="link-footer" href="#">
                  Réussites
                </a>
              </Col>
              <Col md="3" xs="6">
                <h2 className="titre-footer">Des questions?</h2>
                <a className="link-footer" href="#">
                  S'inscrire
                </a>
                <a className="link-footer" href="#">
                  S'identifier
                </a>
                <a className="link-footer" href="#">
                  Réussites
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
        <h1></h1>
      </Container>
    </div>
  );
}
