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
 * 1. Nombres completos
 * 2. Todos los RFCS
 */

const nombres = personas.map(function(nombres) {
    return nombre = nombres.nombre + ' ' + nombres.apellido;
});

console.log(nombres);

const fecha = personas.map(function(fecha) {
    return fecha.iniciales + fecha.fecha_nacimiento.anio.substring(2, 4) + fecha.fecha_nacimiento.mes + fecha.fecha_nacimiento.dia;
});

console.log(fecha);