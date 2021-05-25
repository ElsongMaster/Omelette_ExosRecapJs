class Personne {
  constructor(nom, lieu, argent) {
    this.nom = nom;
    this.lieu = lieu;
    this.argent = argent;
    this.mainDroite = new Main("main droite", this);
    this.mainGauche = new Main("main Gauche", this);
    this.sacCourse = [];
  }

  seDeplacer(lieu) {
    console.log(
      `${this.nom} est actuellement à ${
        lieu.nom == "Casa" ? "la " + lieu.nom : "l' " + lieu.nom
      }`
    );

    this.lieu = lieu;
    lieu.personnes.push(this);
  }
  payerArticle(article) {
    this.argent -= article.prix;
  }
  couper(ingredient, outil) {
    ingredient.etat = outil.action;
  }

  deposerPanier(epicerie) {
    console.log(`${this.nom} vient de déposer ${this.mainDroite.contenu.nom}`);
    epicerie.paniers.push(this.mainDroite.contenu);
    this.mainDroite.contenu = null;
  }

  remplirSacDeCourse(epicerie) {
    let monPanier = this.mainDroite.contenu;
    for (let i = monPanier.length - 1; i >= 0; i--) {
      this.mainGauche.prendre(monPanier[i], monPanier);
      this.mainGauche.mettrePanier(this.sacCourse);
    }
    epicerie.paniers.push(this.mainDroite.contenu);
    this.mainDroite.contenu = null;
  }

  faitCuir(contenantProduit, outil) {
    outil.contenu.push(
      ...contenantProduit.contenu.splice(0, contenantProduit.contenu.length)
    );
    console.log(`${this.nom} verse le mélange sur ${outil.nom}`);
    outil.cuir();
  }
}

class Main {
  constructor(nom, personne) {
    this.personne = personne;
    this.nom = nom;
    this.contenu = "";
    this.type = "";
  }

  prendre(produit, contenantOrigine) {
    this.contenu = produit;
    this.type = produit.nom;
    contenantOrigine.splice(contenantOrigine.indexOf(produit), 1);
    console.log(`${this.personne.nom} a pris ${this.type}`);
  }

  mettreDans(contenant) {
    contenant.push(this.contenu);
    this.contenu = null;
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
  constructor(nom, action) {
    super(nom, action);
    this.contenu = [];
  }

  cuir() {
    setTimeout(() => {
      this.contenu.forEach((elt) => {
        elt.etat = this.action;
      });
    }, 4000);
    console.log(`Ca sent bon! je pense que mon omelette est prête. A table`);
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

export { Personne, Lieu, Ingredient, Outil, Poele, Bol };
