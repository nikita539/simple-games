const snake = document.getElementById('snake')

let int;
let interval = 100;
let xStep = 10;
let yStep = 0;

document.onkeydown = (event) => {

    if (event.key == "Enter") {
        if (int) {
            clearInterval(int)
            int = null
            return
        }

        int = moving()
    }

    changeDirection(event)
}

function changeDirection(event) {
    if (event.key == "ArrowUp") {
        yStep = -10
        xStep = 0
    }
    if (event.key == "ArrowDown") {
        yStep = 10
        xStep = 0
    }
    if (event.key == "ArrowLeft") {
        xStep = -10
        yStep = 0
    }
    if (event.key == "ArrowRight") {
        xStep = 10
        yStep = 0
    }
}

function moving() {

    const inter = setInterval(() => {

        snake.style.left = `${snake.offsetLeft + xStep}px`
        snake.style.top = `${snake.offsetTop + yStep}px`

        if ( snake.offsetLeft > window.innerWidth && xStep > 0 ) {
            snake.style.left = `${snake.offsetWidth * -1}px`
        }

        if ( snake.offsetLeft < (snake.offsetWidth * -1) && xStep < 0) {
            snake.style.left = `${window.innerWidth}px`
        }

        if (snake.offsetTop > window.innerHeight && yStep > 0) {
            snake.style.top = `${snake.offsetHeight * -1}px`
        }

        if (snake.offsetTop < (snake.offsetHeight * -1) && yStep < 0 ) {
            snake.style.top = `${window.innerHeight}px`
        }

    }, interval)

    return inter
}


function templater(template) { // <div>Hello {{someData}}</div>: String
    let html = template

    return function(data) { // {someData: "World !"}: Object<key<String>>
        const regExp = /{{\w*}}/gi

        while(html.match(regExp)) {
            html = html.replace(html.match(regExp)[0], data)
        }

        return html
    }
}



const tempalte = templater('<div>{{number}}{{number}}{{number}}</div>')

const result = tempalte("World!")

console.log(result)