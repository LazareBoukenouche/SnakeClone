class Game {
    constructor(state,timeInterval) {
        this.state = state;
        this.timeInterval = timeInterval;
        this.snake = new Snake(canvas.width/2,canvas.height/2,10,10,10,10,snakeOrientation.left,"#000000","#00AA00",3);
        this.apple = new Apple(Math.floor((Math.random() * this.getWindow().height)),(Math.random() * this.getWindow().height));
    }

    getState() {
        return this.state;
    }

    setState(newState) {
        this.state = newState;
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
        let apple = this.apple;
        setTimeout(function onTick(time) {
            self.clearWindow();
            self.checkWallCollision();
            self.checkAppleCollision();
            snake.updateMovement();
            snake.drawSnakeFullBody();
            apple.drawApple();
            self.checkSnakeBodyCollision();
            if (self.checkSnakeBodyCollision() === true) {
                self.state = 3;
                self.getState();
            }
            // Call ongoing again
            self.ongoing();
            }, time)
    }
    checkAppleCollision() {
    	if (this.snake.body[0].x < this.apple.x + this.apple.size &&
            this.snake.body[0].x + this.snake.size > this.apple.x &&
            this.snake.body[0].y < this.apple.y + this.apple.size &&
            this.snake.size + this.snake.body[0].y > this.apple.y) {
    		this.apple.spawn();
            this.snake.grow();
        }
    };

    // checkSnakeBodyCollision() {
    //     if (this.snake.body[0].x < this.snake.body[this.snake.body.length -1].x + this.snake.size &&
    //         this.snake.body[0].x + this.snake.size > this.snake.size &&
    //         this.snake.body[0].y < this.snake.body[this.snake.body.length -1].y + this.snake.size &&
    //         this.snake.size + this.snake.body[0].y > this.snake.body[this.snake.body.length -1].y){
    //         alert(0);
    //     }    
    // }
    checkSnakeBodyCollision() {
        let hadCollided = false;
        if (this.snake.touch > 2) {
            hadCollided = true;
        }
        else {
            hadCollided = false;
        }
        // console.log("head : ",this.snake.body[0].x ,this.snake.body[0].y);
        for (let i = 1;i< this.snake.body.length;i++) {
            if (this.snake.body[i].x === this.snake.body[0].x && this.snake.body[i].y === this.snake.body[0].y ) {
                this.snake.touch+=1;
            }
        }
        return hadCollided;
    }

    checkWallCollision() {
        if (this.snake.body[0].x < 0 && this.snake.orientation === snakeOrientation.left) {
            // this.snake.orientation = snakeOrientation.right;
            this.snake.body[0].x = this.getWindow().width - this.snake.size;
        }
        if (this.snake.body[0].x === this.getWindow().width && this.snake.orientation === snakeOrientation.right) {
            // this.snake.orientation = snakeOrientation.left;
            this.snake.body[0].x = 0;
        }
        if (this.snake.body[0].y < 0 && this.snake.orientation === snakeOrientation.up) {
            // this.snake.orientation = snakeOrientation.down;
            this.snake.body[0].y = this.getWindow().height - this.snake.size;
        }
        if (this.snake.body[0].y > this.getWindow().height && this.snake.orientation === snakeOrientation.down) {
            // this.snake.orientation = snakeOrientation.up;
            this.snake.body[0].y = 0;
        }
    }

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