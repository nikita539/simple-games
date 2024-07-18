// https://www.codingnepalweb.com/best-javascript-games-for-beginners/

document.addEventListener('DOMContentLoaded', function() {
    // set onclick events to flash-cards
    const flash_cards = document.getElementsByClassName('flash_card_inner')
    
    for (let i = 0; i < flash_cards.length; i++) {

        flash_cards[i].addEventListener('click',function(event) {
            event.target.classList.toggle('is_fliped')
        })

    }
})