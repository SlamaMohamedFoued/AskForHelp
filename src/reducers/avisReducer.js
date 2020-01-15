import { ADD_AVIS, GET_AVIS } from "../actions/type";
// const express = require('express')
// const router = express.Router()
// const Avis = require('../')

const initialState = [
  {
    image: "https://image.flaticon.com/icons/svg/236/236832.svg",
    userId: 1,
    nom: "slama",
    prenom: "Foued",
    rating: 5,
    jobberId: 1,
    avis:
      "Tres bonne prestation. Tout a été géré avec efficacité et en s'adaptant aux spécificités de la demande. Je recommande."
  },
  {
    image: "https://image.flaticon.com/icons/svg/236/236832.svg",
    userId: 2,
    nom: "Haddar",
    prenom: "Amine",
    rating: 4,
    jobberId: 2,
    avis:
      "Tres bonne prestation. Tout a été géré avec efficacité et en s'adaptant aux spécificités de la demande. Je recommande."
  },
  {
    image: "https://image.flaticon.com/icons/svg/236/236832.svg",
    userId: 3,
    nom: "ben amor",
    prenom: "haithem",
    rating: 3,
    jobberId: 1,
    avis:
      "Tres bonne prestation. Tout a été géré avec efficacité et en s'adaptant aux spécificités de la demande. Je recommande."
  },
  {
    image: "https://image.flaticon.com/icons/svg/236/236832.svg",
    userId: 4,
    nom: "Zayeni",
    prenom: "Amine",
    rating: 2,
    jobberId: 2,
    avis:
      "Tres bonne prestation. Tout a été géré avec efficacité et en s'adaptant aux spécificités de la demande. Je recommande."
  }
];

const AvisReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_AVIS:
      return [...state, action.payload];
    case GET_AVIS:
      return action.payload;
    default:
      return state;
  }
};

export default AvisReducer;
