function acumulador(desde){
    let acumulador = 0;

    if(this[desde]){
        return this[desde];
    }

    for(let i=desde; i>0; i--){
        acumulador = acumulador + i;
    }

    this[desde] = acumulador;

    return acumulador;
}

console.log("acumulado: ", acumulador(2 * 1000 * 1000 * 1000));

console.log("acumulado: ", acumulador(2 * 1000 * 1000 * 1000));
console.log("acumulado: ", acumulador(2 * 1000 * 1000 * 1000));
console.log("acumulado: ", acumulador(2 * 1000 * 1000 * 1000));
console.log("acumulado: ", acumulador(2 * 1000 * 1000 * 1000));
console.log("acumulado: ", acumulador(2 * 1000 * 1000 * 1000));
console.log("acumulado: ", acumulador(2 * 1000 * 1000 * 1000));

console.log("acumulado: ", acumulador(10));

console.log("acumulado: ", acumulador(50));
