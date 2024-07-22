// https://www.codingnepalweb.com/best-javascript-games-for-beginners/

//variables
const flashCards = document.getElementsByClassName('flash_card'); // list of all flash cards
const card_container = document.getElementById('card_container');
let flipedCards = [];
let flipedCardsCount = 0

for (let i = 0; i < flashCards.length; i++) {

    // set onclick events to flash-cards
    flashCards[i].onclick = onClick
}

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
            disableEvents(true)

            setTimeout(function() {
                flipedCards.forEach((el) => {
                    el.classList.toggle('is_fliped')
                })

                disableEvents(false)

                flipedCards.length = 0
            }, 2000)

        }

    }
}
function disableEvents(flag) {
    if (flag) card_container.style.pointerEvents = 'none'  
    else card_container.style.pointerEvents = ''  
}
