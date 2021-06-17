class Game {
    constructor(state,timeInterval) {
        this.state = state;
        this.timeInterval = timeInterval;
        this.snake = new Snake(canvas.width/2,canvas.height/2,10,10,10,0.0005,snakeOrientation.left,"#000000","#00FF00",3);
        // this.input = new Input("touchstart");
    }

    getState() {
        return this.state;
    }

    setState(newState) {
        this.state = newState;
    }

    start() {
        this.setState(gameState.ongoing);
        // this.input.loadTouchEventsFunction();
        // this.input.addTouchEvents();
        // this.input.handleStart("touchstart");
        this.ongoing();
    }
    getWindow() {
        let canvas = document.getElementById('canvas');
        return canvas;
    }
    getWindowContext() {
        let context = this.getWindow().getContext('2d');
        return context;
    }
    clearWindow() {
            // Remove everything on the canvas window and reset it to white
            this.getWindowContext().strokeStyle = "#FFFFFF";
            this.getWindowContext().fillStyle = "#FFFFFF";
            this.getWindowContext().fillRect(this.getWindow().x,this.getWindow().y,this.getWindow().width,this.getWindow().height);
            this.getWindowContext().strokeRect(this.getWindow().x,this.getWindow().y,this.getWindow().width,this.getWindow().height);
    }
    ongoing() {
        let self = this;
        let time = self.timeInterval;
        let snake = this.snake;
        let input = this.input;
        self.clearWindow();
        setTimeout(function onTick(time) {
            snake.updateMovement();
            if (snake.getOrientation() != 0) {
                console.log(snake.getOrientation());
            }
            snake.drawSnakeFullBody();
            // Call ongoing again
            self.ongoing();
            }, time)
    }
    // checkAppleCollision() {
    // 	if (snake[0].x < applePosX + appleWidth &&
    //         snake[0].x + snakeWidth > applePosX &&
    //         snake[0].y < applePosY + appleHeight &&
    //         snakeHeight + snake[0].y > applePosY) {
    // 		applePosX = Math.floor((Math.random() * canvas.height) + 20);
    //         applePosY = Math.floor((Math.random() * canvas.width) + 20);
    //         clearCanvas(applePosX,applePosY,20,20);
    //         snakeGrow();
    //     }
    // };

    // checkSnakeBodyCollision() {
    //     if (snake[0].x < snake[snake.length -1].x + snakeWidth &&
    //         snake[0].x + snakeWidth > applePosX &&
    //         snake[0].y < snake[snake.length -1].y + snakeHeight &&
    //         snakeHeight + snake[0].y > snake[snake.length -1].y){
    //         alert(0);
    //         }    
    // }

    // checkWallCollision() {
    //     if (snake[0].x === 0) {
    //         HORIZONTAL_SPEED = 10;
    //     }
    //     if (snake[0].x === canvas.width) {
    //         HORIZONTAL_SPEED = -10;
    //     }
    //     if (snake[0].y === 0) {
    //         VERTICAL_SPEED = 10;
    //     }
    //     if (snake[0].y === canvas.height) {
    //         VERTICAL_SPEED = -10;
    //     }
    // }

    // checkCollision() {
    //     checkAppleCollision();
    //     checkSnakeBodyCollision();
    //     checkWallCollision();
    // }
    
    // pause() {
    //     this.setState(gameState.pausing);
    //     if (HORIZONTAL_SPEED != 0 && VERTICAL_SPEED === 0 || HORIZONTAL_SPEED === 0 && VERTICAL_SPEED != 0){
    //         HORIZONTAL_SPEED = 0;
    //         VERTICAL_SPEED = 0;
    //     }
    // }

    // end() {
    //     this.setState(gameState.ending);
    //     clearCanvas(0, 0,canvas.width,canvas.height);
    //     setTimeout(function onTick(timeInterval) {
    //     setColors("#000000", "#FFFFFF");
    //     drawRect(canvas.width/4, canvas.height/5, 350,200);
    //     // write('You lost !', 'Press R for reset');
    //     end();
    //     }, timeInterval)
    // }
}