let randomNumber1 = Math.floor(Math.random() * 6 ) + 1
let randomNumber2 = Math.floor(Math.random() * 6 ) + 1

let newDice = document.querySelector('.img1')
newDice.setAttribute("src", "images/dice" + randomNumber1 + ".png")

let newDice2 = document.querySelector('.img2')
newDice2.setAttribute("src", "images/dice" + randomNumber2 + ".png")

// let refresh = document.querySelector('h1')
// refresh. = window.location.reload()

if(randomNumber1 > randomNumber2)
{
    newText = document.querySelector('h1')
    newText.innerHTML = "Player 1 wins!🚩"
}
else if (randomNumber2 > randomNumber1)
{
    newText2 = document.querySelector('h1')
    newText2.innerHTML = "Player 2 wins!🚩"
}
else
{
    newText3 = document.querySelector('h1')
    newText3.innerHTML = "🚩Draw!🚩"
}