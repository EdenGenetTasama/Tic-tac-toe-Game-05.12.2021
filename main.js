const table = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

let availableCells = 9;

let currentPlayer = "X";

const toggleCurrentPlayer = () => {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

const handleClickOnDOM = (element, currentPlayer) => {
    element.innerHTML = `<p>${currentPlayer}</p>`;
}

const handleClickOnMemory = (row, column, currentPlayer) => {
    table[row][column] = currentPlayer;
    availableCells--;
}
const areEquals = (a, b, c) => {
    return a === b && b === c;
}
const cellIsNotEmpty = (cell) => cell !== null;

const onPlayerClick = () => {
    // תיקו
    if (availableCells === 0) {
        alert('TIE');
    }
    // שורות
    for (let i = 0; i < 3; i++) {
        if (areEquals(table[i][0], table[i][1], table[i][2]) &&
            cellIsNotEmpty(table[i][0])) {
            alert('THE WINNER IS ' + table[i][0])
        }
    }
    // עמודות
    for (let i = 0; i < 3; i++) {
        if (areEquals(table[0][i], table[1][i], table[2][i]) &&
            cellIsNotEmpty(table[0][i]))
            alert('THE WINNER IS ' + table[0][i])
    }

    // אלכסונים
    if (areEquals(table[0][0], table[1][1], table[2][2]) &&
        cellIsNotEmpty(table[0][0])) {
        alert('THE WINNER IS ' + table[0][0])
    }

    if (areEquals(table[0][2], table[1][1], table[2][0]) &&
        cellIsNotEmpty(table[0][2])) {
        alert('THE WINNER IS ' + table[0][2])
    }
}

// const cellsRef = Array.from(document.getElementsByClassName('cell'));
const cellsCollectionRef = document.getElementsByClassName('cell');
const cellsArrayRef = [...cellsCollectionRef];

cellsArrayRef.forEach(function(cell) {

    cell.addEventListener('click', function(event) {
        const clickedCell = event.target;
        const x = Number(clickedCell.getAttribute('data-x'));
        const y = +clickedCell.getAttribute('data-y');

        handleClickOnMemory(x, y, currentPlayer);
        handleClickOnDOM(clickedCell, currentPlayer);
        onPlayerClick()
        toggleCurrentPlayer();
    })
})