/**
 * Exercice N°9 - Les Variables & Opérateurs Arithmétiques type chaine de caractère
 */







//création de la contante result permettant de recuperer un element du DOM id="result"
const result = document.querySelector('#result')


//Affichage du titre de l'exercice
affichage = "<h5><b>TEST DE CONNEXION</B></h5>"





//récuperation des saisies utilisateur
var email = "contact@teams.fr";
motdp = "leLundiAuSoleil";



email = prompt("Veuillez entrer votre email");
motdp = prompt("Veuillez entrer votre mot de passe");

//utilisation de la condition if

if (email == "contact@teams.fr" && motdp == "leLundiAuSoleil")
    affichage += ("vous êtes connecté")

else
    affichage += ("Votre identifiant ou votre mot de passe est érroné")

//affichage 










result.innerHTML += affichage