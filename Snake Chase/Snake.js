import { getInputDirection } from "./input.js"
export const SnakeSpeed = 5

 const Snake_Body = [ {x: 11, y: 11}]
 let newSegments = 0

 export function update() {
    addSegments()

    const inputDirection = getInputDirection()
    for (let i = Snake_Body.length - 2; i >= 0; i--) {
        Snake_Body[i + 1] = {...Snake_Body[i] }
    }
    Snake_Body[0].x += inputDirection.x
    Snake_Body[0].y += inputDirection.y
 }

 export function draw(game_Board) {
    Snake_Body.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake')
        game_Board.appendChild(snakeElement)
    })
 }

export function expandSnake(amount) {
    newSegments += amount
}
export function onSnake(position, { ignoreHead = false} = {}) {
    return Snake_Body.some((segment, index) => {
        if (ignoreHead && index === 0) return false
        return equalPositions(segment, position)
    })
}

export function getSnakeHead() {
    return Snake_Body[0]
}

export function snakeIntersection() {
    return onSnake(Snake_Body[0], {ignoreHead: true})
}

function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
}

function addSegments() {
    for (let i = 0; i < newSegments; i++) {
        Snake_Body.push({ ...Snake_Body[Snake_Body.length - 1] })
    }
    newSegments = 0
}
