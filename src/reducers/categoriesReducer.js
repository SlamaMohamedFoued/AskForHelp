const initialState = [
  {
    catName: "bricolage",
    imageLink:
      "https://sf1.viepratique.fr/wp-content/uploads/sites/4/2019/04/bricolage-et-diy-quels-outils-avoir-chez-soi.jpg"
  },
  {
    catName: "Déménagement",
    imageLink:
      "https://www.acs-ami.com/fr/blog/wp-content/uploads/2014/02/demenagement-2.jpg  "
  },
  {
    catName: "Jardinage",
    imageLink: "https://www.aquaportail.com/pictures1609/jardinage.jpg"
  },
  {
    catName: "Netoyage",
    imageLink:
      "https://www.casanet-nettoyage-debarras.com/wp-content/uploads/sites/5019/2015/04/societe-nettoyage.jpg"
  },
  {
    catName: "Informatique && Design",
    imageLink:
      "https://www.knslease.com/wp-content/uploads/2018/11/bdh-informatique-201810-old.jpg"
  },
  {
    catName: "Evénementiel",
    imageLink:
      "http://www.eventparticulier.com/pictures/cms/mariage-carol-patrick/mariage-tournai-salle-de-reception-domaine-de-graux-05-min.jpg"
  }
];

const CategoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default CategoriesReducer;
