const productos = [
    {id: 1, titulo: "G2 ProPlayer Hoodie 2020", stock: 50},
    {id: 2, titulo:"G2 ProPlayer Hoodie 2021", stock: 10},
    {id: 3, titulo:"G2 ProPlayer Hoodie 2022", stock: 30},
]

productos.forEach( e => {
    console.log(e.titulo);
    console.log("El stock es disponible es de " + e.stock +" "+ "unidades")
})

let removerCartItemButtons = document.getElementsByClassName("btn-danger")
console.log(removerCartItemButtons)

for (let i = 0; i < removerCartItemButtons.length; i++){
    let button = removerCartItemButtons[i]
    button.addEventListener("click", function(){
        console.log("clicked")
    })
}