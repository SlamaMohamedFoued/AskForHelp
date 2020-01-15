import React, { Component } from "react";
import { Card, Button, Col, Container, Accordion } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";
import "./Profil.css";
import AvisComp from "../AvisComp/AvisComp";
import ProfilCard from "../ProfilCard/ProfilCard";
import ProfilDescription from "../ProfilDescription/ProfilDescription";
import { connect } from "react-redux";
import AvisProfilComp from "../avisProfilComp/avisProfilComp";
import ListMessages from "../ListMessages/ListMessages";

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
    const { allState, avis } = this.props;
    const user = allState.jobbers.filter(
      user => String(user.id) === this.props.match.params.userId
    )[0];

    const allAvis = avis.filter(
      avis => String(avis.jobberId) === this.props.match.params.userId
    );
    const x = allState.categories.filter(el =>
      user.categories.includes(el.catName)
    );
    console.log(x);
    return (
      <Container className="profilContainer">
        <Col lg={3}>
          <ProfilCard user={user} />
        </Col>
        <Col lg={9}>
          <div className="profil">
            <ProfilDescription jobber={user} />
          </div>
          <div className="profil">
            <Card className="allInfos">
              <Card.Header as="h5">Mes compétences </Card.Header>
              <Card.Body>
                {x.map(el => (
                  <Card.Title className="compétence">
                    <i class={el.iconLink}></i> {el.catName}
                  </Card.Title>
                ))}
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card className="allInfos">
              <Card.Header as="h5">Avis</Card.Header>
              {allAvis.map((avis, index) => (
                <AvisProfilComp avis={avis} key={index} />
              ))}
            </Card>
          </div>
          <Accordion defaultActiveKey="0">
            <Card className="accordionCard">
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Mes messages
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <ListMessages user={user} />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Col>
      </Container>
    );
  }
}

const mapsStateToProps = state => {
  return {
    allState: state.CategoriesReducer,
    avis: state.AvisReducer
  };
};

export default connect(mapsStateToProps)(Profil);
