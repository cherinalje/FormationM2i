/**
 * Les Boucles et Itération
 */

// Création de la constante result permettant de recupérer l'élément HTML class="result"
const result = document.querySelector('#result');

/*
    La boucle Tant que : while
*/

// Exemple de boucle while : Compter jusqu'a 10
var i = 1;
while (i <= 50) {
    console.log(`La boucle While s'est éxécutée ${i} fois.`);
    i++;// Attention aux boucles infinies
}
console.log(i);
/*
    La boucle Faire tant que : Do...while
*/

// Exemple de boucle do...while : Compter jusqu'a 10
//var i = 51;
do {
    console.log(`La boucle Do...While s'est éxécutée ${i} fois.`);
    i++;// Attention aux boucles infinies
} while (i < 50)

/*
    La boucle Pour : for (var itération ; Condition de sortie ; incrémentation variable itération)
*/

// Exemple de boucle for : Compter jusqu'a 10
let k;
for ( k = 1; k <= 10; k++) {
    console.log(`La boucle For s'est éxécutée ${k} fois.`);
}
console.log(k);
//console.log(i);
// Exemple PPT itération jourSem
let jourSem = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
for (let i = 0; i < jourSem.length; i++){
    w = i;
    if(i==0){
        console.log("Debut de la semaine");
        continue;
    }
    console.log(jourSem[i]);
    if(i==3){
        break;
    }
}

console.log(w);

    /**
     * EXERCICE
     * A partir du tableau numérique suivant :
     * 
     * var names = ["Adam", "Etienne", "Sebastien", "Clement", "Virginie"];
     * 
     * 1/ Gràce à une boucle for, afficher la liste des prenoms du tableau
     * 2/ Gràce à une boucle while, afficher la liste des prenoms du tableau
     */
    var names = ["Adam", "Etienne", "Sebastien", "Clement", "Virginie"];

// 1 - boucle for

for (var j = 0; j < names.length; j++) {
    console.log(names[j]);
}

// 2 - boucle while

i = 0;
while (i < names.length) {
    console.log(names[i]);
    i++;
}

/*
    La boucle Pour...dans : For...in
*/
// Parfait pour les tableaux associatifs
var contact = {
    nom: "Richard",
    prenom: "Pierre",
    telephone: "0123456789",
    email: "prichard@gmail.com"
}
// Exemple de boucle for...in 
for (var key in contact) {
    console.log(key);//Permet d'afficher les clés
    console.log(contact[key]);//Permet d'afficher les infos pour chaque clé
    console.log(key + " : " + contact[key]);//Permet d'afficher les infos pour chaque clé
}

/*
    La boucle For...of
*/
// Utilisation du tableau numerique names de l'exercice précédent
for (j = 0; j < names.length; j++) {
    console.log(`La boucle for, names contient ${names[j]}`);
}
// Exemple de boucle for...of 
for (const name of names) {
    console.log(`La boucle for..of, names contient ${name}`);//var is deprecated
}