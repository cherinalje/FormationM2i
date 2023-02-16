/**
 * Exercice N°12 - Les Variables & Opérateurs Arithmétiques type chaine de caractère
 */







//création de la contante result permettant de recuperer un element du DOM id="result"
const result = document.querySelector('#result')


//Affichage du titre de l'exercice
affichage = ""





//récuperation des saisies utilisateur
var nb1=0;
    nb2=0;


    
    nb3= nb1/nb2;




nb1 = Number(prompt("Veuillez entrer un nombre"));
nb2 = Number(prompt("Veuillez entrer un autre nombre"));

if (nb3 === parseInt(nb3))
affichage += `le nombre ${nb1} est divisible par ${nb2}`
else 
affichage += `le nombre ${nb1} n'est pas divisible par ${nb2}`


//utilisation de la condition if



//affichage 










result.innerHTML += affichage