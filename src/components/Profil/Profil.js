import React, { Component } from "react";
import { Card, Button, Col, Container } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";
import "./Profil.css";

class Profil extends Component {
  constructor() {
    super();

    this.state = {
      rating: 1
    };
  }
  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue });
  }
  render() {
    const { rating } = this.state;
    return (
      <Container className="profilContainer">
        <Col lg={4}>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <div className="PInfos">
                <img
                  src="https://image.flaticon.com/icons/svg/236/236832.svg"
                  className="imageProfil"
                />
                <Card.Title className="name">Foued Slama</Card.Title>
                <StarRatingComponent
                  className="starsRating"
                  name="rate1"
                  starCount={5}
                  value={rating}
                  onStarClick={this.onStarClick.bind(this)}
                />
              </div>
              <div className="PInfos">
                <Card.Title>
                  <i class="fas fa-map-marked-alt"></i> Sousse
                </Card.Title>
              </div>

              <Card.Footer>Inscrit depuis mai 2019</Card.Footer>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={8}>
          <div className="profil">
            <Card className="allInfos">
              <Card.Header as="h5">Description</Card.Header>
              <Card.Body>
                <Card.Title>Bonjour, je m'appelle Foued.</Card.Title>
                <Card.Text>
                  Bonjour, j'ai des compétences en matière de monteur de
                  meubles, installation de luminaires, TV au mur, fixation
                  d'objets de décoration et aide aux déménagement. A bientôt
                  merci
                </Card.Text>
                <Button variant="primary">Contact me</Button>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Container>
    );
  }
}

export default Profil;
