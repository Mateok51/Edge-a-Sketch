const gameContainer = document.querySelector("#game-container")
const startGame = document.querySelector("#startGameButton")
const errorMsg =
  "Invalid value, please input a numeric value between 0 and 100!"
startGame.addEventListener("click", squareNbmInit)
const squares = []
let squareNumber
let randomColors = document.querySelector("#rndColors")
let blueHue = document.querySelector("#blueHue")
blueHue.addEventListener("click", blueHueSelector)
randomColors.addEventListener("click", rainbowSelector)
let rainbow = false

function rainbowSelector() {
  rainbow = true
}
function blueHueSelector() {
  rainbow = false
}

//Remove past grid
//Generate a input message, and display error if number not correct
function squareNbmInit() {
  while (gameContainer.firstChild) {
    gameContainer.removeChild(gameContainer.lastChild)
  }
  squareNumber = prompt("Please input the number of squares!")
  if (!isInt(squareNumber) || squareNumber < 0 || squareNumber > 100) {
    alert(errorMsg)
    squareNbmInit()
  } else {
    createSquares(squareNumber)
  }
}
//Check if the value is a number
function isInt(value) {
  var er = /^-?[0-9]+$/
  return er.test(value)
}
//Create a grid of input numbers
//Change the color on hover
function createSquares(squareNumber) {
  for (let i = 0; i < squareNumber * squareNumber; i++) {
    squares[i] = document.createElement("div")
    squares[i].setAttribute("class", "squares")
    let squareDim = 700 / squareNumber
    squares[i].style.width = `${squareDim}px`
    squares[i].style.height = `${squareDim}px`
    squares[i].addEventListener("mouseover", changeColor)
    gameContainer.appendChild(squares[i])
  }
}

//Change the color function
function changeColor() {
  if (rainbow === true) {
    this.style.background = getRandomColor()
  } else if (rainbow === false) {
    this.style.background = "blue"
  }
}
//Generate a random color
function getRandomColor() {
  var letters = "0123456789ABCDEF"
  var color = "#"
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}
