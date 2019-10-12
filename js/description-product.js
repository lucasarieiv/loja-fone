
const $heart = document.querySelector(".-heart")
const $fatherStar = document.querySelector('.-star')

$fatherStar.addEventListener("click", function(e) {
    const elem = e.target
    e.target.addEventListener("click", handleStar(elem))
    if ($fatherStar.classList.contains('-active')) {
        $fatherStar.classList.remove('-active')
    }
});

$heart.addEventListener("click", handleClick)

function handleStar(e) {
    console.log(e)
    e.classList.toggle('-active')   
}

function handleClick() {
    // if ($heart.classList.contains('-active')) {
    //     $heart.classList.remove('-active')
    // } else {
    //     $heart.classList.add('-active')
    // }
    $heart.classList.toggle("-active")
}

