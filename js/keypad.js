// keypad.js

class Keypad {
    constructor(buttons, keys) {
        this.buttons = buttons;
        this.keys = keys;
    }

    press = (key) => {
        this.highlight(key);
    }
    
    highlight = async (keyText) => {
        for (var i = 0; i < this.buttons.length; i++) {
            if (this.buttons[i].value.toLowerCase() == keyText) {
                // highlight
                this.buttons[i].classList.remove('bg-kp-btn');
                this.buttons[i].classList.add('bg-gray-800');
                // wait for 0.15 seconds
                await new Promise(r => setTimeout(r, 150));
                // remove highlight
                this.buttons[i].classList.add('bg-kp-btn');
                this.buttons[i].classList.remove('bg-gray-800');
            }
        }
    }
}
