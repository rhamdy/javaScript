let boxes = Array.from(document.getElementsByClassName('box'))
let playerOne = document.querySelector('[score-1]')
let playerTwo = document.querySelector('[score-2]')
let restartBtn = document.querySelector('[restart]')

const oText = "O"
const xText = "X"

let currentPlayer = xText
let spaces = Array(9).fill(null)

const startGame = () =>{
    boxes.forEach(box => box.addEventListener('click', boxClicked))
}
restartBtn.addEventListener('click',  restart)

function restart()  {
    spaces.fill(null)

    boxes.forEach(box =>{
        box.innerText = ''
    })
    playerOne.innerText = 0
    playerTwo.innerText = 0
    currentPlayer = xText   

}
function boxClicked(e){
    const id = e.target.id
    if(!spaces[id]){
        spaces[id] = currentPlayer
        e.target.innerText = currentPlayer
        playerWon()
        currentPlayer = currentPlayer == xText ? oText : xText
    }
}
const winningCombin = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
function playerWon(){
    for(const condition of winningCombin){
        let [a,b,c] = condition

        if(spaces[a] && spaces[a] == spaces[b] && spaces[a] == spaces[c]){
            if (spaces [a] == xText){
                playerOne.innerText = "winner"
                return
            }else if (spaces [a] == oText){
                playerTwo.innerText = "winner"
                return
            }
        }
}
}
startGame()