
// - Ter a janela
// - Localizar no HTML
// - Pegar o coração
// - Pegar clique no Coração
// - No momento em que o usuário clicar, nós queremos mostrar um texto AE


const $heart = window.document.querySelector(".-heart")
const $addCart = window.document.querySelector(".-second")
const $cart = window.document.querySelector('.-last')

$addCart.addEventListener("click", handleCart)
$heart.addEventListener("click", handleClick)

function handleClick() {
}

function handleCart() {
    // alert("Funcionou - TOP TOP TOP")
    $cart.textContent = 'Carrinho (11)'
}