import { couteau, poele, epicerie, client, maison, bol } from "./objets.js";

let preparationOmelette = () => {
  client.seDeplacer(maison);
  client.seDeplacer(epicerie);
  client.mainDroite.prendre(epicerie.paniers[1], epicerie.paniers);
  for (let i = epicerie.ingredients.length - 1; i >= 0; i--) {
    client.mainGauche.prendre(epicerie.ingredients[i], epicerie.ingredients);
    client.mainGauche.mettreDans(client.mainDroite.contenu.panierContenu);
  }
  for (let j = 0; j < client.mainDroite.contenu.panierContenu.length; j++) {
    client.payerArticle(client.mainDroite.contenu.panierContenu[j]);
  }
  console.log(`Solde restant de mon portefeuille ${client.argent}`);

  client.seDeplacer(maison);
  console.log("Je suis prêt à cuisiner mon omelette");

  //j'enleve mes ingrédients du panier

  for (
    let index = client.mainDroite.contenu.panierContenu.length - 1;
    index >= 0;
    index--
  ) {
    client.mainGauche.prendre(
      client.mainDroite.contenu.panierContenu[index],
      client.mainDroite.contenu.panierContenu
    );

    client.mainGauche.mettreDans(bol.contenu);
    console.log(`Et l'as mis dans le ${bol.nom}`);
  }
  console.log(
    `Etat actuelle de mon panier: ${
      client.mainDroite.contenu.panierContenu.length == 0
        ? "[]"
        : client.mainDroite.contenu.panierContenu
    }`
  );
  console.log(
    "Zut j'ai oublié de remettre mon panier, je retourne a l'épicerie"
  );
  client.seDeplacer(epicerie);
  client.deposerPanier(epicerie);
  client.seDeplacer(maison);
  console.log("Je continue la préparation de ma superbe omelette");
  bol.contenu.forEach((element) => {
    if (element.etat == "entier") {
      client.couper(element, couteau);
      // console.log(element.etat);
    }
  });
  bol.melanger("omelette");
  console.log(
    `Voila! tous les ingrédients pour mon ${bol.contenu[0].nom} sont bien mélanger`
  );

  client.fairCuir(bol, poele);
};

preparationOmelette();
