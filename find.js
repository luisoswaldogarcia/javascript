const numeros = [10,9,8,7,6];

let diez = numeros.find(function(elemento_actual){
    return elemento_actual == 10;
});

console.log("diez: ", diez);

// ======================================================

const numeros = [10,9,8,7,6];

let menor_8 = numeros.find(function(elemento_actual){
    return elemento_actual < 8;
});

console.log("menor_8: ", menor_8);

// ======================================================

const personas = [{
    nombre: "Juan",
    edad: 20
},{
    nombre: "Pedro",
    edad: 18
}];
let juan = personas.find(function(elemento_actual){
    return elemento_actual.nombre == "Juan";
});

console.log("juan: ", juan);

// ======================================================
const personas = [{
    nombre: "Juan",
    edad: 20
},{
    nombre: "Pedro",
    edad: 18
}];
let edad_18 = personas.find(function(elemento_actual){
    return elemento_actual.edad === 18;
});

console.log("edad_18: ", edad_18);

// ===============================================

const personas = [{
    nombre: "Juan",
    edad: 20
},{
    nombre: "Pedro",
    edad: 18
}];
let menor_20 = personas.find(function(elemento_actual){
    return elemento_actual.edad < 20;
});

console.log("menor_20: ", menor_20);