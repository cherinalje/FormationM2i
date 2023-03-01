export function getRandom() {
    return Math.random();
}


export function getRandomArbitrary(min, max) {
    return Math.rundom() * (max-min) + min;
}


export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  //min is inclusive and maximum is inclusive


export function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  //min is inclusive max is inclusive