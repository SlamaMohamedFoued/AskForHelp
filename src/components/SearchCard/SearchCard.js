import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import "./SearchCard.css";
import StarRatingComponent from "react-star-rating-component";

class SearchCard extends Component {
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
      <Card className="searchCard">
        <Card.Body className="searchCardBody">
          <div className="user">
            <Card.Img
              variant="top"
              src="https://image.flaticon.com/icons/svg/236/236832.svg"
              className="userImage"
            />
            <StarRatingComponent
              className="starsRating"
              name="rate1"
              starCount={5}
              value={rating}
              onStarClick={this.onStarClick.bind(this)}
            />
          </div>

          <div className="userDescription">
            <Card.Title>
              <i class="fas fa-user"></i> Foued Slama
            </Card.Title>
            <Card.Text>
              Je suis un bon bricoleur, j'ai effectué plusieurs travaux pour des
              particuliers depuis 10 ans, qui vont de la pose de tapisserie,
              peinture, carrelage, parquet, lyno, placo, isolation toiture,
              électricité, plomberie, pose d'escalier, jardinage, maçonnerie,
              pose de portail, montage de mur.
            </Card.Text>
          </div>
          <div className="contact">
            <Card.Title>
              <i class="fas fa-map-marked-alt"></i> Sousse
            </Card.Title>
            <Button variant="primary">Contacter Jobber</Button>
          </div>
        </Card.Body>
        <Card.Footer className="text-muted">
          Inscrit depuis mai 2019
        </Card.Footer>
      </Card>
    );
  }
}

export default SearchCard;
