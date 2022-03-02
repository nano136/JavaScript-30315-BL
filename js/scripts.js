console.log("Arrays");

let carritoDeCompras = ["Agua", "Snack", "Gaseosa", "Galletitas"]

for (let i = 0; i < carritoDeCompras.length; i++) {
    console.log(i, carritoDeCompras[i]);
    
}

carritoDeCompras.push("Pan")

const productoQuitado = carritoDeCompras.shift()


console.log(productoQuitado, carritoDeCompras.join(' || '))



