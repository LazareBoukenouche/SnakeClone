const snakeInput = {
    "arrowLeft": 0,
    "arrowUp": 1,
    "arrowRight": 2,
    "arrowDown": 3
}

const snakeInputDesktop = {
    "ArrowLeft": 0,
    "ArrowUp": 1,
    "ArrowRight": 2,
    "ArrowDown": 3
}

class SnakeController {
    constructor() {
        this.evt = "touchstart";
        this.arrowLeft = document.querySelector('.arrowLeft');
        this.arrowUp = document.querySelector('.arrowUp');
        this.arrowRight = document.querySelector('.arrowRight');
        this.arrowDown = document.querySelector('.arrowDown');
        this.bindControl = this.bindControl.bind(this);
    }

    bindControl(input, snakeMethod) {
        let element;
        switch (input) {
            case snakeInput.arrowLeft:
                element = this.arrowLeft;
                break;
            case snakeInput.arrowUp:
                element = this.arrowUp;
                break;
            case snakeInput.arrowRight:
                element = this.arrowRight;
                break;
            case snakeInput.arrowDown:
                element = this.arrowDown;
                break;
        }
        if(element) {
            element.addEventListener("touchstart",snakeMethod,false);
            
        }
    }

    bindControlDesktop(target) {
        // // Creating keyboard events with the Char codes of the keyboard
        document.onkeydown = function(e) {
        e.preventDefault();
        switch (e.code) {
        // Keyboard keys for changing the direction of the snake
            //Left arrow
            case 'ArrowLeft':
                target.goLeft();
                break;
            //Up arrow
            case 'ArrowUp':
                target.goUp();
                break;
            //Right arrow
            case 'ArrowRight':
                target.goRight();
                break;
            //Down arrow
            case 'ArrowDown':
                target.goDown();
                break;
            }
        };
    }
}
