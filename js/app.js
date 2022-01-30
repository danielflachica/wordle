// app.js

/* ---------------------------------------------------------------- */

const MAX_LETTERS = 5
const MAX_GUESSES = 6
const ALPHABET = Array.from(Array(26)).map((e, i) => i + 97).map((x) => String.fromCharCode(x));
const KEYPAD_KEYS = ALPHABET.concat(['enter', 'backspace']);

var keypadButtons = document.getElementsByClassName("kp-btn");
var gridCellContainers = document.getElementsByClassName("grid-cell");
var guess = '';
var guessAttempts = [];

let keypad = new Keypad(keypadButtons, KEYPAD_KEYS);
let board = new Board(MAX_LETTERS, MAX_GUESSES, gridCellContainers);

/* ---------------------------------------------------------------- */

// methods here
let render = (key) => {
    keypad.press(key);

    // handle alpha keys
    if (ALPHABET.includes(key)) {
        board.addToGrid(key);
        board.incrementActiveCell();
    }
    // handle action keys (i.e. ['enter', 'backspace'])
    else {
        if (key.toLowerCase() == 'backspace') {
            board.decrementActiveCell();
            board.removeLastLetter();
        }
        if (key.toLowerCase() == 'enter') {
            console.log('Enter action required');
        }
    }
    
    board.update();
}

/* ---------------------------------------------------------------- */

// initialize grid object
board.initGrid();

// bind mouse clicks to keypad buttons
for (var i = 0; i < keypad.buttons.length; i++) {
    keypad.buttons[i].addEventListener("click", function () {
        var key = this.value.toLowerCase();
        render(key);
    });
}

// bind keyboard presses to keypad buttons
document.addEventListener("keydown", function (event) {
    var key = event.key.toLowerCase();
    if(keypad.keys.includes(key)) {
        render(key);
    }
});
