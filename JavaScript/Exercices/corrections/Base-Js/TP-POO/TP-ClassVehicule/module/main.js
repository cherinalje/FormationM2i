/**
 * Travaux Pratiques - POO - ParkingJs HTML
 */

// Import de la class véhicule
import Vehicule from './js/Vehicule.js';

// Déclaration des constantes et récupération des Objets D.O.M
const sortirBtn = document.querySelector('#sortirBtn');
const obtenirBtn = document.querySelector('#obtenirBtn');
const payerBtn = document.querySelector('#payerBtn');
const successBox = document.querySelector('#successBox');
const alertBox = document.querySelector('#alertBox');
const messageBox = document.querySelector('#messageBox');
const licencePlate = document.querySelector('#licencePlate');
const vehicules = new Array();

obtenirBtn.onclick = () => {
    let car = findCar();
    console.log(car);

    if (licencePlate.value !== "") {
        if (!car)
            AddCarToPark();
        else {
            if (!car.exitCar())
                DisplayBox(messageBox, `Le véhicule ${licencePlate.value} est déjà dans le parking`, 3000);
            else
                AddCarToPark();
        }

    } else {
        DisplayBox(messageBox, `Veuillez saisir l'immatriculation du véhicule avant de valider!`, 3000);
    }
}
payerBtn.onclick = () => {
    let duree = 0, prix = 0;
    // Recherche du véhicule
    const vehicule = findCar();
    // si le véhicule est trouvé
    if (vehicule != undefined) {
        // Je verifie qu'il a bien une date de sortie vide
        if (vehicule.endDate === '') {
            // affectation de la date et heure du moment en endDate
            let endDate = new Date();
            // Calcul du temp passé grace à la méthode getDuration()
            duree = vehicule.getDuration(endDate);
            console.log(duree);
            switch (true) {
                case duree <= 15:
                    prix = 0.8;
                    break;
                case duree <= 30:
                    prix = 1.3;
                    break;
                case duree <= 45:
                    prix = 1.70;
                    break;
                case duree <= 60:
                    prix = 2.10;
                    break;
                case duree <= 120:
                    prix = 4.10;
                    break;
                case duree <= 240:
                    prix = 8;
                    break;
                case duree <= 720:
                    prix = 20;
                    break;
                case duree <= 1440:
                    prix = 35;
                    break;
                case duree > 1440:
                    prix = 60;
                    break;
            }
            DisplayBox(messageBox, `Le prix à payer pour le vehicule ${licencePlate.value} est de ${prix}€.`);
        } else {
            DisplayBox(alertBox, `Vous avez déjà payé le parking pour le véhicule ${licencePlate.value}.`);
        }
    } else {
        DisplayBox(alertBox, `le véhicule ${licencePlate.value} n'éxiste pas!`);
    }
}

sortirBtn.onclick = () => {
    // Recherche du véhicule
    const vehicule = findCar();

    if (vehicule != undefined) {
        if (vehicule.out)
            DisplayBox(alertBox, `Le véhicule est déjà sorti !`);
        else if (vehicule.endDate) {
            vehicule.exitCar();
            DisplayBox(successBox, `La barrière est ouverte, vous pouvez sortir.`, 3000);
        } else
            DisplayBox(alertBox, `Le véhicule ${licencePlate.value} n'a pas réglé son stationnement! Veuillez passer en caisse avant de sortir!`);
    } else
        DisplayBox(alertBox, `Le véhicule ${licencePlate.value} n'éxiste pas!`);
}

function findCar() {
    return vehicules.find(car => {
        return car.id === licencePlate.value;
    })
}

function AddCarToPark() {
    // Création d'un nouveau véhicule
    let tmp = new Vehicule(licencePlate.value);
    // Ajout à la liste des véhicule du parking
    vehicules.push(tmp);
    console.table(vehicules);
    DisplayBox(successBox, `Veuillez prendre votre ticket pour le véhicule ${licencePlate.value}`);
}

//DisplayBox(successBox,"C'est cool!",5000)
function DisplayBox(domElement, message, delay = 3000) {
    domElement.style.display = "block";
    domElement.textContent = message;
    // On attend la durée avant d'executer une fois la fonction flechée
    setTimeout(() => {
        domElement.style.display = "none";
    }, delay);
    licencePlate.value = "";
    // // Commence tout de suite pendant la durée
    // setTimeout(function(){
    //     domElement.style.display = "none";
    // },delay);

}


function init() {
    // Mettre attribut display a none pour les popup message
    successBox.style.display = "none";
    alertBox.style.display = "none";
    messageBox.style.display = "none";
    // Création et inection de véhicules dans la collection Vehicules
    vehicules.push(new Vehicule("AA-123-AA", new Date("2023-02-24T12:54:00")));
    vehicules.push(new Vehicule("BB-123-BB", new Date("2023-02-23T11:54:00")));
    vehicules.push(new Vehicule("CC-123-CC", new Date("2023-02-24T14:55:00")));
    console.table(vehicules);
}

window.onload = init();






