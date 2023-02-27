/**
 * TP - FONCTIONS() - NbMystère
 */

// Création de la constante result permettant de recupérer l'élément HTML class="result"
const ligne1 = document.querySelector('#ligne1');
const ligne2 = document.querySelector('#ligne2');
const nbCoupsDisplay = document.querySelector('#nbCoups');
const nbUser = document.querySelector('#nbUser');
const validerBtn = document.querySelector('#validerBtn');

// Déclaration variables
let nbMystere = 0,
    nbCoups = 0,
    gagne = false;

function valider() {
    if (nbUser.value != "") {
        // récupérer la value utilisateur
        let tmp = Number(nbUser.value);

        // incrémenter nbCoups
        updateNbCoups();

        // Test du NbUser (comparer)
        if (tmp === nbMystere)
            YouWin();
        else if (tmp < nbMystere)
            ligne1.textContent = `Le nombre mystère est plus grand que ${tmp}`;
        else
            ligne1.textContent = `Le nombre mystère est plus petit que ${tmp}`;

        // Vider le champ de saisie utilisateur
        nbUser.value = "";
    } else {
        alert("Veuillez saisir un chiffre/nombre!")
    }
}

function rejouer() {
    init();
}

function YouWin() {
    gagne = true;
    validerBtn.disabled = true;
    ligne1.textContent = `Bravo !!! Vous avez trouvé en ${nbCoups} coups!`;
    ligne2.textContent = `Le nombre mystère était ${nbMystere}!`;

}

function updateNbCoups() {
    nbCoups++;
    nbCoupsDisplay.textContent = nbCoups;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}


function init() {
    gagne = false;
    nbCoups = 0;
    nbMystere = getRandomIntInclusive(1, 50);
    console.log(nbMystere);
    ligne1.textContent = "J'ai généré un nombre entre 1 et 50 inclus";
    ligne2.textContent = "Essayez de le deviner en proposant ci-dessous";
    nbCoupsDisplay.textContent = nbCoups;
    validerBtn.disabled = false;
};

// Event Keyup sur champ userInput
nbUser.addEventListener("keyup", function(e){
    if(e.key ==="Enter" && !gagne){
        valider();
    }
})

// Au chargement de la page, la fonction Init() est exécutée
window.onload = init();

