import React, { Component } from "react";
import { Card, Button, Modal, Form } from "react-bootstrap";

class ProfilDescription extends Component {
  state = {
    show: false
  };
  setModalShow = show => {
    this.setState({
      show: show
    });
  };
  render() {
    return (
      <Card className="allInfos">
        <Card.Header as="h5">Description</Card.Header>
        <Card.Body>
          <Card.Title>Bonjour, je m'appelle Foued.</Card.Title>
          <Card.Text>
            Bonjour, j'ai des compétences en matière de monteur de meubles,
            installation de luminaires, TV au mur, fixation d'objets de
            décoration et aide aux déménagement. A bientôt merci
          </Card.Text>
          <Button variant="primary" onClick={() => this.setModalShow(true)}>
            Contactez moi
          </Button>
          <Modal
            show={this.state.show}
            onHide={() => this.setModalShow(false)}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Message
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows="3" />
                  <Form.Text className="text-muted">
                    Soyez précis dans votre description du travaille à faire.
                  </Form.Text>
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button type="submit">Envoyer Message</Button>
              <Button onClick={() => this.setModalShow(false)}>Annuler</Button>
            </Modal.Footer>
          </Modal>
        </Card.Body>
      </Card>
    );
  }
}

export default ProfilDescription;
