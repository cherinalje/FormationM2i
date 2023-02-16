/**
 * Exercice N°13 - Les structures conditionnelles
 */


//création de la contante result permettant de recuperer un element du DOM id="result"
const result = document.querySelector('#result')


//Affichage du titre de l'exercice
affichage = ""


//récuperation des saisies utilisateur
var ageEnfant = 0;

ageEnfant = Number(prompt("Veuillez entrer un nombre"));




//utilisation de la condition switch
switch (ageEnfant) {
    case ageEnfant >= 3 && ageEnfant <= 6:
        affichage += `Votre enfant est dans la catégorie Baby`
        break;
    case ageEnfant > 6 && ageEnfant <= 8:
        affichage += `Votre enfant est dans la catégorie Poussin`
        break;
    case ageEnfant > 8 && ageEnfant <= 10:
        affichage += `Votre enfant est dans la catégorie Pupille`
        break;
    case ageEnfant > 10 && ageEnfant <= 12:
        affichage += `Votre enfant est dans la catégorie Minime`
        break;
    case ageEnfant > 12:
        affichage += `Votre enfant est dans la catégorie Cadet`
        break;

}



result.innerHTML += affichage