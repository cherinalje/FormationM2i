import Voiture from './modules/Voiture.js';
import Moto from './modules/Moto.js';

const result = document.querySelector('#result');

let voiture = new Voiture("Renault", "Kangoo", 240000, 2006, false);
result.innerHTML += voiture.display() + "<br>";

let moto = new Moto("BMW", "R1150R Rockster", 65000, 2005);
result.innerHTML += moto.display();


