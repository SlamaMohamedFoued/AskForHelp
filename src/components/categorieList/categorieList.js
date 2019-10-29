import React, { Component } from "react";
import { connect } from "react-redux";
import Categorie from "../categories/categorie";
import "./categorieList.css";

class CategorieList extends Component {
  render() {
    const { allState } = this.props;
    return (
      <div className="sectionCategories">
        <div>
          <h2 className="catDesc">
            Cherchez le service qui vous convient parmis les catégories
            disponibles
          </h2>
        </div>
        <div className="List-categories">
          {allState.categories.map((categorie, index) => (
            <Categorie key={index} categorie={categorie} />
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

export default connect(mapStateToProps)(CategorieList);
