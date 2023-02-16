/**
 * EXERCICE09 - Les Variables et Opérateurs Arithmetiques - Calcul taux intérêts
 */

// Création de la constante result permettant de recupérer l'élément HTML class="result"
const result = document.querySelector('#result');

// Declaration des variables
var capitalInitial = 0,
    tauxInterets = 0,
    duree = 0,
    capitalFinal = 0,
    interets = 0,
    resultat = "";

// Récupération et stockage des saisie utilisateur
// capitalInitial = Number(prompt("Saisir votre capital initial :"));
// tauxInterets = Number(prompt("Saisir le taux d'intérêts :"));
// duree = Number(prompt("Saisir la durée de l'épargne :"));
capitalInitial = parseInt(prompt("Saisir votre capital initial :"));
tauxInterets = parseFloat(prompt("Saisir le taux d'intérêts :"));
duree = parseInt(prompt("Saisir la durée de l'épargne :"));
console.log(typeof (capitalInitial));
console.log(typeof (tauxInterets));
console.log(typeof (duree));


// Calcul des intérêts
capitalFinal = Math.round(capitalInitial * Math.pow(1 + (tauxInterets / 100), duree));
interets = Math.round(capitalFinal - capitalInitial);

// Redaction de l'affichage
resultat = `Avec un capital initial de <b>${capitalInitial}€</b>, placé à <b>${tauxInterets}%</b> pendant <b>${duree} année(s)</b>,
<ul>
            <li>Le montant total des intérêts s'élévera à <b>${interets}€</b></li>
            <li>Le capital final à l'issue sera de <b>${capitalFinal}€</b></li>
</ul>`;

// Affichage du résultat en alert()
//alert(resultat);            
// Injection du résultat dans l'element HTML .result
result.innerHTML = `${resultat}`;