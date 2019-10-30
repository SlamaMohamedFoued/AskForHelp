import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import "./SearchCard.css";
import StarRatingComponent from "react-star-rating-component";
import { Link } from "react-router-dom";

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
    const { user } = this.props;
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
              value={user.rating}
              onStarClick={this.onStarClick.bind(this)}
            />
          </div>

          <div className="userDescription">
            <Card.Title>
              <i class="fas fa-user"></i> {user.name} {user.prenom}
            </Card.Title>
            <Card.Text>{user.description}</Card.Text>
          </div>
          <div className="contact">
            <Card.Title>
              <i class="fas fa-map-marked-alt"></i> {user.region}
            </Card.Title>
            <Button variant="primary" className="linkToProfil">
              <Link className="linkToProfil" to={`/Profil/${user.id}`}>
                Afficher Profil
              </Link>
            </Button>
          </div>
        </Card.Body>
        <Card.Footer className="text-muted">
          Inscrit depuis Le {user.dateInscription}
        </Card.Footer>
      </Card>
    );
  }
}

export default SearchCard;
