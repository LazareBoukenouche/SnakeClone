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
            self.checkAppleCollision();
            snake.updateMovement();
            self.checkWallCollision();
            
            snake.drawSnakeFullBody();
            apple.drawApple();
            if (self.checkSnakeBodyCollision() === true || self.checkWallCollision()) {
                self.state = 3;
                snakeGame.checkGameState();
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
                this.apple.clearApple();
    		    this.apple.spawn();
                if (this.apple.spawn()) {
                    this.snake.grow();
                }
        }
    }


    checkSnakeBodyCollision() {
        let hadCollided = false;
        if (this.snake.touch > 2) {
            hadCollided = true;
        }
        else {
            hadCollided = false;
        }
        for (let i = 1;i< this.snake.body.length;i++) {
            if (this.snake.body[i].x === this.snake.body[0].x && this.snake.body[i].y === this.snake.body[0].y ) {
                this.snake.touch+=1;
            }
        }
        return hadCollided;
    }

    checkWallCollision() {
        let hasCollided = false;
        if (this.snake.body[0].x < 0) {
            // // this.snake.orientation = snakeOrientation.right;
            // this.snake.body.forEach((part,i) => {
            //     this.snake.clearPart(i);
            //     part.x = this.getWindow().width;
            // })
            hasCollided = true;
        }
        if (this.snake.body[0].x > this.getWindow().width - this.snake.width && this.snake.orientation === snakeOrientation.right) {
            // this.snake.orientation = snakeOrientation.left;
            // 
            hasCollided = true;
        }
        if (this.snake.body[0].y < 0 && this.snake.orientation === snakeOrientation.up) {
            // this.snake.orientation = snakeOrientation.down;
            // 
            hasCollided = true;
        }
        if (this.snake.body[0].y > this.getWindow().height && this.snake.orientation === snakeOrientation.down) {
            // this.snake.orientation = snakeOrientation.up;
            // 
            hasCollided = true;
        }
        console.log(hasCollided);
        return hasCollided;
    }
}