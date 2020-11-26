export function multiplicarPor10(array) {
    const newArray =  array.map(element => element*10);
    return newArray;
}

export function soloPares(array) {
    const evenNumbers = array.filter(element=>element%2==0);
    return evenNumbers;
}

export function moverALaDerecha(array) {
    let ultimo = array[array.length - 1];
    let newArray = [ultimo]; 
    newArray = array.map(valor => newArray.push(valor));
    return newArray; 
}

export function soloUnaPalabra(array) {}

export function soloArraysPositivos(array) {}

export function soloVocales(array) {}

export function todasVocalesIguales(array) {}

export function duplicarMatriz(array) {
    let nuevoInput = array.map(unImput=>unImput.map(valor=>valor*2))
    return nuevoInput;
}

export function mayoresDeEdadValidados(array) {}

export function transformarObjetoEnArray(objeto) {
}
