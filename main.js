let step = 'X';
let gameWho = document.getElementById('gameWho');
gameWho.textContent = 'Игрок 1 Крестики'
let winner = '';




const who = () => {
    
}

who();

let gameItem = document.querySelectorAll('.gameItem');
console.log(gameItem);
let counter = 0;

gameItem.forEach((item) => {

})


// массив выйгрышных комбинаций 
let win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
// написать функции проверки
let crossWin = () => {
    for (let combination of win) {
        let [a, b, c] = combination;
        if (gameItem[a].textContent && 
            gameItem[a].textContent === gameItem[b].textContent &&
            gameItem[a].textContent === gameItem[c].textContent) {
            return gameItem[a].textContent;
        }
    }
    return null;
}


let circleWin = () => {

}

let noWin = () => {

}

// присвоить значения элементам страницы
let Xod = (item) => {
    if (item.textContent || winner) {
        return;
    }
    item.textContent = step;
    item.classList.add(step === 'X' ? 'player1cross' : 'player2circle');
    counter++;
    winner = crossWin();
    if (winner) {
        gameWho.textContent = '';
        document.getElementById('spanWin').textContent = `Игрок ${winner === 'X' ? '1 Крестики' : '2 Нолики'} выиграл!`;
        document.getElementById('Winner').style.display = 'flex';
    } else if (counter === 9) {
        gameWho.textContent = '';
        document.getElementById('spanWin').textContent = 'Ничья!';
        document.getElementById('Winner').style.display = 'flex';
    } else {
        step = step === 'X' ? 'O' : 'X';
        gameWho.textContent = `Игрок ${step === 'X' ? '1 Крестики' : '2 Нолики'}`;
    }
}

// Присвоить событие клика элементам
gameItem.forEach((item) => {
    item.addEventListener('click', () => Xod(item));
});

// функция завершения игра
let endGame = () => {
    gameItem.forEach((item) => {
        item.textContent = '';
        item.classList.remove('player1cross', 'player2circle');
    });
    document.getElementById('Winner').style.display = 'none';
    counter = 0;
    winner = '';
    step = 'X';
    gameWho.textContent = 'Игрок 1 Крестики';
}

btnNewGame.addEventListener('click', () => {
    endGame();
})

