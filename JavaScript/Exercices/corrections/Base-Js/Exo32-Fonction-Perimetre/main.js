/**
 * Exercice32 - LES FONCTIONS() - Perimètre
 */

// Création de la constante result permettant de recupérer l'élément HTML class="result"
const result = document.querySelector('#result');

// Création de la Fonction() permettant de calculer les périmetre à partir de deux parametres
function perimetre(longueur, largeur) {
    // resultat est une variable locale, elle n'existe que dans la fonction perimetre
    let resultat = (longueur + largeur) * 2;
    // La fonction retourne la variable resultat
    return resultat;
    //return (longueur + largeur) * 2;
}

// Récupération et stockage des saisie utilisateur
let long = Number(prompt("Saisir la longueur du rectangle"));
let larg = Number(prompt("Saisir la largeur du rectangle"));

console.log(typeof(long)); // Attention le prompt retourne une chaine même pour les nombres
// Solution : transformer une chaine en nombre -> Number() (Casting)


// Déclaration d'une variable résultat prenant la valeur de retour de la fonction perimetre()
let res = perimetre(long, larg);

// Affichage de la valeur de la variable result dans la console
let affichage = `Le <b>périmètre</b> de votre quadrilatère est <b>${res}cm</b>`;

// Injection du résultat dans l'element HTML .result
result.innerHTML = affichage;