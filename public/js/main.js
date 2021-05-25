import { couteau, poele, epicerie, client, maison, bol } from "./objets.js";
import {
  choixProduit,
  videMonPanier,
  payerArticle,
  couperIngredient,
} from "./fonction.js";

let preparationOmelette = () => {
  client.seDeplacer(maison);
  client.seDeplacer(epicerie);
  choixProduit(epicerie, client);
  payerArticle(client);
  client.seDeplacer(maison);
  console.log("Je suis prêt à cuisiner mon omelette");
  //j'enleve mes ingrédients du panier
  videMonPanier(client, bol);
  console.log(
    "Zut j'ai oublié de remettre mon panier, je retourne a l'épicerie"
  );
  client.seDeplacer(epicerie);
  client.deposerPanier(epicerie);
  client.seDeplacer(maison);
  console.log("Je continue la préparation de ma superbe omelette");
  couperIngredient(client, couteau, bol);
  bol.melanger("omelette");
  console.log(
    `Voila! tous les ingrédients pour mon ${bol.contenu[0].nom} sont bien mélanger`
  );

  client.faitCuir(bol, poele);
};

preparationOmelette();
