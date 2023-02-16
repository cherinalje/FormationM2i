/**
 * Les Structures Conditionnelles
 */

/*

    L'instruction if (Si...Alors) else (Sinon...)

    if (Condition) {

    }
    else{

    }
*/

// Exemple 1 => Avec plusieurs vérification
var compte = 300;
if (compte > 0)
    console.log("Vous êtes créditeur!");
if (compte < 0)
    console.log("Votre compte est débiteur");


// Exemple 1 => Avec une seule instruction
//var compte = 300;
if (compte > 0)
    console.log("Vous êtes créditeur!");
else
    console.log("Votre compte est débiteur ou nul!");

// Exemple 1 => Avec plusieurs instructions
//var compte = 300;
if (compte > 0) {
    console.log("Votre compte est créditeur!");
    console.log("Vous avez " + compte + " €");
}
else {
    console.log("Votre compte est débiteur!");
    console.log("Vous avez " + compte + " €");
}

// Exemple 1 => Avec un Booleen
//var compte = -200;
var estCrediteur = (compte > 0);
console.log(typeof(estCrediteur));//booleen
if (estCrediteur)
    console.log("Votre compte est créditeur (avec un bool)!");
else
    console.log("Votre compte est débiteur ou nul ( avec un bool)!");

// Exemple avec un Booleen
var estVrai = true;
if (estVrai)
    console.log("C'est vrai!");
else
    console.log("C'est faux!");

// Exemple 2 => Avec une valeur numérique
var age = prompt("Veuillez saisir votre âge :");
console.log(typeof (age));

if (age >= 18)
    console.log(`A ${age} ans, vous êtes majeur!`);
else
    console.log(`A ${age} ans, vous êtes mineur!`);

/*
    Avec Sinon Si (Nouveau test logique)
*/
var compte = 300;
if (compte > 0)
    console.log("Vous êtes créditeur!");
else if (compte == 0)
    console.log("Le solde de votre compte est nul");
else
    console.log("Vous êtes débiteur!");

var compte = 300;
if (compte > 0)
    console.log(`Vous avez ${compte} €, vous êtes créditeur!`);
else if (compte == 0)
    console.log(`Vous avez ${compte} €, solde est nul!`);
else
    console.log(`Vous avez ${compte} €, vous êtes débiteur!`);


/*
    Avec Opérateur logiques &&
*/
var login = "Jeanne";
var motDePasse = "essai";
if (login == "Jeanne" && motDePasse == "essai")
    console.log("Vous êtes connecté, Bienvenue!");
else
    console.log("Erreur! Login et/ou mot de passe incorrect");



/*
    Les opérateurs de comparaison

    == signifie est égal à // Permet de vérifier que deux valeurs sont identique

    === signifie strictement égal à // Compare la valeur et le type de deux valiables

    != signifie est différent de // Permet de vérifier que la valeur de deux variables sont différentes

    !== signifie strictement différent de // Permet de vérifier si le type OU la valeur sont différents
*/

console.log(1 == 1); // vrai
console.log("1" == 1); // vrai
console.log(1 === 1); // vrai
console.log("1" === 1); // faux
console.log("1" != 1); // faux
console.log("3" !== 3); // vrai
console.log(3 !== 3); // faux
console.log(4 !== 3); // vrai


/*
    SwitchCase

    switch (expression) {
        case valeur1:
            // Instructions à exécuter lorsque le résultat
            // de l'expression correspond à valeur1
            instructions1;
            [break;]
        case valeur2:
            // Instructions à exécuter lorsque le résultat
            // de l'expression correspond à valeur2
            instructions 2;
            [break;]
        ...
        case valeurN:
            // Instructions à exécuter lorsque le résultat
            // de l'expression à valeurN
            instructionsN;
            [break;]
        [default:
            // Instructions à exécuter lorsqu'aucune des valeurs
            // ne correspond
            instructions_def;
            [break;]]
}
*/

const civilite = 'Mr.';
switch (civilite) {
    case 'Mr.':
        console.log('Bonjour Monsieur.');
        break;
    case 'Mme':
        console.log('Bonjour Madame');
        break;
    default:
        console.log('Bonjour Mademoiselle');
        break;
}

const expr = 'Papayes';
switch (expr) {
    case 'Oranges':
        console.log('Les Oranges sont à 2.99€/kg.');
        break;
    case 'Mangues':
    case 'Papayes':
        console.log('Les Mangues et les papayes sont à 8.59€/kg.');
        break;
    default:
        console.log(`Désolé, nous sommes à court de ${expr}.`);
        break;
}


