// Import de la classe Vehicule
import Vehicule from './modules/Vehicule.js';

const btnPayer = document.querySelector('#paymentBtn');
const btnEntrer = document.querySelector('#enterBtn');
const btnSortir = document.querySelector('#sortirBtn');
const licencePlate = document.getElementById('licencePlate');
const messageBox = document.getElementById('messageBox');
const alertBox = document.getElementById('alertBox');
const successBox = document.getElementById('successBox');
const vehicules = new Array();

btnEntrer.onclick = () => {
    const vehicule = FindCar();
    console.log(vehicule);

    if (!vehicule) {

        if (licencePlate.value != '') {
            console.log("licencePlate : " + licencePlate.value);
            AddCarToPark();
        } else {
            DisplayBox(alertBox, `Veuillez saisir votre immatriculation!`, 5000);
        }
    }
    else {
        if (vehicule.out)
            AddCarToPark();
        else
            DisplayBox(alertBox, `Le véhicule ${licencePlate.value} est déjà dans le parking!`, 5000);
    }
}

btnPayer.onclick = () => {

    let duree, prix;

    const vehicule = FindCar();
    // console.log("Véhicule : " + vehicule);
    if (vehicule != undefined) {

        if (vehicule.endDate == '') {
            // On stocke l'heure de sortie du véhicule
            vehicule.endDate = new Date();

            // Calculer et afficher le prix à payer
            duree = getDiffDate(vehicule.startDate, vehicule.endDate);

            switch (true) {
                case duree <= 15:
                    prix = 0.8;
                    break;
                case duree <= 30:
                    prix = 1.30;
                    break;
                case duree <= 45:
                    prix = 1.7;
                    break;
                default:
                    prix = 6;
            }
            DisplayBox(messageBox, `Le prix à payer pour le véhicule ${licencePlate.value} est de ${prix} €`, 5000);
        } else {
            DisplayBox(alertBox, `Vous avez déja payé pour le véhicule ${licencePlate.value}`, 5000);
        }
    } else {
        DisplayBox(alertBox, `Le véhicule ${licencePlate.value} n'éxiste pas!`, 5000);
    }
}

btnSortir.onclick = () => {
    const vehicule = FindCar();
    // console.log(vehicule);
    if (vehicule != undefined) {
        if (vehicule.out) {
            DisplayBox(alertBox, `Le véhicule ${licencePlate.value} est déja sorti`, 5000);
        }
        else if (vehicule.endDate) {
            vehicule.out = true;
            DisplayBox(successBox, `La barrière est ouverte... A bientôt !`, 5000);
        }
        else {
            DisplayBox(alertBox, `Le véhicule ${licencePlate.value} n'a pas réglé son stationnement! Veuillez passer en caisse avant de sortir`, 5000);
        }
    } else {
        DisplayBox(alertBox, `Le véhicule ${licencePlate.value} n'éxiste pas!`, 5000);
    }
}

function FindCar() {
    return vehicules.find(vehicule => {
        return vehicule.id == licencePlate.value;
    });
}

function AddCarToPark() {
    // Création d'un nouveau Vehicule et ajout dans le tableau de vehicules
    vehicules.push(new Vehicule(licencePlate.value));
    console.table(vehicules);
    DisplayBox(successBox, `Veuillez prendre votre ticket pour le véhicule ${licencePlate.value}.`, 5000);
}

function DisplayBox(domElement, message, delay = 3000) {
    domElement.style.display = "block";
    domElement.textContent = message;
    setTimeout(() => {
        domElement.style.display = "none";
    }, delay);
    licencePlate.value = "";
}


function getDiffDate(date1, date2) {
    let diff = (date2 - date1) / 60000; // pour obtenir des minutes à partir de la valeur en ms
    return diff;
}

function init() {
    alertBox.style.display = "none";
    messageBox.style.display = "none";
    successBox.style.display = "none";
    // Cas de tests pour valider les tarifs
    vehicules.push(new Vehicule("AA-123-AA", new Date("2023-02-24T12:14:00")));
    vehicules.push(new Vehicule("BB-123-BB", new Date("2023-02-24T10:54:00")));
    vehicules.push(new Vehicule("CC-123-CC", new Date("2023-02-24T13:35:00")));
    console.table(vehicules);
}

window.onload = init();