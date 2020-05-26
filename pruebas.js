let i = 9999999;

// @Brenda: 

// @Enrique: let funciona como si fueran varias variables

for (let i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log("contando: ", i); //contando: 5
    }, i * 1000);
}