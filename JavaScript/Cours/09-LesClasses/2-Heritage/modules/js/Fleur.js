import Vegetal from "./Vegetaux.js";


export default class Fleur extends Vegetal{
    constructor(nom,type){
        super(nom,type);
        this.Naissance();
    }
    Naissance(){
        console.log("Je viens d'une graine...");
        this._photosyntese=true;
    }
    Mort(){
        console.log("Je fane...");
        this._photosyntese=false;
    }
}