/**
 * Exercice N°12 - Les Variables & Opérateurs Arithmétiques type chaine de caractère
 */







//création de la contante result permettant de recuperer un element du DOM id="result"
const result = document.querySelector('#result')


//Affichage du titre de l'exercice
affichage = ""





//récuperation des saisies utilisateur
var ab=0;
    bc=0;
    ac=0;

abc=0;



ab = Number(prompt("Veuillez entrer la longueur du segment ab"));
bc = Number(prompt("Veuillez entrer la longueur du segment bc"));
ac = Number(prompt("Veuillez entrer la longueur du segment ca"));



//utilisation de la condition switch
switch (abc) {
    case ab == ac && ab==bc :
        affichage += `le triangle est equilateral`
        break;
    case ab == ac && ab!=bc:
        affichage += `le triangle est isocèle en `
        break;
    case bc == ab && bc != ac:
        affichage += `le triangle est isocèle en`
        break;
    case ac == bc && ac != ab:
        affichage += `le triangle est isocèle en`
        break;
    case ab != bc && ab != ac && bc != ac:
        affichage += `le triangle n'est isocèle ni en A ni en B ni en C`
        break;

}


//affichage 










result.innerHTML += affichage