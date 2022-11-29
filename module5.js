// create 2 variables - firstName and lastName Kyle Dooley 11/15/2022

/*let firstName = "Kyle"
let lastName = "Dooley"

// concatenate two var into third - fullName

let fullName = firstName + " " + lastName

// log fullName to console

console.log(fullName)

// create function that logs "Hi there, Linda!" Kyle Dooley 11/15/2022

let theName = "Linda"
let greeting = "Hi there"

function blah() {
    console.log(greeting + ", " + theName + "!")
}

blah()

// create 2 functions, add3Points() and remove1Point() then change
// myPoint variable

let myPoints = 3

function add3Points() {
    myPoints += 3
}

function remove1Point() {
    myPoints -= 1
}

add3Points()
add3Points()
add3Points()

remove1Point()
remove1Point()

// myPoints = 10 Kyle Dooley 11/15/2022
console.log(myPoints)

// what will log out from lines Kyle Dooley 11/15/2022

console.log("2" + 2) // "22"
console.log(11 + 7) // 18
console.log(6 + "5") // "65"
console.log("My points: " + 5 + 9) // "My points: 59"
console.log(2 + 2) // 4
console.log("11" + "14") // "1114"

// click purchase button, output "Something went wrong, please try again"
// id = "error" Kyle Dooley 11/15/2022

let errorParagraph = document.getElementById("error")

function purchase() {
    errorParagraph.textContent = "Something went wrong, please try again"
}

// create 4 math functions, call correct function when button is clicked
// perform calculation using num1 and num2
// output in paragraph id = "sum-el"

let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let sumEl = document.getElementById("sum-el")
function add() {
    let result = num1 + num2
    sumEl.textContent = "Sum: " + result
}

function subtract() {
    let result = num1 - num2
    sumEl.textContent = "Sum: " + result
}

function divide() {
    let result = num1 / num2
    sumEl.textContent = "Sum: " + result
}

function multiply() {
    let result = num1 * num2
    sumEl.textContent = "Sum: " + result
}*/

// Scoreboard Kyle Dooley 11/15/2022

let homeCount = 0
let guestCount = 0
let homeScoreDisplay = document.getElementById("homeScore")
let guestScoreDisplay = document.getElementById("guestScore")

function homeAddPoint() {
    homeCount = homeCount + 1
    homeScoreDisplay.innerText = homeCount
}

function homeAddTwoPoints() {
    homeCount = homeCount + 2
    homeScoreDisplay.innerText = homeCount
}

function homeAddThreePoints() {
    homeCount = homeCount + 3
    homeScoreDisplay.innerText = homeCount
}

function guestAddOnePoint() {
    guestCount = guestCount + 1
    guestScoreDisplay.innerText = guestCount
}

function guestAddTwoPoints() {
    guestCount = guestCount + 2
    guestScoreDisplay.innerText = guestCount
}

function guestAddThreePoints() {
    guestCount = guestCount + 3
    guestScoreDisplay.innerText = guestCount
}

function reset() {
    homeCount = 0
    guestCount = 0
    homeScoreDisplay.innerText = homeCount
    guestScoreDisplay.innerText = guestCount
}