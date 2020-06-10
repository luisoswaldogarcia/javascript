const personas = [{
    nombre: "Brenda",
    apellido: "Arriaga",
    iniciales: "AIMB",
    fecha_nacimiento: {
        anio: "2000",
        mes: "02",
        dia: "01"
    }
},{
    nombre: "Enrique",
    apellido: "Arellanes",
    iniciales: "ATLE",
    fecha_nacimiento: {
        anio: "2001",
        mes: "04",
        dia: "10"
    }
},{
    nombre: "Juan",
    apellido: "Perez",
    iniciales: "PEPJ",
    fecha_nacimiento: {
        anio: "2001",
        mes: "04",
        dia: "08"
    }
},{
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
 

const nombre_completo = personas.map(function(Nombres){
  return Nombres.nombre;
});

//console.log("nombre_completo ", nombre_completo);

const Apellido_completo = personas.map(function(apellidos){
    return apellidos.apellido + nombre_completo;
    
});


//const todo = nombre_completo.concat(Apellido_completo);

console.log("Apellido_completo",Apellido_completo);
//return nombre + " puntaje " + (num1 + num2); 
//console.log("Apellido_completo", Apellido_completo + "apellido"+ nombre_completo + "nombre");


*/

const nombres = personas.map(function (persona) {
    let nuevo_objeto_clonado = Object.assign({},persona);
    
    nuevo_objeto_clonado.nombre_completo = persona.nombre + ' ' + persona.apellido + '' + personas.iniciales ;
    
    return nuevo_objeto_clonado;
});

console.log("nombres: ", nombres);


