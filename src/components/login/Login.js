import React, { Component } from "react";
import { Form, Button, Col, Container } from "react-bootstrap";

class Login extends Component {
  render() {
    return (
      <Container>
        <h2 className="inscription">Connexion</h2>
        <Form className="inscriptionFormulaire">
          <Form.Row>
            <Col>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>E-mail :</Form.Label>
                <Form.Control type="email" placeholder="Saisir votre e-mail" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Mot de passe :</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Saisir votre mote de passe"
                />
              </Form.Group>
            </Col>
          </Form.Row>

          <Button variant="primary" type="submit">
            Se Connecter
          </Button>
        </Form>
      </Container>
    );
  }
}

export default Login;
