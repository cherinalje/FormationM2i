/**
 * Exercice21 - FOR - compter jusqu'à 10
 */
// Déclaration variables

// Création de la constante result permettant de recupérer l'élément HTML class="result"
const result = document.querySelector('#result');

// Récupération et stockage des saisie utilisateur
affichage = `<b>Compter jusqu'à 10</b></br>`


for ( i = 1; i < 10; i++) {
    console.log(`${i}`);
}
console.log(i);

 affichage+=`<ul><li> ${i} </li></ul>`
affichage+= `Super je sais compter jusquà 10`


// Injection du résultat dans l'element HTML #result
result.innerHTML += affichage;