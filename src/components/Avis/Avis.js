import React, { Component } from "react";
import "./Avis.css";
import { Container, Row, Col, Carousel, Card, Button } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";

class Avis extends Component {
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
      <section id="avis-client" className="mx-auto py-5">
        <Container>
          <Row>
            <Col xs="10" className="mx-auto">
              <Row>
                <h1 className="text-center avisDesc avis-heading my-3">
                  Voici ce qu'en pensent nos utilisateurs
                </h1>
              </Row>
              <Row>
                <Carousel controls="false" className="carousel ">
                  <Carousel.Item className="carossel">
                    <Card className=" avisCard">
                      <Card.Body className="searchCardBody">
                        <div className="user">
                          <Card.Img
                            variant="top"
                            src="https://image.flaticon.com/icons/svg/236/236832.svg"
                            className="userImage"
                          />
                          <Card.Title className="userName">
                            Foued Slama
                          </Card.Title>
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
                            Tres bonne prestation. Tout a été géré avec
                            efficacité et en s'adaptant aux spécificités de la
                            demande. Je recommande.
                          </Card.Text>
                        </div>
                      </Card.Body>
                    </Card>
                  </Carousel.Item>
                  <Carousel.Item className="carossel">
                    <Card className=" avisCard">
                      <Card.Body className="searchCardBody">
                        <div className="user">
                          <Card.Img
                            variant="top"
                            src="https://image.flaticon.com/icons/svg/236/236832.svg"
                            className="userImage"
                          />
                          <Card.Title className="userName">
                            Foued Slama
                          </Card.Title>
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
                            Tres bonne prestation. Tout a été géré avec
                            efficacité et en s'adaptant aux spécificités de la
                            demande. Je recommande.
                          </Card.Text>
                        </div>
                      </Card.Body>
                    </Card>
                  </Carousel.Item>
                </Carousel>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default Avis;
