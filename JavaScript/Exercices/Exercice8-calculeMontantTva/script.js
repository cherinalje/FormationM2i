
/**
 * Exercice N°8 - Les Variables & Opérateurs Arithmétiques type chaine de caractère
 */


//création de la contante result permettant de recuperer un element du DOM id="result"
const result = document.querySelector('#result')


//Affichage du titre de l'exercice
affichage = "<h5>Le montant H.T etant de 100€ et le taux de T.V.A de 20%</h5>"





//récuperation des saisies utilisateur
montantHT= 100 ;
tauxTVA=0.20 ;

 

montantTVA = montantHT*tauxTVA;


//affichage nom complet + bonjour

affichage += `Le montant de tva est de     : ${montantTVA}     </br>`
montantTTC = montantTVA + montantHT;
affichage += `Le montant ttc est de   :   ${montantTTC} </br>`




result.innerHTML += affichage




