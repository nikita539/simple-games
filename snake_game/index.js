const snake = document.getElementById('snake')

let interval = 1000;
let xStep = 10;
let yStep = 0;

document.onclick = changeDirection

function changeDirection() {
    xStep = xStep * -1
}

function moving() {

    setInterval(() => {

        snake.style.left = `${snake.offsetLeft + xStep}px`
        snake.style.top = `${snake.offsetTop + yStep}px`

        if ( snake.offsetLeft > window.innerWidth && xStep > 0 ) {
            snake.style.left = `${snake.offsetWidth * -1}px`
        }

        if ( snake.offsetLeft == (snake.offsetWidth * -1) && xStep < 0) {
            snake.style.left = `${window.innerWidth}px`
        }

    }, interval)

}

moving()