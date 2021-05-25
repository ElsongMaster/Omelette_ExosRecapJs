class Personne {
  constructor(nom, lieu, argent) {
    this.nom = nom;
    this.lieu = lieu;
    this.argent = argent;
    this.mainDroite = { nom: "mainDroite", prendre() {} };
    this.mainGauche = { nom: "mainGauche", prendre() {} };
  }

  seDeplacer(lieu) {}
  payerArticle(article) {}
  couper(ingredient, outil) {}
}

class Outil {
  constructor(nom, action) {
    this.nom = nom;
    this.action = action;
  }
}

class Ingredient {
  constructor(nom, etats, prix) {
    this.nom = nom;
    this.etats = etats;
    this.prix = prix;
  }
}

class Lieu {
  constructor(nom, paniers, ingredients) {
    this.nom = nom;
    this.personnes = [];
    this.paniers = paniers;
    this.ingredients = ingredients;
  }
}
