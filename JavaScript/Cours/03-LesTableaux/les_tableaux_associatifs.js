/**
 * Les tableaux Associatifs
 */

// Déclaration d'un tableau associatif
var personne = {
    nom:"Dupont",
    prenom:"Jean",
    age:25
};

// Affichage du type
console.log(typeof(personne));
// Affichage du tableau personne
console.table(personne);
// Affichage de la valeur à la clé prenom
console.log(personne.prenom);
// Affichage de la valeur à la clé nom
console.log(personne["prenom"]);

// Réaffectation de valeur
personne["prenom"] = "Jeanne";
console.table(personne);

personne.prenom = "Marie";
console.table(personne);

console.log(personne.prenom);