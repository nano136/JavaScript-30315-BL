 //Calcula el precio total de juegos en steam en AR$, le aplica los impuestos.
 let precio = prompt("Cuanto vale tu juego?");

 function Impuestos(precio) {
     return (precio * 64) / 100;
 }

 function precioFinal(precio,Impuestos){
     let result = parseInt(precio) + parseInt(Impuestos)
     return result
 }
 alert(`Tu juego vale ${precioFinal(precio,Impuestos)}AR$ contando impuestos`)
 