import React, { Component } from "react";
import { Card, Button, Modal, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { addMessage } from "../../actions/messageActions";
import { addAvis } from "../../actions/avisAction";
import StarRatingComponent from "react-star-rating-component";

class ProfilDescription extends Component {
  constructor() {
    super();

    this.state = {
      rating: 0,
      show: false,
      show2: false,
      message: "",
      category: "",
      avis: ""
    };
  }
  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue });
  }

  setModalShow = show => {
    this.setState({
      show: show
    });
  };
  setModalShow2 = show2 => {
    this.setState({
      show2: show2
    });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { jobber, allState, addMessage, addAvis } = this.props;
    const { message, category, rating, avis } = this.state;
    const categories = allState.jobbers
      .filter(el => el.id == jobber.id)
      .map(el => el.categories)[0];
    return (
      <Card className="allInfos">
        <Card.Header as="h5">Description</Card.Header>
        <Card.Body>
          <Card.Title>Bonjour, je m'appelle {jobber.prenom}.</Card.Title>
          <Card.Text>{jobber.description}</Card.Text>
          <Button variant="primary" onClick={() => this.setModalShow(true)}>
            Contactez moi
          </Button>
          <Button
            variant="primary"
            className="mx-2"
            onClick={() => this.setModalShow2(true)}
          >
            Donner votre avis
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
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Catégorie</Form.Label>
                  <Form.Control
                    as="select"
                    name="category"
                    onChange={this.handleChange}
                  >
                    <option value="">...</option>
                    {categories.map(el => (
                      <option value={el}>{el}</option>
                    ))}
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="3"
                    name="message"
                    onChange={this.handleChange}
                  />
                  <Form.Text className="text-muted">
                    Soyez précis dans votre description du travaille à faire.
                  </Form.Text>
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button
                type="submit"
                onClick={() => {
                  addMessage({
                    userId: 1,
                    jobberId: jobber.id,
                    message,
                    category
                  });
                  this.setModalShow(false);
                }}
              >
                Envoyer Message
              </Button>
              <Button onClick={() => this.setModalShow(false)}>Annuler</Button>
            </Modal.Footer>
          </Modal>
          <Modal
            show={this.state.show2}
            onHide={() => this.setModalShow2(false)}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">Avis</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group>
                  <StarRatingComponent
                    className="starsRating"
                    name="rating"
                    starCount={5}
                    value={rating}
                    onStarClick={this.onStarClick.bind(this)}
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Avis</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="3"
                    name="avis"
                    onChange={this.handleChange}
                  />
                  <Form.Text className="text-muted">
                    Donner votre avis.
                  </Form.Text>
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button
                type="submit"
                onClick={() => {
                  addAvis({
                    userId: 1,
                    jobberId: jobber.id,
                    rating,
                    avis
                  });
                  this.setModalShow2(false);
                }}
              >
                Poster avis
              </Button>
              <Button onClick={() => this.setModalShow2(false)}>Annuler</Button>
            </Modal.Footer>
          </Modal>
        </Card.Body>
      </Card>
    );
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     addNewMessage: newMessage => dispatch(addMessage(newMessage))
//   };
// };

// export default connect(
//   null,
//   mapDispatchToProps
// )(ProfilDescription);

const mapStateToProps = state => {
  return {
    allState: state.CategoriesReducer
  };
};
export default connect(
  mapStateToProps,
  { addAvis, addMessage }
)(ProfilDescription);
