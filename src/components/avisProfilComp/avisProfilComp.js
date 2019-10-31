import React, { Component } from "react";
import { Card } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";

class AvisProfilComp extends Component {
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
    const { avis } = this.props;
    return (
      <Card className=" avisCardP">
        <Card.Body className="searchCardBody">
          <div className="">
            <Card.Img
              variant="top"
              src="https://image.flaticon.com/icons/svg/236/236832.svg"
              className="userImage"
            />
            <Card.Title className="userName text-center">
              {avis.prenom} {avis.nom}
            </Card.Title>
          </div>
          <div className="userDescription">
            <div className="descriptionTitle">
              <StarRatingComponent
                className="starsRating"
                name="rate1"
                starCount={5}
                value={avis.rating}
              />
            </div>

            <Card.Text>{avis.comment}</Card.Text>
          </div>
        </Card.Body>
      </Card>
    );
  }
}

export default AvisProfilComp;
