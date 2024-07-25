// https://www.codingnepalweb.com/best-javascript-games-for-beginners/

// variables
const flashCards = document.getElementsByClassName('flash_card');
const cardContainer = document.getElementById('card_container');

let firstCard, secondCard;
let flipedCardCount = 0;

const CLASS_NAME_TO_FLIP = 'is_fliped'



for (let index = 0; index < flashCards.length; index++) {
    flashCards[index].onclick = flipCard
}

// functions
function flipCard(event) {

    if (firstCard) secondCard = event.currentTarget
    else firstCard = event.currentTarget
    
    event.currentTarget.classList.toggle(CLASS_NAME_TO_FLIP)
    event.currentTarget.onclick = null
    
    if (firstCard && secondCard) matchCards()
} 
function matchCards() {
    disableField(true)

    if (firstCard.querySelector('img').src == secondCard.querySelector('img').src) {
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

            firstCard.onclick = flipCard
            secondCard.onclick = flipCard

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

        shuffle()

        flipedCardCount = 0
    }, 800) 
}
function shuffle() { // might be improved. Algoritm is too predictable
    const images = cardContainer.querySelectorAll('img')
    
    for (let index = 0; index < images.length / 2; index++) { // How to count the 'some index' ?
        let currImge = images[index].src

        images[index].src = images[index == 0 ? 8 : index * 2].src

        images[index == 0 ? 8 : index * 2].src = currImge
    }
}

console.log(cardContainer.querySelectorAll('img'))