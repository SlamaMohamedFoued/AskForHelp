import React, { Component } from "react";
import { connect } from "react-redux";
import MessageCard from "../MessageCard/MessageCard";

class ListMessages extends Component {
  render() {
    const { user, allMessages } = this.props;
    const messages = allMessages.filter(
      message => message.jobberId === user.id
    );
    console.log(messages);
    return (
      <div className="allMessages">
        {messages.map(el => (
          <MessageCard message={el} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    allMessages: state.MessagesReducer
  };
};

export default connect(mapStateToProps)(ListMessages);
