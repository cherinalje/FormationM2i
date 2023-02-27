import EtreVivant from "./EtreVivant.js";


export default class Mammifere extends EtreVivant {

    constructor(nom, type) {
        super(nom, type);
        this._heartRate = false;
        this.Naissance();
    }

    get HeartRate() { return this._heartRate; }

    Naissance() {
        super.Naissance();
        console.log("Naissance après la gestation...");
        this._heartRate = true;
    }
    Mort() {
        console.log("Mon coeur s'arrête de battre...");
        this._heartRate = false;
    }
}