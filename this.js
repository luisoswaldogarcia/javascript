/** 
 * @param {String} nombre - Los nombres vienen de PWST
 * @param {Number} edad - La edad esta en el campo esquina 2 de PWST (PWST Magico >.<)
 * @param {Date} fecha_nacimiento 
 * @param {Boolean} extranjero - Necesitamos saber si la persona es extranjera
 * 
 * @returns {Object} Los datos de la persona dentro de un objeto
 */
function persona(nombre, edad, fecha_nacimiento, extranjero){
    this.nombre = nombre;
    this.edad = edad;
    this.fecha_nacimiento = fecha_nacimiento;
    this.extranjero = extranjero;

    return this;
}

persona("Juan",4, new Date("2020-02-02"),true);

// ========================================================================================

/**
 * 
 * @param {Object} param0 
 * @param {String} param0.nombre - Nombre
 * @param {Number} param0.edad - Edad
 * @param {Date} param0.fecha_nacimiento -Fecha
 * @param {Boolean} param0.extranjero - Extranjero
 * 
 * @returns {Object} Los datos de la persona dentro de un objeto
 */
function persona2({nombre, edad, fecha_nacimiento, extranjero}){

    this.nombre = nombre;
    this.edad = edad;
    this.fecha_nacimiento = fecha_nacimiento;
    this.extranjero = extranjero;

    return this;
}

persona2({
    nombre: "Juan",
    edad: 18,
    fecha_nacimiento: new Date("2020-02-02"),
    extranjero: true
});

// =====================================================

function acumulador(desde){
    let acumulador = 0;

    if(this[desde]){
        return this[desde];
    }

    for(let i=desde; i>0; i--){
        acumulador = acumulador + i;
    }

    this[desde] = acumulador;

    return acumulador;
}

console.log("acumulado: ", acumulador(2 * 1000 * 1000 * 1000));

console.log("acumulado: ", acumulador(2 * 1000 * 1000 * 1000));
console.log("acumulado: ", acumulador(2 * 1000 * 1000 * 1000));
console.log("acumulado: ", acumulador(2 * 1000 * 1000 * 1000));
console.log("acumulado: ", acumulador(2 * 1000 * 1000 * 1000));
console.log("acumulado: ", acumulador(2 * 1000 * 1000 * 1000));
console.log("acumulado: ", acumulador(2 * 1000 * 1000 * 1000));

console.log("acumulado: ", acumulador(10));

console.log("acumulado: ", acumulador(50));






