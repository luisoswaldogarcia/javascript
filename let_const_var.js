var nombre = "Juan";

//@Enrique se declara dentro de la funcion una variable con el mismo nombre pero con un valor diferente el cual solo aplica dentro de esa funcion   
// declara una nueva variable dentro de la funcion hija
function saludar() {
    var nombre = "Pedro";
    console.log("Hola ", nombre);
}
saludar();

console.log("nombre: ", nombre);

//==============================================================================
//@Enrique  se utiliza la misma variable por lo cual el valor cambia al nuevo dentro de la funcion
var nombre = "Juan";

//Modufica la variable original
function saludar() {
    nombre = "Pedro";
    console.log("Hola ", nombre);
}
saludar();

console.log("nombre: ", nombre);

//==============================================================================
// let funciona para poder declarar una variable global aunque si se utiliza dentro de una funcion la variable es otra aunque tenga el mismo nombre
let nombre = "Juan";

//Dentro del bloque de codigo la variable es otra
function saludar() {
    let nombre = "Pedro";
    console.log("Hola ", nombre);
}
saludar();

//Dentro del bloque de codigo la variable es otra
if (nombre == "Juan") {
    let nombre = "Jacinto";
    console.log("nombre: ", nombre);
}
console.log("despues de if nombre: ", nombre);

//============================================================================== 
// aunque la variable tenga un valor en el for se inicia en un valor diferente
var i = 9999999;

for (i = 0; i < 10; i++) {
    console.log("contando: ", i);
}
console.log("i: ", i);

//============================================================================== 
//por el setTimeout se le asigna el valor 5 a i  
var i = 9999999;

for (i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log("contando: ", i); //contando: 5
    }, i * 1000);
}
//Todo dice contando : 5

//============================================================================== 
let i = 9999999;

// @Brenda: 

// @Enrique: let funciona como si fueran varias variables

for (let i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log("contando: ", i); //contando: 5
    }, i * 1000);
}
//=============================================================================

const i = 9999999999;
i = 20;

console.log("i: ", i);