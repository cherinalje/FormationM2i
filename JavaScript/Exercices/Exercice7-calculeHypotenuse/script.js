
/**
 * Exercice N°7 - Les Variables & Opérateurs Arithmétiques type chaine de caractère
 */


//création de la contante result permettant de recuperer un element du DOM id="result"
const result = document.querySelector('#result')


//Affichage du titre de l'exercice
affichage = "<h3><b>Calcule de la longueur de l'hypotenuse </b></h3>"





//récuperation des saisies utilisateur
longueurCote1= 2.6 ;
longueurCote2=3.9 ;

 

longueurHypo = (Math.hypot(longueurCote1,longueurCote2)) * 2 ;


//affichage nom complet + bonjour

affichage += `La longueur des cotés adjascents à l'angle droit etant de    : ${longueurCote1} et de ${longueurCote2}    </br>`

affichage += `La longueur de l'hypotenuse est de   :   ${longueurHypo} </br>`




result.innerHTML += affichage




