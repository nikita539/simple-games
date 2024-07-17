// https://www.codingnepalweb.com/best-javascript-games-for-beginners/

document.addEventListener('DOMContentLoaded', function() {
    // set onclick events to flash-cards
    const flash_cards = document.getElementsByClassName('flash_card')
    
    for (let i = 0; i < flash_cards.length; i++) {

        flash_cards[i].addEventListener('click',function(event) {
            console.log('nothing is heppening ...')
        })

    }
})