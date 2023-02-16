/**
 * Exercice N°11 - Les Variables & Opérateurs Arithmétiques type chaine de caractère
 */







//création de la contante result permettant de recuperer un element du DOM id="result"
const result = document.querySelector('#result')


//Affichage du titre de l'exercice
affichage = ""





//récuperation des saisies utilisateur
var 
voyelles = ["a","e","i","o","u","y"];
consonne = "" ;
lettre = "" ;




lettre = prompt("Veuillez entrer une lettre");


//utilisation de la condition if

if (lettre == voyelles[""] && lettre != consonne)
    affichage += `la lettre ${voyelles} est une voyelle`

else
    affichage += `la lettre ${consonne} est une consonne`

//affichage 










result.innerHTML += affichage