let choixProduit = (epicerie, client) => {
  client.mainDroite.prendre(epicerie.paniers[1], epicerie.paniers);
  for (let i = epicerie.ingredients.length - 1; i >= 0; i--) {
    client.mainGauche.prendre(epicerie.ingredients[i], epicerie.ingredients);
    client.mainGauche.mettreDans(client.mainDroite.contenu.panierContenu);
    console.log(`Et l'as mis dans  ${client.mainDroite.contenu.nom}`);
  }
};

let videMonPanier = (client, recipient) => {
  for (
    let index = client.mainDroite.contenu.panierContenu.length - 1;
    index >= 0;
    index--
  ) {
    client.mainGauche.prendre(
      client.mainDroite.contenu.panierContenu[index],
      client.mainDroite.contenu.panierContenu
    );

    client.mainGauche.mettreDans(recipient.contenu);
    console.log(`Et l'as mis dans le ${recipient.nom}`);
  }
  console.log(
    `Etat actuelle de mon panier: ${
      client.mainDroite.contenu.panierContenu.length == 0
        ? "[]"
        : client.mainDroite.contenu.panierContenu
    }`
  );
};
let payerArticle = (client) => {
  for (let j = 0; j < client.mainDroite.contenu.panierContenu.length; j++) {
    client.payerArticle(client.mainDroite.contenu.panierContenu[j]);
  }
  console.log(`Solde restant de mon portefeuille ${client.argent}`);
};

let couperIngredient = (client, couteau, recipientIngredient) => {
  recipientIngredient.contenu.forEach((element) => {
    if (element.etat == "entier") {
      client.couper(element, couteau);
    }
  });
};
export { choixProduit, videMonPanier, payerArticle, couperIngredient };
