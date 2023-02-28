/**
 * LES OPERATEURS ARITHMETIQUES
 */

// Déclaration des Variables "globale" au fichier
var nb1 = 10, nb2 = 5, resultat = 0;


// Addition
resultat = nb1 + nb2;
console.log(`${nb1} + ${nb2} est égal à : ${resultat}`);
console.log(nb1 + " + " + nb2 + " est égal à : " + resultat);

// Soustraction
resultat = nb1 - nb2;
console.log(`${nb1} - ${nb2} est égal à : ${resultat}`);

// Multiplication
resultat = nb1 * nb2;
console.log(`${nb1} x ${nb2} est égal à : ${resultat}`);

// Division
resultat = nb1 / nb2;
console.log(`${nb1} / ${nb2} est égal à : ${resultat}`);

/**
 * LES OPERATEURS COMBINES
 */

// Addition
// Ecriture classique
nb1 = nb1 + 5
// Opérateur combiné +=
nb1 += 5;
console.log(nb1);

// Soustraction
// Ecriture classique
nb1 = nb1 - 5
// Opérateur combiné -=
nb1 -= 5;
console.log(nb1);

// Multiplication
// Ecriture classique
nb1 = nb1 * 5
// Opérateur combiné *=
nb1 *= 5;
console.log(nb1);


// Division
// Ecriture classique
nb1 = nb1 / 5
// Opérateur combiné /=
nb1 /= 5;
console.log(nb1);

/**
 * Les opérateurs d'incrémentation et décrémentation
 */

// Incrémentation
nb1 = nb1 + 1;
// Peur se simplifier en
nb1 += 1;
// Avec l'opérateur d'incrementation
nb1++;

// Décrémentation
nb1 = nb1 - 1;
// Peur se simplifier en
nb1 -= 1;
// Avec l'opérateur d'incrementation
nb1--;

// Positionnement de l'opérateur d'incrémentation

// Affiche la valeur avant incrémentation
nb1 = 1;
console.log("nb1 = "+nb1);
console.log(nb1++);
console.log("nb1 = "+nb1);

// Affiche la valeur après incrémentation
nb1 = 1;
console.log("nb1 = "+nb1);
console.log(++nb1);
console.log("nb1 = "+nb1);