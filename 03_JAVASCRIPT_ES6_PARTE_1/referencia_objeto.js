//AL PASAR UN OBJETO A OTRO OBJETO, LO PASA COMO REFERENCIA
//QUIERE DECIR SI UN OBJETO A LE ASIGNA A UN OBJETO B TODO SU OBJETO
//ENTONCES SI SE MODIFICA EL OBJETO B TAMBIEN SE MODIFICA EL OBJETO A


let objA = {
    nombre: 'Mario',
    edad: 22
}

//console.log(objA);

//let objB = objA;
let objB = Object.assign({}, objA);

//console.log(objB);

objB.nombre = 'Antonio';

console.log('Obj A: ' + JSON.stringify(objA));
console.log('Obj B: ' + JSON.stringify(objB));