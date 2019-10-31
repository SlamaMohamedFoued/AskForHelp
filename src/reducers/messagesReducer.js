import { GET_MESSAGES, ADD_MESSAGE } from "../actions/type";
const initialState = [
  {
    userId: 1,
    jobberId: 1,
    message: "montage d'une étagére ikea à Hammem Sousse",
    category: "Déménagement"
  }
];

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGES:
      return state;
    case ADD_MESSAGE:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default messagesReducer;
