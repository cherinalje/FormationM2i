
/**
 * Exercice N°1 - Les Variables & Opérateurs Arithmétiques type chaine de caractère
 */


//création de la contante result permettant de recuperer un element du DOM id="result"
const result = document.querySelector('#result')

var diametre = 0 , perimetre = 0 , aire = 0 ,     perimetreArrondi = 0 , aireArrondi= 0


//Affichage du titre de l'exercice
affichage = "<h3><b> Utilisation des Fonctions() de l'Objet Math</b></h3>"
affichage += "<h5><b> Utilisation de la constante π</b></h5>"
affichage += `la valeur de π =  ${Math.PI}`
affichage += "<h5><b> Calcule du périmètre (d x π) et de l'aire (π * r²)d'un cercle </b></h5>"

//récuperation des saisies utilisateur
diametre= Number(prompt("Entrez le premier nombre: "))
console.log(typeof(diametre));
 

//Addition de deux variables de type chaine (concaténation) 
perimetre = diametre * Math.PI;
console.log(typeof(perimetre));

aire =  Math.PI * perimetre * perimetre;
console.log(typeof(aire));

//affichage nom complet + bonjour
affichage += `Le Diamètre =  ${diametre} </br>`
affichage += `Le Périmètre  = ${diametre} * ${Math.PI} = ${perimetre}</br>`
affichage += `L'aire = ${Math.PI} * ${perimetre} * ${perimetre} = ${aire}</br>`

result.innerHTML += affichage