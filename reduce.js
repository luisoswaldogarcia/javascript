///Sumamos numeros

const numeros_cualquiera = [1, 2, 3, 4];

const suma_de_los_numeros_cualquiera = numeros_cualquiera
    .reduce(function (acumulador, actual) {
        return acumulador + actual;
    }, 10);

console.log("suma_de_los_numeros_cualquiera: ", suma_de_los_numeros_cualquiera);

let acumulador = 0;
for (let i = 0; i < numeros_cualquiera.length; i++) {
    acumulador = acumulador + numeros_cualquiera[i];
}
console.log("acumulador: ", acumulador);

//Restar numeros
const resta_numeros_cualquiera = numeros_cualquiera
    .reduce(function (acumulador, actual) {
        return acumulador - actual;
    }, 0);

console.log("resta_numeros_cualquiera: ", resta_numeros_cualquiera);

//Sumando strings
const strings_cualquiera = ["Hola", "cómo", "estás", "Pedrito", "?"];

const suma_de_strings = strings_cualquiera.reduce(function (acumulador, actual, indice) {
    if (indice != 0) {
        return acumulador + " " + actual;
    } else {
        return acumulador + actual;
    }
}, "");
console.log(suma_de_strings);

//Sumando numeros dentro de objetos
const materias = [{
    nombre: "Español",
    calificacion: 8
}, {
    nombre: "Matematicas",
    calificacion: 10
}, {
    nombre: "Geografía",
    calificacion: 6
}, {
    nombre: "Artisticas",
    calificacion: 5
}];

const promedio = materias.reduce(function (acumulador, actual) {
    return acumulador + actual.calificacion;
}, 0) / materias.length;

console.log("promedio: ", promedio);

// No se estresen
const alumnos = ["Juan", "Rosa", "Jacinto", "Josefina"];
const promedios = [10, 8, 5, 8];
const objeto = alumnos.reduce(function (acumulador, actual, indice) {
    let obj_nuevo = Object.assign({}, acumulador);
    obj_nuevo[actual] = promedios[indice];
    return obj_nuevo;
}, {});

console.log("objeto: ", objeto);

// Nivel PowerStreet
const maestra_clientes = {
    columnas: ["codigo", "ruc", "nombre"],
    registros: [
        [10, "FPER7472O4", "FILEMON CONTRERAS"],
        [11, "P5ER7422O2", "PEDRITO SOLA"],
        [12, "T58R7412O2", "MARIO MORENO"],
    ]
};
const objeto_clientes = maestra_clientes.registros.map(function (registro) {
    return registro.reduce(function (acum, actual, indice) {
        let columna = maestra_clientes.columnas[indice];
        let obj = {
            ...acum
        };
        obj[columna] = actual;
        return obj;
    }, {});
});
console.log("objeto_clientes: ", objeto_clientes);