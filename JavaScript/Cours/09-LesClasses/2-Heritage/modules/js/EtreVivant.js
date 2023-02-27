

export default class EtreVivant {
    constructor(nom, type) {
        // Declaration des attributs (privé)
        this._nom = nom;
        this._type = type;
    }
    // Propriètés (Getters => Setters)
    get nom() { return this._nom; }
    set nom(value) { this._nom = value; }

    get type() { return this._type; }
    set type(value) { this._type = value; }

    Naissance() {
        console.log("Tous les êtres vivants naissent...");
    }
    Mort() {
        console.log("Tous les êtres vivants meurent...");
    }
    Respiration() {
        console.log("Tous les êtres vivants respirent... à leur manière!");
    }
    Alimentation() {
        console.log("Tous les êtres vivants s'alimentent... à leur manière!");
    }
}