const personas = [{
    nombre: "Brenda",
    apellido: "Arriaga",
    iniciales: "AIMB",
    fecha_nacimiento: {
        anio: "2000",
        mes: "02",
        dia: "01"
    }
}, {
    nombre: "Enrique",
    apellido: "Arellanes",
    iniciales: "ATLE",
    fecha_nacimiento: {
        anio: "2001",
        mes: "04",
        dia: "10"
    }
}, {
    nombre: "Juan",
    apellido: "Perez",
    iniciales: "PEPJ",
    fecha_nacimiento: {
        anio: "2001",
        mes: "04",
        dia: "08"
    }
}, {
    nombre: "Roberto",
    apellido: "Gomez",
    iniciales: "GOBR",
    fecha_nacimiento: {
        anio: "1975",
        mes: "03",
        dia: "01"
    }
}];

// `${algo}${algo2.otra}`

/**
 * 
 * 1. Agregar un campo nuevo al objeto con los nombres completos
 * 2. Todos los RFCS
 */

const nombres = personas.map(function (persona) {
    let nuevo_objeto_clonado = Object.assign({},persona);
    
    nuevo_objeto_clonado.nombre_completo = persona.nombre + ' ' + persona.apellido;
    
    nuevo_objeto_clonado.RFC = persona.fecha_nacimiento.anio.substring(2,4);//
    return nuevo_objeto_clonado;
});

console.log("nombres: ", nombres);