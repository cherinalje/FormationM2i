/**\
 * Les Events en Javascript
 */

// Déclaration d'une fonction déclenchée par l'event click du bouton
function myButtonClick() {
  alert("Vous avez bien cliqué sur le bouton!");
}

// Déclaration d'une fonction déclenchée par des events 
function myfunctionMouseOver() {
  alert("Vous avez survolé le bouton.");
}
function myFunctionDblClick() {
  alert("Vous avez cliqué 2 fois sur le bouton.");
}

// Déclaration d'une fonction avec events args en params (ne pas oublier le onLoad sur body)
function myFunctionAlert(arg) {
  switch (arg) {
    case 0: alert("Page chargée."); break;
    case 1: alert("Vous avez cliqué sur le bouton 1."); break;
    case 2: alert("Vous avez survolé le bouton 2."); break;
    case 3: alert("Vous avez cliqué 2 fois sur le bouton 3."); break;
    case 4: alert("Vous n'avez plus le focus sur le bouton 4."); break;
  }
}

// Création d'un ecouter d'événement sur les touches
document.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    alert("Vous avez appuyé sur enter \nMessage : " + document.querySelector('#myKeydown').value);
  }
});

const touches = [...document.querySelectorAll('.bouton')];
const listeKeycode = touches.map(touche => touche.dataset.key);

// Ecouteur évenement Keydown
document.addEventListener('keydown', (e) => {
  const valeur = e.key.toString();
  if(e.key.toString() ==="Enter")
    alert("Vous avez appuyé sur la touche " + valeur);
})

// Ecouteur évenement click
document.addEventListener('click', (e) => {
  const valeur = e.target.dataset.key;
  alert(valeur);
})