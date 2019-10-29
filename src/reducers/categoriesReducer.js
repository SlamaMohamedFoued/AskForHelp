const initialState = {
  categories: [
    {
      idCat: 1,
      catName: "bricolage",
      imageLink:
        "https://sf1.viepratique.fr/wp-content/uploads/sites/4/2019/04/bricolage-et-diy-quels-outils-avoir-chez-soi.jpg"
    },
    {
      idCat: 2,
      catName: "Déménagement",
      iconLink: "fas fa-people-carry fa-2x icon",
      imageLink:
        "https://www.acs-ami.com/fr/blog/wp-content/uploads/2014/02/demenagement-2.jpg  "
    },
    {
      idCat: 3,
      catName: "Jardinage",
      iconLink: "fas fa-tree fa-2x icon",
      imageLink: "https://www.aquaportail.com/pictures1609/jardinage.jpg"
    },
    {
      idCat: 4,
      catName: "Netoyage",
      imageLink:
        "https://www.casanet-nettoyage-debarras.com/wp-content/uploads/sites/5019/2015/04/societe-nettoyage.jpg"
    },
    {
      idCat: 5,
      catName: "Informatique && Design",
      iconLink: "fas fa-laptop-code fa-2x icon",
      imageLink:
        "https://www.knslease.com/wp-content/uploads/2018/11/bdh-informatique-201810-old.jpg"
    },
    {
      idCat: 6,
      catName: "Evénementiel",
      imageLink:
        "http://www.eventparticulier.com/pictures/cms/mariage-carol-patrick/mariage-tournai-salle-de-reception-domaine-de-graux-05-min.jpg"
    }
  ],
  avis: [
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
  ],
  jobbers: [
    {
      id: 1,
      userName: "foued",
      Nom: "slama",
      Prenom: "Foued",
      Ville: "Sousse",
      Region: "khezama",
      DateNaissance: "27/11/1995",
      genre: "homme",
      etat: "particulier",
      email: "fouedslama@outlook.fr",
      password: 1234,
      dateInscription: "12/1/2015",
      verified: true,
      description:
        "Je suis un bon bricoleur, j'ai effectué plusieurs travaux pour des particuliers depuis 10 ans, qui vont de la pose de tapisserie, peinture, carrelage, parquet, lyno, placo, isolation toiture, électricité, plomberie, pose d'escalier, jardinage, maçonnerie, pose de portail, montage de mur.",
      categories: [
        {
          idCat: 2,
          catName: "Déménagement",
          imageLink:
            "https://www.acs-ami.com/fr/blog/wp-content/uploads/2014/02/demenagement-2.jpg  "
        },
        {
          idCat: 1,
          catName: "Jardinage",
          imageLink:
            "https://sf1.viepratique.fr/wp-content/uploads/sites/4/2019/04/bricolage-et-diy-quels-outils-avoir-chez-soi.jpg"
        },
        {
          idCat: 3,
          catName: "bricolage",
          imageLink:
            "https://sf1.viepratique.fr/wp-content/uploads/sites/4/2019/04/bricolage-et-diy-quels-outils-avoir-chez-soi.jpg"
        }
      ]
    },
    {
      id: 2,
      userName: "Moez",
      Nom: "ElKouni",
      Prenom: "Moez",
      Ville: "Sousse",
      Region: "khezama",
      DateNaissance: "27/11/1995",
      genre: "homme",
      etat: "particulier",
      email: "Moez@outlook.fr",
      password: 1234,
      dateInscription: "12/1/2015",
      verified: true,
      description:
        "Je suis un bon bricoleur, j'ai effectué plusieurs travaux pour des particuliers depuis 10 ans, qui vont de la pose de tapisserie, peinture, carrelage, parquet, lyno, placo, isolation toiture, électricité, plomberie, pose d'escalier, jardinage, maçonnerie, pose de portail, montage de mur.",
      categories: [
        {
          idCat: 2,
          catName: "Déménagement",
          iconLink: "fas fa-people-carry fa-2x icon",
          imageLink:
            "https://www.acs-ami.com/fr/blog/wp-content/uploads/2014/02/demenagement-2.jpg  "
        },
        {
          idCat: 1,
          catName: "Jardinage",
          iconLink: "fas fa-tree fa-2x icon",
          imageLink: "https://www.aquaportail.com/pictures1609/jardinage.jpg"
        }
      ]
    }
  ],
  users: [
    {
      id: 1,
      userName: "foued",
      Nom: "slama",
      Prenom: "Foued",
      Ville: "Sousse",
      Region: "khezama",
      DateNaissance: "27/11/1995",
      genre: "homme",
      email: "fouedslama@outlook.fr",
      password: 1234,
      dateInscription: "12/1/2015"
    },
    {
      id: 2,
      userName: "Amine",
      Nom: "Haddar",
      Prenom: "Amine",
      Ville: "Sousse",
      Region: "khezama",
      DateNaissance: "27/11/1995",
      genre: "homme",
      email: "Moez@outlook.fr",
      password: 1234,
      dateInscription: "12/1/2015"
    }
  ]
};

const CategoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default CategoriesReducer;
