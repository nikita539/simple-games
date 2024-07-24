// https://www.codingnepalweb.com/best-javascript-games-for-beginners/

const flashCards = document.getElementsByClassName('flash_card');
const cardContainer = document.getElementById('card_container');

let firstCard, secondCard;
let flipedCardCount = 0;

const CLASS_NAME_TO_FLIP = 'is_fliped'


for (let index = 0; index < flashCards.length; index++) {
    flashCards[index].onclick = flipCard
}


function flipCard(event) {

    if (firstCard) secondCard = event.currentTarget
    else firstCard = event.currentTarget
    
    event.currentTarget.classList.toggle(CLASS_NAME_TO_FLIP)
    
    if (firstCard && secondCard) matchCards()
} 
function matchCards() {
    disableField(true)

    if (firstCard.dataset.number == secondCard.dataset.number) {
        firstCard.onclick = null
        secondCard.onclick = null

        firstCard = null
        secondCard = null

        flipedCardCount++

        if (flipedCardCount == 8) {
            gameIsOver()
        }

        disableField(false)
    } else {
        setTimeout(() => {
            firstCard.classList.remove(CLASS_NAME_TO_FLIP)
            secondCard.classList.remove(CLASS_NAME_TO_FLIP)

            firstCard = null
            secondCard = null

            disableField(false)
        }, 2000)
    }
}
function disableField(flag) {
    if (flag) cardContainer.style.pointerEvents = 'none'
    else cardContainer.style.pointerEvents = ''
}
function gameIsOver() {
    setTimeout(async () => {
        alert('game is over !')

        for (let index = 0; index < flashCards.length; index++) {
            flashCards[index].classList.remove(CLASS_NAME_TO_FLIP)
            flashCards[index].onclick = flipCard
        }
    }, 1000) 
}