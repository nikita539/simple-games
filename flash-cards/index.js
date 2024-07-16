// https://www.codingnepalweb.com/best-javascript-games-for-beginners/

document.addEventListener('DOMContentLoaded', function() {
    // set onclick events to flash-cards
    const flash_cards = document.getElementsByClassName('flash_card')
    flash_cards.addEventListener('click', function(event) {
        console.log(event.target)
    })
})