const numeros = ["Hola", "Como", "estas"];

numeros.forEach(function(elemento_actual, aqui_estoy_parado, array_original){
    console.log("Indice_actual: ", aqui_estoy_parado);
    console.log("Numero actual: ", elemento_actual);
    console.log("array_original: ",array_original);
});

for(let i=0; i<numeros.length; i++)
{
    let aqui_estoy_parado = i;
    let elemento_actual = numeros[i];
    let array_original = numeros;
    console.log("Indice_actual: ", aqui_estoy_parado);
    console.log("Numero actual: ", elemento_actual);
    console.log("array_original: ",array_original);
}

// ========================================================================

const personas = [{
    nombre: "Juan",
    edad: 20
},{
    nombre: "Pedro",
    edad: 18
}];

personas.forEach(function(elemento_actual, aqui_estoy_parado, array_original){
    console.log("Indice_actual: ", aqui_estoy_parado);
    console.log("Numero actual: ", elemento_actual);
    console.log("array_original: ",array_original);
});
console.log("=================================================");
for(let i=0; i<personas.length; i++){
    let aqui_estoy_parado = i;
    let elemento_actual = personas[i];
    let array_original = personas;
    console.log("Indice_actual: ", aqui_estoy_parado);
    console.log("Numero actual: ", elemento_actual);
    console.log("array_original: ",array_original);
}

// =================================================================

numeros.forEach(function(elemento_actual, aqui_estoy_parado, array_original){
    if(elemento_actual<=8) return null;
    console.log("Indice_actual: ", aqui_estoy_parado);
    console.log("Numero actual: ", elemento_actual);
    console.log("array_original: ",array_original);
});


