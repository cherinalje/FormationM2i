/**
 * Exercice N°1 - Les Variables & Opérateurs Arithmétiques type chaine de caractère
 */


//création de la contante result permettant de recuperer un element du DOM id="result"
const result = document.querySelector('#result')

var prenom = "", nom = "", affichage = "",nomComplet = ""


//Affichage du titre de l'exercice
affichage = "<h3>Addition de deux variables de type chaine (concaténation)</h3>"

//récuperation des saisies utilisateur
prenom = prompt("veuillez saisir votre prénom :")
affichage += `Vous avez saisi : <br>${prenom}</br><br>`
nom = prompt("veuillez saisir votre nom: ")
affichage += `vous avez saisi : <br>${nom}</br><br>` 

//Addition de deux variables de type chaine (concaténation)
nomComplet = prenom + " " + nom;
//affichage nom complet + bonjour
affichage += `Bonjour <br>${nomComplet}</br><br>`

result.innerHTML += affichage
