// https://www.codingnepalweb.com/best-javascript-games-for-beginners/

document.addEventListener('DOMContentLoaded', function() {
    
    const flash_cards = document.getElementsByClassName('flash_card')
    const flipedCards = []

    

    for (let i = 0; i < flash_cards.length; i++) {

        // set onclick events to flash-cards
        flash_cards[i].onclick = onClick
    }

    function onClick(event) {
        flipCard(event)
        isMatch(event)
    }


    function isMatch(event) {
        event.currentTarget.onclick = null
        flipedCards.push(event.currentTarget)
    }

    function flipCard(event) {
        event.currentTarget.classList.toggle('is_fliped')
    }

})