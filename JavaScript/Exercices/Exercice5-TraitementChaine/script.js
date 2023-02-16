
/**
 * Exercice N°5 - Les Variables & Opérateurs Arithmétiques type chaine de caractère
 */


//création de la contante result permettant de recuperer un element du DOM id="result"
const result = document.querySelector('#result')




phrase = "",


 
 

//Affichage du titre de l'exercice
affichage = "<h3><b> Traitement de chaine de caractère</b></h3>"


//récuperation des saisies utilisateur
phrase= prompt("Veuillez saisir une phrase: ")
console.log(typeof(phrase));


const words = phrase.split(' ');
console.table(words);




const minuscule = phrase.toLowerCase()
console.log(minuscule.toLowerCase());

const premiereLettre = phrase.strike()
console.log(premiereLettre.strike())



affichage += `Vous avez saisi la phrase  :   ${phrase} </br>`
affichage += `La chaine en miniscule  :   ${minuscule} </br>`
affichage += `La mise en tableau :   ${phrase} </br>`
affichage += `La chaine après traitement :  ${premiereLettre} </br>`







result.innerHTML += affichage



// const str = 'The quick brown fox jumps over the lazy dog.';

// const words = str.split(' ');
// console.log(words[3]);
// // Expected output: "fox"

// const chars = str.split('');
// console.log(chars[8]);
// // Expected output: "k"

// const strCopy = str.split();
// console.log(strCopy)
