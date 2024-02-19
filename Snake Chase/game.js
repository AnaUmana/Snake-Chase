import { update as snakeUpdate, draw as snakeDraw, SnakeSpeed, getSnakeHead, snakeIntersection } from './Snake.js'
import {update as foodUpdate, draw as foodDraw,} from './food.js'
import { outsideGrid } from './grid.js'

let lastRender = 0
let gameOver = false
const game_Board = document.getElementById('game_Board')

function main(currentTime) {
    if (gameOver) {
        if (confirm('YOU LOSE! Press ok to restart')){
            window.location = '/'
        }
        return
    }
    window.requestAnimationFrame(main)
    const secSinceLastRender = (currentTime - lastRender) / 1000
    if (secSinceLastRender < 1 / SnakeSpeed)
    return

    lastRender = currentTime

    // Broken into two separate parts
    //update will move snake to correct position, update if snake ate the food to make snake longer or shorter
    //Draw will take the logic from update to then locate the snake and put the inputs where they need to be
    update()
    draw()
}
window.requestAnimationFrame(main)

function update() {
    snakeUpdate()
    foodUpdate()
    checkDeath()
}

function draw() {
    game_Board.innerHTML = ''
    snakeDraw(game_Board)
    foodDraw(game_Board)
}
function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}