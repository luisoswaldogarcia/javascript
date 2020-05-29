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


