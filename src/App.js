import React from "react";
import NavbarComponent from "./components/navbar/NavbarComponent";
import "./App.css";
import Carosel from "./components/carosel/Carosel";
import CategorieList from "./components/categorieList/categorieList";
import Inscription from "./components/inscription/inscription";
import Login from "./components/login/Login";
import SearchCard from "./components/SearchCard/SearchCard";
import Home from "./components/Home/Home";
import CategoriesIcons from "./components/Categories-icons/CategoriesIcon";
import Avis from "./components/Avis/Avis";
import Profil from "./components/Profil/Profil";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import Presentation from "./components/Presentation/Presentation";
import Footer from "./components/Footer/Footer";
import Android from "./components/Android/Android";
import Accueil from "./components/Accueil/Accueil";

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <Route exact path="/" component={Accueil} />
        <Route exact path="/inscription" component={Inscription} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/Search/:idCat" component={SearchCard} />
        <Route exact path="/Profil/:idUser" component={Profil} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
