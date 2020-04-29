let squareNumber = 256;

for (x = 0; x < squareNumber; x++) {
    const board = document.createElement('div');
    board.className = 'square';
    board.setAttribute("id", "squareID");

    document.getElementById('board').appendChild(board);
};

const squareSelection = document.querySelector('#squareSelection');
squareSelection.addEventListener('click', () => {
    setNumber();
    
    resetDiv();

    addDiv();

    const hoverSquares = document.querySelectorAll('#squareID');
    hoverSquares.forEach(hoverSquares => hoverSquares.addEventListener('mouseover', () => {
    hoverSquares.classList.add('squareHover');
    hoverSquares.classList.remove('square');
    }))
});

const resetColor = document.querySelector('#reset');
resetColor.addEventListener('click', () => {
    const squares = document.querySelectorAll('#squareID');
    squares.forEach(squares => squares.classList.remove('squareHover'));
    squares.forEach(squares => squares.classList.remove('square'));
    squares.forEach(squares => squares.classList.add('square'));
});

const hoverSquares = document.querySelectorAll('#squareID');
hoverSquares.forEach(hoverSquares => hoverSquares.addEventListener('mouseover', () => {
    hoverSquares.classList.add('squareHover');
    hoverSquares.classList.remove('square');
}))

function setNumber() {
    number = parseInt(prompt("¿Cuántos recuadros quieres que tenga cada fila?", ""), 10);

    if (typeof number == 'number' && number < 1) {
        squareNumber = 1;
        const boardChange = document.getElementById('board').style.gridTemplateColumns = "repeat(" + number + ", 1fr)";
    } else if (typeof number == 'number' && number >= 1) {
        squareNumber = number * number;
        const boardChange = document.getElementById('board').style.gridTemplateColumns = "repeat(" + number + ", 1fr)";
    } else {setNumber()};

};

function resetDiv() {
    const elements = document.querySelectorAll('#squareID');
    elements.forEach(elements => elements.remove())
};

function addDiv() {
    for (x = 0; x < squareNumber; x++) {
        const board = document.createElement('div');
        board.className = 'square';
        board.setAttribute("id", "squareID");
    
        document.getElementById('board').appendChild(board);
    };
};

