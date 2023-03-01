/**
 * Import
 */
import Pendu from './js/Pendu.js';



/**
 * Constantes & Variables
 */
const imageView = document.querySelector('#image');
const masqueView = document.querySelector('#masque');
const infosJeuView = document.querySelector('#infosJeu');
const userInput = document.querySelector('#userInput');
const dejaProposeeView = document.querySelector('#dejaProposee');
const validerBtn = document.querySelector('#validerBtn');
const rejouerBtn = document.querySelector('#rejouerBtn');

let jeu;

function init() {
    jeu = new Pendu();
    infosJeuView.textContent = "Veuillez proposer une lettre";
    infosJeuView.setAttribute("class", "play");
    displayMasque();
    displayDejaPropose();
    changeImg();
    validerBtn.disabled = false;
}

function displayMasque() {
    masqueView.textContent = jeu.masque;
}

function displayDejaPropose() {
    // jeu.dejaProposee.push("A");
    // jeu.dejaProposee.push("B");
    // jeu.dejaProposee.push("C");
    dejaProposeeView.textContent = jeu.dejaProposee.join(' ,');
}

function valider() {
    let userTmp = userInput.value.toUpperCase();
    //console.log(userTmp);
    if (userTmp.length == 1 && !jeu.dejaProposee.includes(userTmp) && !jeu.masque.includes(userTmp)) {
        if (jeu.testChar(userTmp)) {
            infosJeuView.textContent = "Bravo, vous avez trouvé une lettre.";
            infosJeuView.setAttribute("class", "win");
            displayMasque();

            if (jeu.win)
                youWin();
        } else {
            infosJeuView.textContent = "Dommage, cette lettre n'est pas dans le mot mystère.";
            infosJeuView.setAttribute("class", "loose");
            displayDejaPropose();
            changeImg();
            if (jeu.nbEssais === 0)
                youLoose();
        }
    }
    else
        alert("Veuillez saisir une lettre !");
    userInput.value = "";
}

function youWin() {
    infosJeuView.textContent = "Bravo !!! Vous avez Gagné";
    infosJeuView.setAttribute("class", "win");
    validerBtn.disabled = true;
}

function youLoose() {
    infosJeuView.textContent = `Dommage, Vous avez Perdu! Le mot mystère était ${jeu.motATrouver}`;
    infosJeuView.setAttribute("class", "loose");
    validerBtn.disabled = true;
}



function changeImg() {
    imageView.setAttribute("src", `./img/blanc/pendu-${jeu.nbEssais}.jpg`);
}

validerBtn.onclick = () => {
    valider();
}

rejouerBtn.onclick = () => {
    init();
}

window.onload = init();
