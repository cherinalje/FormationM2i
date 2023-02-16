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

//deux manières d'appeler une valeur à une clé:

// Affichage de la valeur à la clé prenom
console.log(personne.prenom);
// Affichage de la valeur à la clé nom
console.log(personne["nom"]);

//changer le prénom
personne["prenom"]= "jeanne";
console.table(personne);
personne.prenom="marie";
console.table(personne);
console.log(personne.prenom);

