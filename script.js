..
let playerwon = document.getElementById('playerwon')
let restartbtn = document.getElementById('restart')
let boxes = Array.from(document.getElementsByClassName('box'))
const otext = "O"
const xtext = "X"
let player = xtext
let spaces = Array(9).fill(null)
function startgame() {
    boxes.forEach(box => box.addEventListener('click', boxclicked))
}

function boxclicked(e) {
    
    const id = e.target.id

     if(spaces[id] == null){
         spaces[id] = player
        e.target.innerText = player

        if(playerwin() !==false){
            playerwon.innerHTML = `${player} has won!`
    
          
        }

        player = player == xtext ? otext : xtext
    }
}


const winning = [
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
    for (const condition of winning) {
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

    player = xtext
}

startgame()
