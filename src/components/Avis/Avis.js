import React, { Component } from "react";
import "./Avis.css";
import { Container, Row, Col, Carousel, Card, Button } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";
import AvisComp from "../AvisComp/AvisComp";
import { connect } from "react-redux";

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
    const { allState } = this.props;
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
                  {allState.avis.map((avis, index) => (
                    <Carousel.Item className="carossel">
                      <AvisComp avis={avis} key={index} />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    allState: state.CategoriesReducer
  };
};

export default connect(mapStateToProps)(Avis);
