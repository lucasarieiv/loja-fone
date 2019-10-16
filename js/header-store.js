const $search = document.querySelector('.search-icon')
const $input = document.querySelector("[type='search']")


$search.addEventListener("click", () => {
    $input.classList.toggle('-active')
    $search.classList.toggle('-active')
})

