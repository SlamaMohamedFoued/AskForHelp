import React, { Component } from "react";
import { Card, Button, Col, Container } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";
import "./Profil.css";
import AvisComp from "../AvisComp/AvisComp";
import ProfilCard from "../ProfilCard/ProfilCard";
import ProfilDescription from "../ProfilDescription/ProfilDescription";
import { connect } from "react-redux";

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
    const { allState } = this.props;
    return (
      <Container className="profilContainer">
        <Col lg={3}>
          <ProfilCard />
        </Col>
        <Col lg={9}>
          <div className="profil">
            <ProfilDescription />
          </div>
          <div className="profil">
            <Card className="allInfos">
              <Card.Header as="h5">Mes conpétences </Card.Header>
              <Card.Body>
                <Card.Title className="compétence">
                  {" "}
                  <i class="fas fa-people-carry fa-2x icon"></i> Déménagement
                </Card.Title>
                <Card.Title className="compétence">
                  {" "}
                  <i class="fas fa-tree fa-2x icon"></i> Jardinage
                </Card.Title>
                <Card.Title className="compétence">
                  {" "}
                  <i class="fas fa-laptop-code fa-2x icon"></i> Informatique
                </Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card className="allInfos">
              <Card.Header as="h5">Avis</Card.Header>
              <Card className=" avisCardP">
                <Card.Body className="searchCardBody">
                  <div className="">
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
                      Tres bonne prestation. Tout a été géré avec efficacité et
                      en s'adaptant aux spécificités de la demande. Je
                      recommande.
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
              <Card className=" avisCardP">
                <Card.Body className="searchCardBody">
                  <div className="">
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
                      Tres bonne prestation. Tout a été géré avec efficacité et
                      en s'adaptant aux spécificités de la demande. Je
                      recommande.
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
              <Card className=" avisCardP">
                <Card.Body className="searchCardBody">
                  <div className="">
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
                      Tres bonne prestation. Tout a été géré avec efficacité et
                      en s'adaptant aux spécificités de la demande. Je
                      recommande.
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Card>
          </div>
        </Col>
      </Container>
    );
  }
}

const mapsStateToProps = state => {
  return {
    allState: state.CategoriesReducer
  };
};

export default connect(mapsStateToProps)(Profil);
