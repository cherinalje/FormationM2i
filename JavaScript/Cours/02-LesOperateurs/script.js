/**
 * les Opérateurs Arithmétiques
 */

//Déclaration des variables "Globales" au fichier
var nb1 = 10,
    nb2 = 5,
    resultat = 0;
    resultat = nb1 + nb2
    console.log(`${nb1} + ${nb2} est égale à : ${resultat}`);
    console.log(nb1 + "+" + nb2 + "=" + resultat)


//Soustraction
resultat = nb1 - nb2;
console.log(`${nb1} - ${nb2} est égale à : ${resultat}`);



//Multiplication
resultat = nb1 * nb2;
console.log(`${nb1} x ${nb2} est égale à : ${resultat}`);



//Division
resultat = nb1 / nb2;
console.log(`${nb1} / ${nb2} est égale à : ${resultat}`);


//Les opérateurs combinés

//Addition


//écriture classique
nb1 = nb1 + 5;

//ici opérateur combiné +=
nb1 += 5;


//Soustraction


//écriture classique
nb1 = nb1 - 5;

//ici opérateur combiné +=
nb1 -= 5;



//Multiplication


//écriture classique
nb1 = nb1 * 5;

//ici opérateur combiné +=
nb1 *= 5;


//Division


//écriture classique
nb1 = nb1 / 5;

//ici opérateur combiné +=
nb1 /= 5;

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


