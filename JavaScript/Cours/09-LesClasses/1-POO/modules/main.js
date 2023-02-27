/*
 * Les Classes en Javascript
 */

import Voiture from './js/Voiture.js';

let voitureDeNicolas = new Voiture();

console.log(voitureDeNicolas);

voitureDeNicolas.Rouler(100);
voitureDeNicolas.Demarrer();
voitureDeNicolas.Demarrer();
voitureDeNicolas.Rouler(100);
voitureDeNicolas.Arreter();
voitureDeNicolas.Stopper();
voitureDeNicolas.Rouler(50);
voitureDeNicolas.Refueler(135);
voitureDeNicolas.Stopper();
voitureDeNicolas.Refueler(135);
voitureDeNicolas.Arreter();
voitureDeNicolas.Refueler(135);
voitureDeNicolas.Refueler(35);
voitureDeNicolas.Demarrer();
voitureDeNicolas.Rouler(50);
voitureDeNicolas.Stopper();
voitureDeNicolas.Arreter();

let voitureDeJeanne = new Voiture("C3", "Bleu", 50, 5);

console.log(voitureDeJeanne);

voitureDeJeanne.Demarrer();
voitureDeJeanne.Demarrer();
voitureDeJeanne.Arreter();
voitureDeJeanne.Arreter();