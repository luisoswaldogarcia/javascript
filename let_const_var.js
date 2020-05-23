var nombre = "Juan";


// declara una nueva variable dentro de la funcion hija
function saludar(){
    var nombre = "Pedro";
    console.log("Hola ", nombre);
}
saludar();

console.log("nombre: ", nombre);

//==============================================================================

var nombre = "Juan";

//Modufica la variable original
function saludar(){
    nombre = "Pedro";
    console.log("Hola ", nombre);
}
saludar();

console.log("nombre: ", nombre);

//==============================================================================

let nombre = "Juan";

//Dentro del bloque de codigo la variable es otra
function saludar(){
    let nombre = "Pedro";
    console.log("Hola ", nombre);
}
saludar();

//Dentro del bloque de codigo la variable es otra
if(nombre == "Juan"){
    let nombre = "Jacinto";
    console.log("nombre: ", nombre);
}
console.log("despues de if nombre: ", nombre);

//============================================================================== 
var i = 9999999;

for(i=0; i<10; i++){
    console.log("contando: ", i);
}
console.log("i: ", i);

//============================================================================== 
var i = 9999999;

for(i=0; i<5; i++){
    setTimeout(function(){
        console.log("contando: ", i); //contando: 5
    }, i * 1000);
}
//Todo dice contando : 5

//============================================================================== 
let i = 9999999;

// @Brenda: 

// @Enrique: 

for(let i=0; i<5; i++){
    setTimeout(function(){
        console.log("contando: ", i); //contando: 5
    }, i * 1000);
}
//=============================================================================

const i = 9999999999;
i =20;

console.log("i: ", i);
