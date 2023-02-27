export default class Voiture {

    constructor(modele = "Clio", couleur = "Blanche", reservoir = 45, consommation = 5.5) {
        this.Modele = modele;
        this.Couleur = couleur;
        this.Reservoir = reservoir;
        this.Carburant = 10;
        this.Consommation = consommation;
        this.Demarree = false;
        this.Roule = false;
    }

    Demarrer() {
        if (this.Demarree === true)
            console.log("Le véhicule est déjà démarré ! Le moteur tourne déjà");
        else {
            console.log("Le véhicule est démarré, le moteur tourne!");
            this.Demarree = true;
        }
    }

    Arreter() {
        if (this.Demarree === true) {
            if (this.Roule === false) {
                this.Demarree = false;
                console.log("Le moteur est arrété...");
            } else
                console.log("Le véhicule roule... IMPOSSIBLE d'arrêter le moteur!");
        }
        else
            console.log("Le moteur ne tourne pas... IMPOSSIBLE de l'arrêter!");

    }

    Rouler(distance) {
        if (this.Roule === false) {
            if (this.Demarree === true) {
                let consoTmp = distance * this.Consommation / 100;
                if (this.Carburant >= consoTmp) {
                    console.log(`La voiture roule sur ${distance}km.`);
                    this.Roule = true;
                    this.Carburant -= consoTmp;
                    let autonomie = Math.round(this.Carburant / this.Consommation * 100);
                    console.log(`Vous avez consommé ${consoTmp}L de carburant sur ce parcour.`);
                    console.log(`Il vous reste ${this.Carburant}L de carburant pour une autonomie de ${autonomie}kms.`);
                } else
                    console.log("Il n'y a pas assez de carburant pour couvrir la distance... Veuillez refueler");
            } else
                console.log("Le moteur n'est pas démarré, veuillez démarrer le véhicule...");
        } else
            console.log("Le véhicule roule déjà...");

    }

    Stopper() {
        if (this.Roule === true) {
            console.log("Le véhicule s'arrète...");
            this.Roule = false;
        } else {
            console.log("Le véhicule est déjà arrèté!");
        }
    }

    Refueler(nbLitres) {
        if (this.Roule === false) {
            if (this.Demarree === false) {
                if(nbLitres + this.Carburant <= this.Reservoir){
                    console.log(`Nous ajoutons ${nbLitres}L de carburants au réservoir...`);
                    this.Carburant += nbLitres;
                }else{
                    console.log("Erreur, Vous dépassez la capacité du réservoir!");
                    console.log(`La contenance du réservoir est de ${this.Reservoir}L or il vous reste ${this.Carburant}L.`);
                    console.log(`Vous ne pouvez pas ajouter plus de ${this.Reservoir - this.Carburant}L dans votre réservoir`);
                }
            } else
                console.log("Veuillez arréter le moteur avant de faire le plein!");
        } else 
            console.log("Vous devez stopper le véhicule pour faire le plein!");        
    }

    Klaxonner() {
        console.log("Pouet!! Pouet !!!");
    }

}