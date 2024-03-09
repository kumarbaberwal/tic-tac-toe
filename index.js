let boxes = document.querySelectorAll('.box');
let reset = document.querySelector('.reset');
let newGame = document.querySelector('.new');
let msgContainer = document.querySelector('.msg-container');
let winner = document.querySelector('.winner');

// console.log(boxes);

let turnO = true;

const resetGame = () => {
    enableBoxes();
    turnO = true;
};

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (turnO) {
            box.innerText = 'X';
            turnO = false;
        }
        else {
            box.innerText = 'O';
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    };
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = '';
        msgContainer.classList.add('hidden');
    };
};

const showWinner = (winner1) => {
    DelayNode
    winner.innerText = 'Congrats! \nWinner is: ' + winner1;
    msgContainer.classList.remove('hidden');
    disableBoxes();
}

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != '' && pos2Val != '' && pos3Val != '') {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                setTimeout(() => {
                    showWinner(pos1Val);
                }, 500);
            };
        };
    };
};

newGame.addEventListener('click', resetGame);
reset.addEventListener('click', resetGame);

