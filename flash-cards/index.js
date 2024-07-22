// https://www.codingnepalweb.com/best-javascript-games-for-beginners/

document.addEventListener('DOMContentLoaded', function() {
    const flashCards = document.getElementsByClassName('flash_card'); // list of all flash cards

    for (let i = 0; i < flashCards.length; i++) {

        // set onclick events to flash-cards
        flashCards[i].onclick = onClick
    }
})

//variables
let flipedCards = [];
let flipedCardsCount = 0

// functions
function onClick(event) {
    flipCard(event)
    isMatch(event)
}

function flipCard(event) {
    event.currentTarget.classList.toggle('is_fliped')
    flipedCards.push(event.currentTarget)
}

function isMatch() {
    if (flipedCards.length == 2) {

        if (flipedCards[0].dataset.number == flipedCards[1].dataset.number) {
            console.log(flipedCards[0].dataset.number == flipedCards[1].dataset.number)

            flipedCards.forEach((el) => {
                el.onclick = null
            })

            flipedCardsCount++

            flipedCards.length = 0
        } else { 

            setTimeout(function() {
                flipedCards.forEach((el) => {
                    el.classList.toggle('is_fliped')
                })

                flipedCards.length = 0
            }, 2000)

        }

    }
}
