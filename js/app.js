// app.js

/* ---------------------------------------------------------------- */

const MAX_LETTERS = 5
const MAX_GUESSES = 6
const ALPHABET = Array.from(Array(26)).map((e, i) => i + 97).map((x) => String.fromCharCode(x));
const KEYPAD_KEYS = ALPHABET.concat(['enter', 'backspace']);

var keypadButtons = document.getElementsByClassName("kp-btn");
var guess = '';
var guessAttempts = [];

let keypad = new Keypad(keypadButtons, KEYPAD_KEYS);

/* ---------------------------------------------------------------- */

// methods here

/* ---------------------------------------------------------------- */

// bind mouse clicks to keypad buttons
for (var i = 0; i < keypad.buttons.length; i++) {
    keypad.buttons[i].addEventListener("click", function () {
        var key = this.value.toLowerCase();
        keypad.press(key);
    });
}

// bind keyboard presses to keypad buttons
document.addEventListener("keydown", function (event) {
    var key = event.key.toLowerCase();
    if(keypad.keys.includes(key)) {
        keypad.press(key);
    }
});
