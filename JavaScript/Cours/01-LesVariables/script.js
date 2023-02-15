// commentaire en ligne
/**
 * commentaire multiligne
 * 
 * 
 * 
 */
// declaration d'une variable (ESS)
var prenom;


// affectation de valeur à la variable
prenom= "anthony"
//prenom= [A,n,t,h,o,n,y]

prenom[0]=prenom[0].toUpperCase();

//absence de type? non =>(chaine de caractere)
console.log(typeof(prenom) +":"+prenom);
console.log("Ala premeire lettre de ma variable il y a :"+ prenom[3]);


// declaration et affectation de valeur à la volée
// var maVar=5;



// console.log(typeof(maVar) +":"+ maVar.toString());
// console.log(maVar);

// reaffectation de valeur
maVar = 0.5

console.log(typeof(maVar) +":"+ maVar); // si on ne met pas tostring ça fonctionne quand meme
console.log(maVar);


//type grand nombre (bigInt)
var grandNombre = 900254587544552145n;


console.log(typeof(grandNombre));
console.log(grandNombre);



//declaration et affectation de valeur à la volée
var maVare=true;

console.log(typeof(maVare) +":"+ maVare.toString());
console.log(maVare);



// affectation de valeur à la variable
prenom= "Anthony"



//absence de type? non =>(chaine de caractere)
console.log(typeof(prenom) +":"+prenom);
console.log(prenom);