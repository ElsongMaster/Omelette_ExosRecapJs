import { couteau, poele, epicerie, client, maison } from "./objets.js";

let preparationOmelette = () => {
  client.seDeplacer(maison);
  client.seDeplacer(epicerie);
  client.mainDroite.prendre(epicerie.paniers[1]);
  for (let i = epicerie.ingredients.length - 1; i >= 0; i--) {
    client.mainGauche.prendre(ingredients[i]);
    client.mainGauche.mettrePanier(ingredients[i], client.mainGauche.contenu);
  }
  for (let j = client.mainDroite.contenu.length - 1; j >= 0; j--) {
    client.payerArticle(ingredients[j]);
  }
  console.log(`Solde restant de mon portefeuille ${client.argent}`);
  client.remplirSacDeCourse(epicerie);

  client.seDeplacer(maison);
  console.log("Je suis prêt à cuisiner mon omelette");
};

preparationOmelette();
