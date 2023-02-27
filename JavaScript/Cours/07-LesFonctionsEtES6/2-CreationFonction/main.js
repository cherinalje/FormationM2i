/**
 * Les Fonctions en Javascript
 */

/** FONCTIONS NATIVES
 * // Afficher une alert à l'utilisateur (alert())
        alert("Coucou toi!");

   // Demander une saisie à l'utilisateur (prompt())
        var firstname = prompt("Quel est votre prénom ?");

        console.log(`Votre prénom est ${firstname}.`); // Affichage du prénom saisie
 */

/**
  * LES FONCTIONS NON NATIVES (USER)
  */

// Fonction sans paramètres
function hello() {
  // Lors de l'appel à cette fonction, les instruction ci-dessous seront exécutées
  console.log("Hello World");
}
// Appel à la fonction Hello()
hello();


// Fonction avec paramètres
function helloParams(firstname) {
  // Affichage de la concatélantion dans la console
  console.log(`Hello ${firstname}!`);
}
// Appel à la fonction helloParams()
let retour = helloParams("jean");
console.log(retour);
let firstname = prompt("Quel est votre prénom ?");
// retour=helloParams(firstname);
// console.log(retour);


// Fonction avec paramètres et un retour
function helloReturn(firstname) {
  // Création d'une variable string et stockage concaténation text + variable
  let helloDisplay = `Hello ${firstname}!`;
  // Notre fonction retourne la variable helloDisplay au programme appellant
  return helloDisplay;
}
// Appel à la fonction helloParams()
let display = helloReturn("Jean-Eude");
console.log(display);
firstname = prompt("Quel est votre prénom ?");
display = helloReturn(firstname);
console.log(helloReturn(firstname));


/**
 * Exemple Du PPT
 */

// Déclaration d'une fonction sans paramètres
function afficher() {
  alert("Bonjour à tous!");
}
afficher(); // Appel de la fonction afficher()

// Déclaration d'une fonction avec paramètres (arguments)
function afficher(toto) {
  alert(toto + " à tous!");
}
afficher("Bonsoir");

// Déclaration d'une fonction avec paramètres (arguments) et un retour
function afficher(toto1, toto2) {
  let str = toto1 + " à " + toto2;
  return str;
}
alert(afficher("Bonsoir", "vous"));

// Portée des variables d'une fonction
a = 10;
var b = 20;
function f() {
  c = 30;
  var d = 40;
  alert(a); // Affiche 10
  alert(b); // Affiche 20
}
f();
alert(c); // Affiche 30
alert(d); // Erreur