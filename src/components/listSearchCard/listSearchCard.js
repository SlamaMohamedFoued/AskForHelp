import React, { Component } from "react";
import { connect } from "react-redux";
import "./listSearchCard.css";

class listSearchCard extends Component {
  render() {
    const { allState } = this.props;
    const users = allState.jobbers.map((jobber, index) =>
      Array(jobber.categories[index]).filter(
        el =>
          el.catName.toLowerCase() ===
            this.props.match.params.catName.toLowerCase() && jobber
      )
    );
    console.log(users);
    // console.log(allState.jobbers[0].categories[0]);
    return (
      <div className="searchResult">
        <h2 className="catDesc">
          Recherche pour la catégorie{" "}
          <span className="catName">{this.props.match.params.catName}</span>
        </h2>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    allState: state.CategoriesReducer
  };
};

export default connect(mapStateToProps)(listSearchCard);
