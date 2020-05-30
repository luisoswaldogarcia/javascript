const alumnos = [{
    nombre: "Brenda",
    edad: 8,
    promedio: 10
},{
    nombre: "Juan",
    edad: 9,
    promedio: 6
},{
    nombre: "Enrique",
    edad: 9,
    promedio: 9.9
},{
    nombre: "Mayra",
    edad: 8,
    promedio: 5
},{
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

 
let Promedio_Alto = alumnos.filter(function(elemento_actual){
    return elemento_actual.promedio == 10 && elemento_actual.nombre.includes("Brenda")
});
console.log("Promedio_Alto: ", Promedio_Alto);

let Pasantes = alumnos.filter(function(ya_pasaron){
    return ya_pasaron.promedio > 6 ;

)};
console.log("ya_pasaron", ya_pasaron);
