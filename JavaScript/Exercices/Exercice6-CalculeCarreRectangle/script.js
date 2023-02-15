
/**
 * Exercice N°6 - Les Variables & Opérateurs Arithmétiques type chaine de caractère
 */


//création de la contante result permettant de recuperer un element du DOM id="result"
const result = document.querySelector('#result')




//Affichage du titre de l'exercice
affichage = "<h3><b> Calcule de l'Aire et du Périmètre d'un Carré</b></h3>"





//récuperation des saisies utilisateur
cote= 5 ;

 

perimetreCarre = (cote + cote) * 2 ;
console.log(typeof(perimetreCarre));

aireCarre =  cote * cote;
console.log(typeof(aireCarre));

affichage += `<ul><li>Le périmetre du carré  =  ${perimetreCarre} </br></li>
<li>L'aire du carré  = ${aireCarre}</br></li><hr>`


affichage += "<h3><b> Calcule de l'Aire et du Périmètre d'un Rectangle</b></h3>"

longueur=7;
largeur=5;
perimetreRectangle = (longueur + largeur) * 2 ;
console.log(typeof(perimetreRectangle));

aireRectangle =  longueur * largeur;
console.log(typeof(aireRectangle));

//affichage nom complet + bonjour

affichage += `<ul><li>Le périmetre du rectangle  =  ${perimetreRectangle} </br></li>
<li>L'aire du rectangle  = ${aireRectangle}</br></li>`


result.innerHTML += affichage












