import React, { Component } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./inscription.css";

class Inscription extends Component {
  state = {
    startDate: new Date()
  };

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  render() {
    const cities = [
      "Tunis",
      "Hammamet",
      "Sousse",
      "Monastir",
      "Mahdia",
      "Sfax"
    ];
    return (
      <Container className="inscriptionForm">
        <h2 className="inscription">Inscription</h2>
        <Form className="inscriptionFormulaire">
          <Form.Row>
            <Col>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Nom :</Form.Label>
                <Form.Control type="text" placeholder="Saisir votre nom" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Prénom :</Form.Label>
                <Form.Control type="text" placeholder="Saisir votre prénom" />
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Ville :</Form.Label>
                <Form.Control as="select">
                  <option>choisir...</option>
                  {cities.map(el => (
                    <option>{el}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Région :</Form.Label>
                <Form.Control type="text" placeholder="Saisir votre nom" />
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col className="date">
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Date de naissance :</Form.Label>
                <br />
                <DatePicker
                  className="datePicker"
                  selected={this.state.startDate}
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group as={Row}>
                <Form.Label as="legend" column sm={3}>
                  Vous êtes
                </Form.Label>
                <Col sm={9}>
                  <Form.Check
                    type="radio"
                    label="Partticulier"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                  />
                  <Form.Check
                    type="radio"
                    label="Professionnel"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                  />
                </Col>
              </Form.Group>
            </Col>
          </Form.Row>

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
            S'inscrire
          </Button>
        </Form>
      </Container>
    );
  }
}

export default Inscription;
