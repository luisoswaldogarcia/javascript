const ventas = [{
    _id: 0,
    _cliente_id: 1,
    _cliente: "Juan",
    articulos: [{
        _id: 0,
        descripcion: "Horchata",
        precio_unitario: 15,
        cantidad: 2
    },{
        _id: 1,
        descripcion: "Limón",
        precio_unitario: 20,
        cantidad: 1
    },{
        _id: 3,
        descripcion: "Jamaica",
        precio_unitario: 12,
        cantidad: 3
    }]
},{
    _id: 1,
    _cliente_id: 2,
    _cliente: "Azucena",
    articulos: [{
        _id: 1,
        descripcion: "Limón",
        precio_unitario: 20,
        cantidad: 5
    },{
        _id: 3,
        descripcion: "Jamaica",
        precio_unitario: 12,
        cantidad: 2
    }]
},{
    _id: 3,
    _cliente_id: 11,
    _cliente: "Jacinta",
    articulos: [{
        _id: 1,
        descripcion: "Limón",
        precio_unitario: 20,
        cantidad: 5
    },{
        _id: 0,
        descripcion: "Horchata",
        precio_unitario: 15,
        cantidad: 2
    },{
        _id: 4,
        descripcion: "Fresa",
        precio_unitario: 8,
        cantidad: 3
    }]
}];

/**
 * 
 * Ponerle los importes a las partidas
 */

 const importes = ventas.map(function(venta){
     let partidas = venta.articulos.map(function(partida){
         return {
             ...partida,
             importe: partida.cantidad * partida.precio_unitario
         }
     });
     return {
         ...venta,
         articulos: partidas
     }
 });

 const importes_facil = ventas.map(function(venta){
    let nuevo_objeto = Object.assign({}, venta);
    nuevo_objeto.articulos.forEach(function(articulo){
        articulo.importe = articulo.cantidad * articulo.precio_unitario;
    });
    return nuevo_objeto;
});

 console.log("importes: ", JSON.stringify(importes));
 console.log("importes_facil: ", JSON.stringify(importes_facil));


 /**
  * 
  * Agregar indice a cada partida dependiendo del indice que genera el foreach o map
  */