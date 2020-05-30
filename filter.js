//const personas = [{
   // nombre: "Juan",
   // edad: 20
//},{
    //nombre: "Pedro",
   // edad: 18
//}];
//let menor_50 = personas.filter(function(elemento_actual){
  //  return elemento_actual.edad < 50;
//});

// console.log("menor_50: ", menor_50);

// ==============================================================

const personas = [{
    nombre: "Juan",
    edad: 20
},{
    nombre: "Pedro",
    edad: 18
}];
let mayores_50 = personas.filter(function(elemento_actual){
    return elemento_actual.edad > 50;
});

console.log("mayores_50: ", mayores_50);