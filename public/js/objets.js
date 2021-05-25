import { Ingredient, Lieu, Personne, Outil, Poele, Bol } from "./classes.js";

let maison = new Lieu("Casa", [], []);
let client = new Personne("Elson", "", 50);
let couteau = new Outil("le couteau", "coupé");
let poele = new Poele(" la poele", "cuit");

let produits = [
  new Ingredient("un oeuf", "entier", 1),
  new Ingredient("du fromage", "frais", 2.5),
  new Ingredient("des epices curry", "moulu", 1.5),
  new Ingredient("un Oignon", "entier", 1.1),
];

let panier1 = { nom: "son grand panier ", panierContenu: [] };
let panier2 = { nom: "son petit panier ", panierContenu: [] };
let panier3 = { nom: "son panier moyen", panierContenu: [] };
let tabPaniers = [panier1, panier2, panier3];
let epicerie = new Lieu("epicerie", tabPaniers, produits);

let bol = new Bol("bol", "mélanger", []);

export { couteau, poele, epicerie, client, maison, bol };
