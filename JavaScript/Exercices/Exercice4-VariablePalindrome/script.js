
/**
 * Exercice N°1 - Les Variables & Opérateurs Arithmétiques type chaine de caractère
 */


//création de la contante result permettant de recuperer un element du DOM id="result"
const result = document.querySelector('#result')




mot = "",


 
 

//Affichage du titre de l'exercice
affichage = "<h3><b> Traitement de chaine de caractère</b></h3>"


//récuperation des saisies utilisateur
mot= prompt("Veuillez saisir une chaine: ")
console.log(typeof(mot));


const chars = mot.split('');
console.table(chars);

const motInverse = chars.reverse();
console.log('reverse:', motInverse);


console.log(motInverse.join(""));


affichage += `Vous avez saisi le mot :   ${mot} </br>`
affichage += `Le mot inversé est :  ${motInverse} </br>`




//Addition de deux variables de type chaine (concaténation) 







result.innerHTML += affichage




