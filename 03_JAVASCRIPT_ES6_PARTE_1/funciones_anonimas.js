function sumar(x, y, msj) {
    let suma = x + y;
    msj('Funciono');
    return suma;
}


/*function mensaje(texto) {
    console.log(texto);
}*/

/*console.log(sumar(1, 2, function(texto) {
    console.log(texto);
}));*/ 


console.log(sumar(1, 2, (texto) => {
    console.log(texto);
})); 

console.log(sumar(1, 2, texto => texto)); 
//console.log('hola mundo');
