/*
const numeros = [0,1,2,3];

const numeros_por_dos = numeros.map(function(elemento_actual){
    return elemento_actual * 2;
});

console.log("numeros: ", numeros);
console.log("numeros_por_dos: ", numeros_por_dos);

// ==============================================================

const numeros = [0,1,2,3];

const igual = numeros.map(function(elemento_actual){
    return elemento_actual;
});

console.log("numeros: ", numeros);
console.log("igual: ", igual);
*/

// ========================================================
/*
const personas = [{
    nombre: "Juana",
    edad: 20,
    genero: 1
},{
    nombre: "Pedro",
    edad: 18,
    genero: 2
}];

let nuevo = personas.map(function(elemento_actual){
    let nuevo_objeto = {
        ...elemento_actual
    };
    if(nuevo_objeto.genero == 1){
        nuevo_objeto.genero = "Femenino";
    } else {
        nuevo_objeto.genero = "Masculino";
    }
    return nuevo_objeto;
});

console.log("personas: ", personas);
console.log("nuevo: ", nuevo);
*/
// ===========================================

const personas = [{
    nombre: "Juana",
    edad: 20,
    genero: 1
},{
    nombre: "Pedro",
    edad: 18,
    genero: 2
}];

let edades = personas.map(function(elemento_actual){
    return elemento_actual.edad;
});

console.log("personas: ", personas);
console.log("edades: ", edades);
