/**
 * Exercice22 - For - Menu et sous menu
 */
// Déclaration variables


// Création de la constante result permettant de recupérer l'élément HTML class="result"
const result = document.querySelector('#result');

affichage = `<b>Menu et sous Menu</b></br>`

// Récupération et stockage des saisie utilisateur


for (i=1 ; i<=3 ; i++)
   {
    
    affichage += `chapitre ${i} `

    for (k=1 ; k<=3 ; k++){
        affichage += ` <ul><li> Partie ${k} </li></ul>`   
        
    }
    console.log(i)
    
    
   }
   







// Injection du résultat dans l'element HTML #result
result.innerHTML += affichage;