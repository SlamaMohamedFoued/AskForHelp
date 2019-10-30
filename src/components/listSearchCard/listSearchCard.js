import React, { Component } from "react";
import { connect } from "react-redux";
import "./listSearchCard.css";
import SearchCard from "../SearchCard/SearchCard";

class listSearchCard extends Component {
  render() {
    const { allState } = this.props;
    const users = allState.jobbers.filter(el =>
      el.categories.includes(this.props.match.params.catName)
    );

    console.log(users);

    return (
      <div className="searchResult">
        <h2 className="catDesc">
          Recherche pour la catégorie
          <span className="catName"> {this.props.match.params.catName}</span>
        </h2>
        <div>
          {users.map((user, index) => (
            <SearchCard user={user} key={index} />
          ))}
        </div>
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
