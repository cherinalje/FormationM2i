/**
 * Exercice N°15 - Les Variables & Opérateurs Arithmétiques type chaine de caractère
 */







//création de la contante result permettant de recuperer un element du DOM id="result"
const result = document.querySelector('#result')


//Affichage du titre de l'exercice
affichage = ""





//récuperation des saisies utilisateur
var tailleCm=0;
    poids=0;


tailleCm = Number(prompt("Veuillez entrer votre taille en cm"));
poids = Number(prompt("Veuillez entrer votre poids"));



//utilisation de la condition if

if (tailleCm>= 145 && tailleCm < 172 && poids >=43 && poids <47)
    affichage += `Prennez la taille 1`

    else if
    (tailleCm>= 145 && tailleCm < 169 && poids >=48 && poids <53)
    affichage += `Prennez la taille 1`
    else if
    (tailleCm>= 145 && tailleCm < 166 && poids >=54 && poids <59)
    affichage += `Prennez la taille 1`
    else if
    (tailleCm>= 145 && tailleCm < 163 && poids >=60 && poids <65)
    affichage += `Prennez la taille 1`
    else if
    (tailleCm>= 169 && tailleCm < 183 && poids >=48 && poids <53)
    affichage += `Prennez la taille 2`
    else if
    (tailleCm>= 166 && tailleCm < 178 && poids >=54 && poids <59)
    affichage += `Prennez la taille 2`
    else if
    (tailleCm>= 163 && tailleCm < 175 && poids >=60 && poids <65)
    affichage += `Prennez la taille 2`
    else if
    (tailleCm>= 160 && tailleCm < 172 && poids >=66 && poids <71)
    affichage += `Prennez la taille 2`
    else if
    (tailleCm>= 178  && poids >=54 && poids <59)
    affichage += `Prennez la taille 3`
    else if
    (tailleCm>= 175  && poids >=60 && poids <65)
    affichage += `Prennez la taille 3`
    else if
    (tailleCm>= 172  && poids >=66 && poids <71)
    affichage += `Prennez la taille 3`
    else if
    (tailleCm>= 163  && poids >=72 && poids <77)
    affichage += `Prennez la taille 3`
    else 
    affichage += `il n'y a pas votre taille`



//affichage 










result.innerHTML += affichage