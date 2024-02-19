import { onSnake, expandSnake} from './Snake.js'
import { randomGridPosition } from './grid.js'

let food = getRandomFoodPosition()
const Expansion_Rate = 1

export function update() {
    if (onSnake(food)) {
        expandSnake(Expansion_Rate)
        food = getRandomFoodPosition()
    }
}

export function draw(game_Board) {
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    game_Board.appendChild(foodElement)
}

function getRandomFoodPosition() {
    let FoodPosition
    while (FoodPosition == null || onSnake(FoodPosition)) {
        FoodPosition = randomGridPosition()
    }
    return FoodPosition
}

