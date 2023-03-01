import GenerateurMots from './GenerateurMots.js';

export default class Pendu {

    constructor() {
        this.motATrouver = GenerateurMots.generer().toUpperCase();
        this.masque = this.genererMasque();
        this.nbEssais = 11;
        this.dejaProposee = [];
        this.win = false;
    }

    testChar = (char) => {
        let found = false;
        let tmp = "";
        // Méthode pour vérifier la saisie de l'utilisateur
        for (let i = 0; i < this.motATrouver.length; i++) {
            if (this.motATrouver[i] === char) {
                found = true;
                tmp += char;
            } else {
                tmp += this.masque[i];
            }
        }
        this.masque = tmp;

        if (this.testWin())
            this.win = true;
        else if (!found) {
            this.nbEssais--;
            this.dejaProposee.push(char);
        }

        return found;
    }

    testWin = () => {
        // Methode pour vérifier si la partie est gagné
        return this.motATrouver === this.masque && this.nbEssais > 0
    }

    genererMasque = () => {
        // Méthode pour générer un masque du moATrouver
        let masquetmp = "";
        for (let i = 0; i < this.motATrouver.length; i++) {
            masquetmp += "*";
        }
        console.log("Masque : " + masquetmp);
        return masquetmp
    }
}