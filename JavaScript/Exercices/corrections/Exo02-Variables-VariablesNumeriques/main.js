/**
 * EXERCICE02 - Les Variables et Opérateurs Arithmetiques - Les variables numériques
 */

// Création de la constante result permettant de recupérer l'élément HTML class="result"
const result = document.querySelector('#result');

// Declaration des variables
var nb1 = 0,
    nb2 = 0,
    resultat = 0,
    affichageHTML = "";
    affichageTxt = "";

    affichageHTML = "<h3>Addition de deux variables numériques</h3>";
    affichageTxt = "Addition de deux variables numériques\n";

// Récupération et stockage des saisies utilisateur
//nb1 = Number(prompt("Saisir le premier nombre :"));
// nb1 = parseInt(prompt("Saisir le premier nombre :"));
nb1 = parseFloat(prompt("Saisir le premier nombre :"));
affichageHTML += `Vous avez saisi <b>${nb1}</b> <br>`
affichageTxt += `Vous avez saisi ${nb1}\n`
nb2 = Number(prompt("Saisir le deuxième nombre :"));
affichageHTML += `Vous avez saisi <b>${nb2}</b> <br>`
affichageTxt += `Vous avez saisi ${nb2}\n`

// Addition des deux nombres
resultat = nb1 + nb2;

// Redaction de l'affichage
affichageHTML += `La somme de <b>${nb1}</b> + <b>${nb2}</b> = <b>${resultat}</b><hr>`;
affichageTxt += `La somme de ${nb1} + ${nb2} = ${resultat}\n`;



// Affichage du résultat en alert()
alert(affichageTxt);
// Injection du résultat dans l'element HTML .result
result.innerHTML = `${affichageHTML}`;