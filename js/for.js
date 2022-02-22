let numero = prompt("escribe un numero")

for (let i = 1; i <=10000 ; i++){
    const result = numero * i;
    if (result > 30) {
        break;
    }
    console.log(`${numero} x ${i} = ${result}`);
    
}
 