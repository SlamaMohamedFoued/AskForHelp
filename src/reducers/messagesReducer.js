import { GET_MESSAGES, ADD_MESSAGE } from "../actions/type";
const initialState = [
  {
    userId: 1,
    jobberId: 1,
    nom: "slama",
    prenom: "Foued",
    message: "montage d'une étagére ikea à Hammem Sousse",
    category: "Déménagement"
  },
  {
    userId: 2,
    jobberId: 1,
    nom: "Bouchiba",
    prenom: "Marwa",
    message: "Plantation d'une dixaine de plantes à Khezama Ouest ",
    category: "Jardinage"
  },
  {
    userId: 1,
    jobberId: 2,
    nom: "slama",
    prenom: "Foued",
    message: "montage d'une étagére ikea à Hammem Sousse",
    category: "Déménagement"
  },
  {
    userId: 2,
    jobberId: 2,
    nom: "Bouchiba",
    prenom: "Marwa",
    message: "Plantation d'une dixaine de plantes à Khezama Ouest ",
    category: "Jardinage"
  }
];

const MessagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGES:
      return state;
    case ADD_MESSAGE:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default MessagesReducer;
