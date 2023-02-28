const turnDisplay = document.querySelector('#turn');
const grid = document.querySelector('#grid');
const squares = document.querySelectorAll('#grid div');
const winStates = [
    document.querySelectorAll('.col-1'),
    document.querySelectorAll('.col-2'),
    document.querySelectorAll('.col-3'),
    document.querySelectorAll('.row-1'),
    document.querySelectorAll('.row-2'),
    document.querySelectorAll('.row-3'),
    document.querySelectorAll('.diag-1'),
    document.querySelectorAll('.diag-2'),
];

let player = 1;
turnDisplay.innerText = "C'est au joueur 1 de jouer.";

hasWon = (char) => {
    for (let state of winStates) {
        if ([...state].every(square => square.innerText === char)) {
            state.forEach(
                square => square.className += (char === 'X' ? ' win' : ' lose'),
            );
            return true;
        }
    }
    return false;
};

noSolution = () => {
    let result = true;
    for (let square of squares) {
        if (square.innerText === '') {
            result = false;
            break;
        }
    }
    return result;
}

eventListenerClick = (e) => {
    let userSign = player === 1 ? 'X' : 'O';
    if (e.target.innerText === '') {

        e.target.innerText = userSign;
        e.target.className += ` ${userSign.toLocaleLowerCase()}`;

        if (hasWon(userSign)) {
            grid.removeEventListener('click', eventListenerClick);            
            turnDisplay.innerText = ``;
            document.getElementById(player == 1 ? "win" : "lose").innerHTML = `<h2>Bravo ! le joueur ${player} gagné !</h2>`;
            return;
        }
        else if (noSolution()) {
            grid.removeEventListener('click', eventListenerClick);            
            turnDisplay.innerText = ``;
            document.getElementById("resultat").innerHTML = `<h2>Match nul !</h2>`;
            return;
        }

    }

    player = player === 1 ? 2 : 1;
    turnDisplay.innerText = `C'est au joueur ${player} de jouer.`;
};

grid.addEventListener('click', eventListenerClick);

