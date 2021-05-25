import { Ingredient, Lieu, Personne } from "./classes";

let maison = new Lieu("LaCasa", [client], []);
let client = Personne("Elson", maison, 50);
let couteau = new Outil("couteau", "coupé");

let produits = [
  new Ingredient("oeuf", "entier", 1),
  new Ingredient("fromage", "frais", 2.5),
  new Ingredient("epices curry", "moulu", 1.5),
  new Ingredient("Oignon", "entier", 1.1),
];
let panier1 = { type: "Légumes", contenu: [] };
let panier2 = { type: "produit laitiers", contenu: [] };
let panier3 = { type: "Boissons", contenu: [] };
let epicerie = new Lieu("epicerie", [panier1, panier2, panier3], produits);
