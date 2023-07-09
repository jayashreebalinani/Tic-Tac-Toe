
let playerwon = document.getElementById('playerwon')
let restartbtn = document.getElementById('restart')
let boxes = Array.from(document.getElementsByClassName('box'))

..

const otext = "O"
const xtext = "X"
let currentPlayer = xtext
let spaces = Array(9).fill(null)

const startgame = () => {
    boxes.forEach(box => box.addEventListener('click', boxClicked))
}

function boxClicked(e) {
    
    const id = e.target.id

     if(spaces[id] == null){
         spaces[id] = currentPlayer
        e.target.innerText = currentPlayer

        if(playerwin() !==false){
            playerwon.innerHTML = `${currentPlayer} has won!`
    
          
        }

        currentPlayer = currentPlayer == xtext ? otext : xtext
    }
}

const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function playerwin() {
    for (const condition of winningCombos) {
        let [a, b, c] = condition

        if(spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])) {
            return [a,b,c]
        }
    }
    return false
}

restartbtn.addEventListener('click', restart)

function restart() {
    spaces.fill(null)

    boxes.forEach( box => {
        box.innerText = ''
        
    })

    playerwon.innerHTML = ''

    currentPlayer = xtext
}

startgame()
