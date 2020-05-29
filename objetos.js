let persona1 = {nombre: "Sandra", edad: 30}; //B2:C2

let persona2 = persona1; //B2:C2

persona2.nombre = "Julieta";

console.log("persona1: ", persona1);
console.log("persona2: ", persona2);

// ===========================================================

let persona3 = {nombre: "Pancracia", edad: 30}; //B3:C3

let persona4 = Object.assign({},persona1); //B4:C3

persona4 = {
    ...persona3
}; //B4:C3

persona4.nombre = "Panfila";

console.log("persona3: ", persona3);
console.log("persona4: ", persona4);