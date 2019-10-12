let valorInicial = 10
const $addCart = document.querySelector(".-second")

$addCart.addEventListener("click", handleCart)

function handleCart() {
    const $carrinho = document.querySelector('.-last')
    $carrinho.textContent = `Carrinho (${++valorInicial})`
}