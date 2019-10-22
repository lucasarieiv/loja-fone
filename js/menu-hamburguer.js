const $menu = document.querySelector('.menu-hamburguer');
const $header = document.querySelector('.header-store')
const $links = $header.querySelectorAll('.action')
$menu.addEventListener('click', event => {
    $menu.classList.toggle('-active')
    event.preventDefault()
    $links.forEach( (elem) => {
        elem.classList.toggle('-active')
    })
});