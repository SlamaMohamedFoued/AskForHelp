import React, { Component } from "react";
import { Card, Col } from "react-bootstrap";
import bricolage from "../../images/bricolage.jpg";
import "./categorie.css";

class Categorie extends Component {
  render() {
    const { categorie } = this.props;
    console.log(window.innerWidth);
    return (
      <Col lg={parseInt(window.innerWidth) > 1250 ? "4" : "6"} className="cat">
        <Card className="cardd">
          <Card.Img
            variant="top"
            src={categorie.imageLink}
            className="img-categorie"
          />
          <div className="shadow"></div>
          <div className="presentation text-white text-center">
            <div className="container-titre ">
              <h1 className=" categorie-title text-center">
                {categorie.catName}
              </h1>
            </div>
          </div>
        </Card>
      </Col>
    );
  }
}

export default Categorie;
