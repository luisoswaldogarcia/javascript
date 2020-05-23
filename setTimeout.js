var fecha_inicial = new Date();
setTimeout(saludar, 5 * 1000)

function saludar() {
    var fecha_final = new Date();
    console.log("Hola: ", (fecha_final - fecha_inicial) / 1000, "segundos");
}



var fecha_inicial = new Date();
setTimeout(function() {
    var fecha_final = new Date();
    console.log("Hola: ", (fecha_final - fecha_inicial) / 1000, "segundos");
}, 1000 * 5);