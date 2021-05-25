class Personne {
  constructor(nom, lieu, argent) {
    this.nom = nom;
    this.lieu = lieu;
    this.argent = argent;
    this.mainDroite = Main("main droite");
    this.mainGauche = Main("main Gauche");
    this.sacCourse = [];
  }

  seDeplacer(lieu) {
    this.lieu = lieu;
  }
  payerArticle(article) {
    this.argent -= article.prix;

    this.mainDroite.mettre(article, this.sacCourse);
  }
  couper(ingredient, outil) {
    ingredient.etat = outil.action;
  }
}

class Main {
  constructor(nom) {
    this.nom = nom;
    this.contenu = [];
  }

  prendre(produit) {
    this.contenu.push(produit);
  }
  mettre(produit, contenant) {
    contenant.push(this.contenu[this.contenu.indexOf(produit)]);
  }
}
class Outil {
  constructor(nom, action) {
    this.nom = nom;
    this.action = action;
  }
}

class Ingredient {
  constructor(nom, etat, prix) {
    this.nom = nom;
    this.etat = etat;
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

class Poele extends Outil {
  constructor(nom, action, contenu) {
    super(nom, action);
    this.contenu = contenu;
  }

  cuir(produit) {
    setTimeout(() => {
      produit.etat = this.action;
    }, 4000);
  }
}

class Bol extends Outil {
  constructor(nom, action, contenu) {
    super(nom, action);
    this.contenu = contenu;
  }

  melanger(nomMelange) {
    let resultMelange = new Ingredient(nomMelange, "pas cuit");
    this.contenu = [resultMelange];
  }
}

export { Personne, Lieu, Ingredient };
