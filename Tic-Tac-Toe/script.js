//constants to identify game board locations
const playerMessage = document.getElementById('player-message');
const newGameBtn = document.getElementById('new-game-btn');
newGameBtn.addEventListener('click', gameReset);
const gameBoxes = Array.from(document.getElementsByClassName('box'));

const O = 'O';
const X = 'X';
let currentPlayer = X;
const spaces = Array(9).fill(null);

let startGame = () => {
    gameBoxes.forEach(box => box.addEventListener('click', boxClicked))
}

function boxClicked(e){
    let id = e.target.id;
    if(!spaces[id]){
        spaces[id] = currentPlayer;
        e.target.innerText = currentPlayer
    }
    checkWinner();
    currentPlayer = currentPlayer == X ? O : X;
    
 
}
const winCondArr = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function checkWinner() {
    for(const condition of winCondArr){
        let [a,b,c] = condition;
        if(spaces[a] == 'X' && spaces[b] == 'X' && spaces[c] == 'X'){
            playerMessage.innerText = 'Player 1 Wins'
        } else if(spaces[a] == 'O' && spaces[b] == 'O' && spaces[c] == 'O'){
            playerMessage.innerText = 'Player 2 Wins'
        }

    }
    return
}

startGame()
//functions to evaluate winner

function gameReset(){
    spaces.fill(null);
    gameBoxes.forEach(box => box.innerText = '');
    playerMessage.innerHTML = "Tic Tac Toe";
    currentPlayer = X
}

