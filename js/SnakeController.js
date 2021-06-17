const snakeInput = {
    "arrowLeft": 0,
    "arrowUp": 1,
    "arrowRight": 2,
    "arrowDown": 3
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
                console.log('LEFT !');
                break;
            case snakeInput.arrowUp:
                element = this.arrowUp;
                console.log('UP !');
                break;
            case snakeInput.arrowRight:
                element = this.arrowRight;
                console.log('RIGHT !');
                break;
            case snakeInput.arrowDown:
                element = this.arrowDown;
                console.log('DOWN !');
                break;
        }
        if(element) {
            element.addEventListener("touchstart",snakeMethod,false);
            
        }
        
        
    }

 // handleDesktopInputs() {
    //         // // Creating keyboard events with the Char codes of the keyboard
    //         document.onkeydown = function(e) {
    //           e.preventDefault();
    //           switch (e.keyCode) {
    //           // Keyboard keys for changing the direction of the snake
            
    //               //Left arrow
    //               case 37:
    //                   snake.turn("left");
    //                   break;
    //               //Up arrow
    //               case 38:
    //                     snake.turn("up");
    //                   break;
    //               //Right arrow
    //               case 39:
    //                     snake.turn("right");
    //                   break;
    //               //Down arrow
    //               case 40:
    //                   snake.turn("down");
    //                   break;
    //           }
    //         };
    //     }
}
