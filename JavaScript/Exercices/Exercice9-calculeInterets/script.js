
/**
 * Exercice N°9 - Les Variables & Opérateurs Arithmétiques type chaine de caractère
 */







//création de la contante result permettant de recuperer un element du DOM id="result"
const result = document.querySelector('#result')


//Affichage du titre de l'exercice
affichage = "<h5>Avec un capital initial  de 10000€, placé à 4% pendant 5 ans</h5>"





//récuperation des saisies utilisateur
capitalIni= 10000 ;
tauxInteret=0.04 ;
duree=5

 

montantTotal = capitalIni*tauxInteret;


//affichage nom complet + bonjour

affichage += `Le montant total des intérêt s'elevera à  : ${montantTotal}     </br>`
capitalFinal = montantTotal * duree;
affichage += `Le capital final à l'issue sera de  :   ${capitalFinal} </br>`







result.innerHTML += affichage




