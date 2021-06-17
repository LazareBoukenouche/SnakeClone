const snakeOrientation = {
    "left": 0,
    "up": 1,
    "right": 2,
    "down": 3
};

class Snake {
    constructor(x,y,size,width,height,speed,orientation,edgeColor,innerColor,nbParts) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.orientation = orientation;
        this.edgeColor = edgeColor;
        this.innerColor = innerColor;
        this.nbParts = nbParts;
        this.body = [
            {x: this.x-this.size*0, y: this.y},
            {x: this.x-this.size*1, y: this.y},
            {x: this.x-this.size*2, y: this.y},
            {x: this.x-this.size*3, y: this.y},
            ];

        this.drawBodyParts = this.drawBodyParts.bind(this);
        this.snakeController = new SnakeController();

        this.goLeft = this.goLeft.bind(this);
        this.goUp = this.goUp.bind(this);
        this.goRight = this.goRight.bind(this);
        this.goDown = this.goDown.bind(this);
        this.updateMovement = this.updateMovement.bind(this);

        this.snakeController.bindControl(snakeInput.arrowLeft, this.goLeft);
        this.snakeController.bindControl(snakeInput.arrowUp, this.goUp);
        this.snakeController.bindControl(snakeInput.arrowRight, this.goRight);
        this.snakeController.bindControl(snakeInput.arrowDown, this.goDown);
        

        
    }

    // define the getters and setters
    getX() {
        return this.x;
    }
    setX(newX) {
        this.x = newX;
    }
    getWidth() {
        return this.width;
    }
    getHeight() {
        return this.height;
    }
    getY() {
        return this.y;
    }
    sety(newY) {
        this.y = newY;
    }
    getSpeed() {
        return this.speed;
    }
    setSpeed(newSpeed) {
        this.speed = newSpeed;
    }
    getOrientation() {
        return this.orientation;
    }
    setOrientation(newOrientation) {
        this.orientation = newOrientation;
    }
    getEdgeColor() {
        return this.edgeColor;
    }
    setEdgeColor(newEdgeColor) {
        this.edgeColor = newEdgeColor;
    }
    getInnerColor() {
        return this.innerColor;
    }
    setInnerColor(newInnerColor) {
        this.innerColor = newInnerColor;
    }
    getNbParts() {
        this.nbParts = nbParts;
    }
    getBody() {
        return this.body;
    }
    getWindow() {
        let canvas = document.getElementById('canvas');
        return canvas;
    }
    getWindowContext() {
        let context = this.getWindow().getContext('2d');
        return context;
    }
    drawSnakeFullBody() {
        this.getBody().forEach(this.drawBodyParts);
    }
    drawBodyParts(part) {
        this.getWindowContext().strokeStyle = this.getEdgeColor();
        this.getWindowContext().fillStyle = this.getInnerColor();
        this.getWindowContext().fillRect(part.x, part.y, this.width, this.height);
        this.getWindowContext().strokeRect(part.x, part.y, this.width, this.height);
    }
    move(xSpeed,ySpeed) {
        // The unshift() method adds one or more elements to the beginning 
        // of an array and 
        // returns the new length of the array.
        let head = {x:this.getBody()[0].x + xSpeed, y:this.getBody()[0].y 
        + ySpeed};
        this.getBody().unshift(head);
        // The pop() method removes the last element from an array and 
        //returns that element, 
        // and changes the length of the array.
        this.getBody().pop();
        return this.getBody()[0]; 
    }
    // turn(orientation) {
    //     this.orientation = orientation;
    //     return this.orientation;
    // }
    updateMovement() {
        switch (this.orientation) {
            case snakeOrientation.left:
                this.move(-10,0);
                break;
            case snakeOrientation.up:
                this.move(0,-10);
                break;
            case snakeOrientation.right:
                this.move(10,0);
                break;
            case snakeOrientation.down:
                this.move(0,10);
                break;
        }
        // if (snake.orientation === "left") {
        //         snake.move(-10,0);
        //     }
        //     else if (this.orientation === "up") {
        //         snake.move(0,10);
        //     }
        //     else if (this.orientation === "right") {
        //         snake.move(20,0);
        //     }
        //     else if (this.orientation === "down") {
        //         snake.move(0,-20);
        //     }
    }

    goLeft() {
        this.orientation = snakeOrientation.left;
        console.log("goleft");
    }
    goUp() {
        this.orientation = snakeOrientation.up;
        console.log("goUp");
    }
    goRight() {
        this.orientation = snakeOrientation.right;
        console.log("golright");
    }
    goDown() {
        this.orientation = snakeOrientation.down;
        console.log("goDown");
    }

}
    
        
    
    // function snakeGrow() {
    //     if (snake[0].x === snake[snake.length -1].x) {
    //         snake.push({x: snake[snake.length -1].x - 20, y:snake[0].y});
    //         clearCanvas(snake[snake.length -1].x - 20,snake[0].y,snakeWidth,snakeHeight);
    //         }
    //     else if (snake[0].y === snake[snake.length -1].y) {
    //         snake.push({x:snake[0].x, y: snake[snake.length -1].y - 20});
    //         clearCanvas(snake[0].x,snake[snake.length -1].y - 20,snakeWidth,snakeHeight);
    //     }
    // };

    

    // function changeDirectionX(hSpeed,vSpeed){
    //     if (snake[0].y === snake[snake.length -1].y && HORIZONTAL_SPEED === hSpeed && VERTICAL_SPEED === vSpeed){
    //                     HORIZONTAL_SPEED = hSpeed;
    //                     VERTICAL_SPEED = vSpeed;
    //                     }
    //                 else {
    //                     HORIZONTAL_SPEED = -hSpeed;
    //                     VERTICAL_SPEED = -vSpeed;
    //                 }
    //     };
        
    //     // Function who change the verticality
    //     function changeDirectionY(hSpeed,vSpeed){
    //     if (snake[0].y === snake[snake.length -1].y && HORIZONTAL_SPEED === hSpeed && VERTICAL_SPEED === vSpeed){
    //                     HORIZONTAL_SPEED = hSpeed;
    //                     VERTICAL_SPEED = vSpeed;
    //                     }
    //                 else {
    //                     HORIZONTAL_SPEED = -hSpeed;
    //                     VERTICAL_SPEED = vSpeed;
    //                 }
    //     };
