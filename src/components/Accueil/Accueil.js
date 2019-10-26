import React, { Component } from "react";
import Android from "../Android/Android";
import Avis from "../Avis/Avis";
import Presentation from "../Presentation/Presentation";
import CategorieList from "../categorieList/categorieList";
import Fonctonement from "../Fonctionsement/Fonctionement";

class Accueil extends Component {
  render() {
    return (
      <div>
        <Presentation />
        <CategorieList />
        <Avis />
        <Fonctonement />
        <Android />
      </div>
    );
  }
}

export default Accueil;
