const alumnos = [{
    nombre: "Brenda",
    edad: 8,
    promedio: 10
}, {
    nombre: "Juan",
    edad: 9,
    promedio: 6
}, {
    nombre: "Enrique",
    edad: 9,
    promedio: 9.9
}, {
    nombre: "Mayra",
    edad: 8,
    promedio: 5
}, {
    nombre: "Christian",
    edad: 9,
    promedio: 2
}];

// Investigar como funciona el Math max

/**
 * 1. ¿Quién saco el promedio mas alto?
 * 2. ¿Quienes pasaron?
 * 3. ¿Quienes reprobaron?
 */

let alto = Math.max.apply(Math, alumnos.map(function(elemento_actual) {
    return elemento_actual.promedio;
}));




console.log("promedio mas alto: ", alto);


let pasaron = alumnos.filter(function(elemento_actual) {
    return elemento_actual.promedio > 5;
});

console.log("aprobaron: ", pasaron);

let reprobaron = alumnos.filter(function(elemento_actual) {
    return elemento_actual.promedio <= 5;
});

console.log("Reprobaron: ", reprobaron);