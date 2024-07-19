// https://www.codingnepalweb.com/best-javascript-games-for-beginners/

document.addEventListener('DOMContentLoaded', function() {
    
    const flash_cards = document.getElementsByClassName('flash_card')

    const isFlipedElements = []

    for (let i = 0; i < flash_cards.length; i++) {

        // set onclick events to flash-cards
        flash_cards[i].onclick = flipCard

        function flipCard(event) {}

    }
})