import { Ingredient, Lieu, Personne, Outil, Poele, Bol } from "./classes.js";

let maison = new Lieu("Casa", [], []);
let client = new Personne("Elson", maison, 50);
let couteau = new Outil("couteau", "coupé");
let poele = new Poele("poele", "cuit");

let produits = [
  new Ingredient("un oeuf", "entier", 1),
  new Ingredient("du fromage", "frais", 2.5),
  new Ingredient("des epices curry", "moulu", 1.5),
  new Ingredient("un Oignon", "entier", 1.1),
];
let panier1 = { nom: "un panier Légumes", contenu: [] };
let panier2 = { nom: "un panier produit laitiers", contenu: [] };
let panier3 = { nom: "un panier Boissons", contenu: [] };
let epicerie = new Lieu("epicerie", [panier1, panier2, panier3], produits);

let bol = new Bol("", "mélanger", []);

export { couteau, poele, epicerie, client, maison, bol };
