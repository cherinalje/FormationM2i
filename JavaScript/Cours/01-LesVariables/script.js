// Commentaire sur une ligne

/**
 * Commentaire Multiligne
 */

// Déclaration d'une variable (ES5)
var prenom;

// Affectation de valeur à la variable
prenom = "anthony";
// prenom = [A,n,t,h,o,n,y, ,j,e, ,];

// Absence de type? Non => String (Chaine de caractères)
console.log(typeof(prenom)+ " : " + prenom);
console.log(prenom);
console.log("A la troisième lettre de ma variable il y a : " + prenom[2]);

// Déclaration et affectation de valeur à la volée
var maVar = 5

// Absence de type? Non => Number
console.log(typeof(maVar)+ " : " + maVar)
console.log(maVar);

// Ré-affectation de valeur
maVar = 0.5

// Absence de type? Non => Number
console.log(typeof(maVar)+ " : " + maVar);
console.log(maVar);

// Ré-affectation de valeur
maVar = true

// Absence de type? Non => Booléeene
console.log(typeof(maVar)+ " : " + maVar);
console.log(maVar);


// Type grand nombre (BigInt)
var grandNombre = 9007199254740992n;
console.log(typeof (grandNombre));