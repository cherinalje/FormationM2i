/**
 * Exercice N°16 - Les Variables & Opérateurs Arithmétiques type chaine de caractère
 */







//création de la contante result permettant de recuperer un element du DOM id="result"
const result = document.querySelector('#result')


//Affichage du titre de l'exercice
affichage = ""





//récuperation des saisies utilisateur
var age=0;
anciennete=0;
derniersalaire=0;
indemnite = 0





age = parseInt(prompt("Veuillez entrer votre age"));
anciennete = parseInt(prompt("Veuillez entrer votre ancienneté"));
derniersalaire = parseInt(prompt("Veuillez entrer votre dernier salaire"));



//utilisation de la condition if

if (anciennete>=1 && anciennete<10)
    affichage += `le montant de l'indemnité pour un salire de ${age} et avec une ancienneté de ${anciennete} s'elève à ${(derniersalaire/2)*anciennete}`

else if (anciennete>10 && age <=45 )
affichage += `le montant de l'indemnité pour un salire de ${age} et avec une ancienneté de ${anciennete} s'elève à ${(derniersalaire)*anciennete}`
else if(anciennete>10 && age >45 && age <=49)
affichage += `le montant de l'indemnité pour un salire de ${age} et avec une ancienneté de ${anciennete} s'elève à ${(derniersalaire*2)*anciennete}`
else if(anciennete>10 && age >=50)
affichage += `le montant de l'indemnité pour un salire de ${age} et avec une ancienneté de ${anciennete} s'elève à ${(derniersalaire*5)*anciennete}`
else 
affichage += `Vous n'avez pas droit à une indemnité`
//affichage 










result.innerHTML += affichage