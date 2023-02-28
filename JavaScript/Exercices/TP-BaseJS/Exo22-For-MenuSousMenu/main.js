/**
 * Exercice22 - For - Menu et sous menu
 */

// &nbsp = un car espace

// Déclaration variables
var affichage = '<h2>Menu et sous menu</h2>'

// Création de la constante result permettant de recupérer l'élément HTML class="result"
const result = document.querySelector('#result')

for (let i = 1; i <= 3; i++) {
  affichage += `<div class="tab-1">Chapitre <b>${i}</b></div>`
  for (let j = 1; j <= 3; j++) {
    affichage += `<div class="tab-5">-Partie <b>${i}.${j}</b></div>`
  }  
}

// Injection du résultat dans l'element HTML .result
result.innerHTML = affichage
