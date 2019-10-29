import React, { Component } from "react";
import { Container, Row, Col, Carousel, Card, Button } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";

class AvisComp extends Component {
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
      <div>
        <Card className=" avisCard">
          <Card.Body className="searchCardBody">
            <div className="user">
              <Card.Img
                variant="top"
                src="https://image.flaticon.com/icons/svg/236/236832.svg"
                className="userImage"
              />
              <Card.Title className="userName">Foued Slama</Card.Title>
            </div>
            <div className="userDescription">
              <div className="descriptionTitle">
                <StarRatingComponent
                  className="starsRating"
                  name="rate1"
                  starCount={5}
                  value={rating}
                  onStarClick={this.onStarClick.bind(this)}
                />
                <Card.Text>Travail éffectué par : Foued</Card.Text>
              </div>

              <Card.Text>
                Tres bonne prestation. Tout a été géré avec efficacité et en
                s'adaptant aux spécificités de la demande. Je recommande.
              </Card.Text>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default AvisComp;
