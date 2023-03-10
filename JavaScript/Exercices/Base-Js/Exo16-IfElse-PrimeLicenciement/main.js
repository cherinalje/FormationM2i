/**
 * Exercice16 - IfElse - Prime de licenciement
 */
// Déclaration variable
var indemnite = 0;

// Création de la constante result permettant de recupérer l'élément HTML class="result"
const result = document.querySelector('#result');

// Récupération et stockage des saisie utilisateur
var salaire = Number(prompt("Veuillez saisir le dernier salaire :"));
var anciennete = Number(prompt("Veuillez saisir l'ancienneté' :"));
var age = Number(prompt("Veuillez saisir l'age du salarié' :"));

// Etablissement Structure If() pour calculer le montant de la prime
if (anciennete >= 1 && anciennete <= 10) {
    indemnite += anciennete * salaire / 2;
}
else if (anciennete > 10) {
    indemnite += 10 * salaire / 2;
    indemnite += (anciennete - 10) * salaire;
}

if (anciennete >= 1 && age > 45) {
    indemnite += (age < 50) ? 2 * salaire : 5 * salaire;
}


// Injection du résultat dans l'element HTML .result
result.innerHTML = `Le montant de l'indemnité pour un salarié de <b>${age} ans</b> et
                    avec <b>${anciennete}</b> années d'ancienneté s'élève à <b>${indemnite}€</b>`;