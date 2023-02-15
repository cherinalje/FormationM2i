
/**
 * Exercice N°1 - Les Variables & Opérateurs Arithmétiques type chaine de caractère
 */


//création de la contante result permettant de recuperer un element du DOM id="result"
const result = document.querySelector('#result')

var nb1 = 0 , nb2 = 0 , affichage = "" , addition = 0


//Affichage du titre de l'exercice
affichage = "<h3>Addition de deux variables numériques (concaténation)</h3>"

//récuperation des saisies utilisateur
nb1= Number(prompt("Entrez le premier nombre: "))
console.log(typeof(nb1));



affichage += `Vous avez saisi : <br>${nb1}</br><br>`

nb2 = Number( prompt("Entrez le premier nombre: "))
console.log(typeof(nb2));


affichage += `vous avez saisi : <br>${nb2}</br><br>` 

//Addition de deux variables de type chaine (concaténation)
addition = nb1 + nb2;
console.log(typeof(addition));

//affichage nom complet + bonjour
affichage += `La somme de <br><b>${nb1} + ${nb2} = ${addition}<b></br><br>`

result.innerHTML += affichage