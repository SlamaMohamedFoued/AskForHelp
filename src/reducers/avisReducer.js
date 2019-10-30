const initialState = [
  {
    image: "https://image.flaticon.com/icons/svg/236/236832.svg",
    userName: "Foued Slama",
    rating: 5,
    jobberName: "Amine",
    comment:
      "Tres bonne prestation. Tout a été géré avec efficacité et en s'adaptant aux spécificités de la demande. Je recommande."
  },
  {
    image: "https://image.flaticon.com/icons/svg/236/236832.svg",
    userName: "Haithem Amor",
    rating: 5,
    jobberName: "Ala",
    comment:
      "Tres bonne prestation. Tout a été géré avec efficacité et en s'adaptant aux spécificités de la demande. Je recommande."
  }
];

const AvisReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default AvisReducer;
