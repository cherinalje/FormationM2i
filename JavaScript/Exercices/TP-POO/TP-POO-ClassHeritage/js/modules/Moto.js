import Vehicule from './Vehicule.js';

export default class Moto extends Vehicule{
    
    display() {
        return `<b>Moto : </b>${super.display()}`
    }
}
