import React, { Component } from "react";
import { Card } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";

class ProfilCard extends Component {
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
    const { user } = this.props;
    return (
      <Card style={{ width: "16rem" }}>
        <Card.Body>
          <div className="PInfos">
            <img
              src="https://image.flaticon.com/icons/svg/236/236832.svg"
              className="imageProfil"
            />
            <Card.Title className="name">
              {user.prenom} {user.nom}
            </Card.Title>
            <StarRatingComponent
              className="starsRating"
              name="rate1"
              starCount={5}
              value={user.rating}
            />
          </div>
          <div className="PInfos">
            <Card.Title>
              <i class="fas fa-map-marked-alt"></i> {user.ville}
            </Card.Title>
          </div>
          <Card.Footer>Inscrit depuis le {user.dateInscription}</Card.Footer>
        </Card.Body>
      </Card>
    );
  }
}

export default ProfilCard;
