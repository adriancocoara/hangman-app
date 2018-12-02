const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');
const statusEl = document.querySelector('#status')
let game1 

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode);
    game1.makeGuess(guess);
    render()
})

const render = () => {
    puzzleEl.innerHTML= ''
    guessesEl.textContent = game1.statusMessage

    game1.puzzle.split('').forEach((letter) => {
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzleEl.appendChild(letterEl)
    })
}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()

// getPuzzle('2').then((puzzle) => {
//     console.log(puzzle)
// }).catch((error) => {
//     console.log(`Error: ${error}`)
// })

// getLocation().then((location) => {
//     console.log(`you are currently in ${location.city}, ${location.region}, ${location.city}.`)
// }).catch((error) => {
//     console.log(`Error: ${error}`)
// })