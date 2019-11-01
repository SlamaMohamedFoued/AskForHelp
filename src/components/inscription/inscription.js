import React, { Component } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./inscription.css";
import { connect } from "react-redux";

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
    const genres = ["Homme", "Femme"];
    const etats = ["Professionnel", "Particulier"];
    const { allState } = this.props;
    const categories = allState.categories.map(el => el.catName);
    console.log(categories);
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
            <Col className="date flex">
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Date de naissance :</Form.Label>
                <br />
                <DatePicker
                  className="datePicker"
                  selected={this.state.startDate}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail" className="genre">
                <Form.Label>genre :</Form.Label>
                <Form.Control as="select">
                  <option>...</option>
                  {genres.map(el => (
                    <option>{el}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Vous êtes</Form.Label>
                <Form.Control as="select">
                  <option>...</option>
                  {etats.map(el => (
                    <option>{el}</option>
                  ))}
                </Form.Control>
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
          <Form.Row>
            <Col>
              <Form.Group>
                <Form.Label>Categories :</Form.Label>
                {/* <Form.Control as="select">
                  <option>...</option>
                  {categories.map(el => (
                    <option>{el}</option>
                  ))}
                </Form.Control> */}
                <div key={`custom-inline-checkbox`} className="mb-3">
                  {categories.map((el, index) => (
                    <Form.Check
                      custom
                      inline
                      label={el}
                      type="checkbox"
                      id={`custom-inline-checkbox-${index}`}
                    />
                  ))}
                </div>
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

const mapStateToProps = state => {
  return {
    allState: state.CategoriesReducer
  };
};

export default connect(mapStateToProps)(Inscription);
