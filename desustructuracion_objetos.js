var persona =  {
    nombre: "Juan",
    apellido: "Pérez",
    edad: 23,
    genero: "M",
    vivo: true,
    fecha_nacimiento: new Date("1997-04-01")
}

var { nombre, apellido, edad } = persona;


console.log("nombre: ", nombre); //nombre: Juan