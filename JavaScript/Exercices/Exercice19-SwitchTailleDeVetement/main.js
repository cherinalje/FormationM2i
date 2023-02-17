/**
 * Exercice19 -switch taille de vetement -
 */

// Création de la constante result permettant de recupérer l'élément HTML class="result"
const result = document.querySelector('#result');




var resultat = "";
// Récupération et stockage des saisie utilisateur
var taille = Number(prompt("Veuillez saisir votre taille (en cm) :"));
var poids = Number(prompt("Veuillez saisir votre poids (en kg) :"));

switch (true) {
    case (taille >= 145 && taille < 172 && poids >= 43 && poids <= 47 ||
        taille >= 145 && taille < 169 && poids >= 48 && poids <= 53 ||
        taille >= 145 && taille < 166 && poids >= 54 && poids <= 59 ||
        taille >= 145 && taille < 163 && poids >= 60 && poids <= 65):
        resultat = "Prennez la taille 1.";
        break;

    case taille >= 169 && taille < 183 && poids >= 48 && poids <= 53 ||
    taille >= 166 && taille < 178 && poids >= 54 && poids <= 59 ||
    taille >= 163 && taille < 175 && poids >= 60 && poids <= 65 ||
    taille >= 160 && taille < 172 && poids >= 66 && poids <= 71:
        resultat = "Prennez la taille 2.";
        break;

    case taille >= 178 && taille <= 183 && poids >= 54 && poids <= 59 ||
    taille >= 175 && taille <= 183 && poids >= 60 && poids <= 65 ||
    taille >= 172 && taille <= 183 && poids >= 66 && poids <= 71 ||
    taille >= 163 && taille <= 183 && poids >= 72 && poids <= 77:
        resultat = "Prennez la taille 3.";
        break;
    case taille > 172 && poids >= 43 && poids <= 47 ||
    taille > 183 && poids >= 48 && poids <= 53 ||
    taille < 160 && poids > 65 && poids < 72 && taille < 163 && poids > 71:
        resultat = "Aucune taille ne vous correspond.";
        break;
}

alert(resultat);
// Injection du résultat dans l'element HTML .result
result.innerHTML = `Pour <b>${taille}cm</b> et <b>${poids}kg</b> : <br>
                    <ul>
                        <li>${resultat}</li>
                    </ul>
                    `;

// // Etablissement Structure If() 
// if (taille >= 145 && taille < 172 && poids >= 43 && poids <= 47 || 
//     taille >= 145 && taille < 169 && poids >= 48 && poids <= 53 || 
//     taille >= 145 && taille < 166 && poids >= 54 && poids <= 59 || 
//     taille >= 145 && taille < 163 && poids >= 60 && poids <= 65) 
//     {
//     resultat = "Prennez la taille 1.";
// }
// else if (taille >= 169 && taille < 183 && poids >= 48 && poids <= 53 ||
//     taille >= 166 && taille < 178 && poids >= 54 && poids <= 59 ||
//     taille >= 163 && taille < 175 && poids >= 60 && poids <= 65 ||
//     taille >= 160 && taille < 172 && poids >= 66 && poids <= 71) {
//     resultat = "Prennez la taille 2.";
// }
// else if (taille >= 178 && taille <= 183 && poids >= 54 && poids <= 59 ||
//     taille >= 175 && taille <= 183 && poids >= 60 && poids <= 65 ||
//     taille >= 172 && taille <= 183 && poids >= 66 && poids <= 71 ||
//     taille >= 163 && taille <= 183 && poids >= 72 && poids <= 77) {
//     resultat = "Prennez la taille 3.";
// }
// else {
//     resultat = "Aucune taille ne vous correspond.";
// }

// Affichae du résultat dans une popup alert()
//