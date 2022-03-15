
 
 if(document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready)
 }else{
     ready()
 }
function ready(){
    let removerCartItemButtons = document.getElementsByClassName("btn-danger")
    console.log(removerCartItemButtons)
    for (let i = 0; i < removerCartItemButtons.length; i++){
        let button = removerCartItemButtons[i]
        button.addEventListener("click", removerCartItem)
    }
}
var quantityInputs = document.getElementsByClassName("cart-quantity-input")
    for (let  i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener("change", quantityChanged())
    }

    var addToCartButtons = document.getElementsByClassName("shop-item-button")

    for (let i = 0; i < addToCartButtons.length; i++) {
        const button = addToCartButtons[i]
        button.addEventListener("click", addToCartClicked)
        }

    function addToCartClicked(event){
        const button = event.target
        const shopItem = button.parentElement.parentElement
        var title = shopItem.getElementsByClassName("shop-item-title")[0].innerText
        var price = shopItem.getElementsByClassName("shop-item-price")[0].innerText
        console.log (title, price)
    }

function quantityChanged(event){
    var input = event.target
    if (isNaN(input.value) || input.value <= 0){
        input.value = 1
    }
    updateCartTotal()
}

function removerCartItem(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}




function updateCartTotal(){
    var cartItemContainer = document.getElementsByClassName("cart-items")[0]
    var cartRows = cartItemContainer.getElementsByClassName("cart-row")
    var total = 0
    for (let i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName("cart-price")[0]
        var quantityElement = cartRow.getElementsByClassName("cart-quantity-input")[0]
        var price = parsefloat(priceElement.innerText.replace("$", " "))
        total = total + (price * quantity)
    }
    total = Math.round(total * 100)/ 100 
    document.getElementsByClassName("cart-total-price")[0],innerText = "$" + total
}