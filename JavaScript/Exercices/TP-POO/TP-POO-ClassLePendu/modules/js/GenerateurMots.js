import {getRandomInt} from './MyRandom.js'

export default class GenerateurMots{

    static generer(){

        const mots = [ "amazon", "google","facebook","macintosh","microsoft","instagram","gianni"];

        let randomIndex = getRandomInt(0, mots.length);

        return mots[randomIndex];
    }
}