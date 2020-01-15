import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { connect } from "react-redux";
import "./MessageCard.css";

class MessageCard extends Component {
  render() {
    const { message, allState } = this.props;
    const users = allState.users.filter(el => el.id === message.userId);
    console.log(users);
    return (
      <Card className=" avisCardP">
        <Card.Body className="MessageCardBody row">
          <div className="col-4 align-items-center d-flex flex-column">
            <Card.Img
              variant="top"
              src="https://image.flaticon.com/icons/svg/236/236832.svg"
              className="userImage"
            />
            <Card.Title className="userName text-center">
              {`${message.prenom} ${message.nom}`}
            </Card.Title>
          </div>
          <div className="userDescription col-6">
            <div className="descriptionTitle"></div>
            <Card.Text className="cat">{message.category}</Card.Text>
            <Card.Text>{message.message}</Card.Text>
          </div>
        </Card.Body>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    allState: state.CategoriesReducer
  };
};

export default connect(mapStateToProps)(MessageCard);
