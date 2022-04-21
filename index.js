
let cards = []  

let sum = 0
let sumMain = document.querySelector("#sum-main") 

let hasBlackJack = false
let isAlive = false

let message = ""
let messageMain = document.getElementById("message-main")

let cardsMain = document.querySelector("#cards-main")

let player = {
    name: "Monica",
    chips: "200"
}

let playerMain = document.getElementById("player-main")
playerMain.textContent = player.name + ": $" + player.chips 

console.log(cards)

function getRandomCard() {
    let randomCard = Math.floor( Math.random()*13 ) + 1
    if (randomCard > 10) { 
        return 10 
    } else if (randomCard === 1) {
        return 11
    } else {
    return randomCard
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsMain.textContent = "Cards: " 

    for(let i = 0; i < cards.length; i++) {
        cardsMain.textContent += cards[i] + " "
    }

    sumMain.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Woohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You lose! You're out of the game. 😭"
        isAlive = false
    }

    messageMain.textContent = message
     
}

function newCard() {
    console.log("Drawing a new card from the deck")
    if (isAlive === true && hasBlackJack === false) {
        let newCard = getRandomCard()
        sum += newCard // reversing the order of these 2 variables fixed both of my if statements. Wild! 
        cards.push(newCard)
        renderGame()
    }
}
