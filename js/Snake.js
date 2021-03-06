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
        this.touch = 0;

        this.drawBodyParts = this.drawBodyParts.bind(this);
        this.snakeController = new SnakeController();

        this.goLeft = this.goLeft.bind(this);
        this.goUp = this.goUp.bind(this);
        this.goRight = this.goRight.bind(this);
        this.goDown = this.goDown.bind(this);
        this.updateMovement = this.updateMovement.bind(this);
        this.move = this.move.bind(this);

        this.snakeController.bindControl(snakeInput.arrowLeft, this.goLeft);
        this.snakeController.bindControl(snakeInput.arrowUp, this.goUp);
        this.snakeController.bindControl(snakeInput.arrowRight, this.goRight);
        this.snakeController.bindControl(snakeInput.arrowDown, this.goDown);
        this.snakeController.bindKeyControl("ArrowLeft",this.goLeft);
        this.snakeController.bindKeyControl("ArrowUp",this.goUp);
        this.snakeController.bindKeyControl("ArrowRight",this.goRight);
        this.snakeController.bindKeyControl("ArrowDown",this.goDown);
        // this.snakeController.bindControlDesktop(this);
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
        this.clearTrail();
    }
    move(xSpeed,ySpeed) {
        // The unshift() method adds one or more elements to the beginning 
        // of an array and 
        // returns the new length of the array.
        const head = {x:this.getBody()[0].x + xSpeed, y:this.getBody()[0].y 
        + ySpeed};
        this.getBody().unshift(head);
        // The pop() method removes the last element from an array and 
        //returns that element, 
        // and changes the length of the array.
        this.getBody().pop();
        return this.getBody()[0]; 
    }
    clearPart(i) {
        // Remove everything on the canvas window and reset it to white
        this.getWindowContext().strokeStyle = "#FFFFFF";
        this.getWindowContext().fillStyle = "#FFFFFF";
        this.getWindowContext().fillRect(this.body[i].x,this.body[i].y,this.width,this.height);
        this.getWindowContext().strokeRect(this.body[i].x,this.body[i].y,this.width,this.height);
    }
    clearTrail() {
        this.edgeColor = "#FFFFFF";
        // Remove everything on the canvas window and reset it to white
        this.getWindowContext().strokeStyle =  this.edgeColor;
        this.getWindowContext().fillStyle = "#FFFFFF";
        this.getWindowContext().fillRect(this.body[this.body.length-1].x,this.body[this.body.length-1].y,this.size,this.size);
        this.getWindowContext().strokeRect(this.body[this.body.length-1].x,this.body[this.body.length-1].y,this.size,this.size);
    }
    updateMovement() {
        switch (this.orientation) {
            case snakeOrientation.left:
                this.move(-this.speed,0);
                break;
            case snakeOrientation.up:
                this.move(0,-this.speed);
                break;
            case snakeOrientation.right:
                this.move(this.speed,0);
                break;
            case snakeOrientation.down:
                this.move(0,this.speed);
                break;
        }
    }
    goLeft() {
        if (this.orientation != snakeOrientation.right  && this.body[0].y > 0 && this.body[0].y  < this.getWindow().height) {
            this.orientation = snakeOrientation.left;
        }
    }
    goUp() {
        if (this.orientation != snakeOrientation.down && this.body[0].x > 0 && this.body[0].x  < this.getWindow().width) {
            this.orientation = snakeOrientation.up;
        }
    }
    goRight() {
        if (this.orientation != snakeOrientation.left && this.body[0].y > 0 && this.body[0].y  < this.getWindow().height) {
            this.orientation = snakeOrientation.right;
        }
    }
    goDown() {
        if (this.orientation != snakeOrientation.up && this.body[0].x > 0 && this.body[0].x  < this.getWindow().width) {
            this.orientation = snakeOrientation.down;
        }
    }
    grow() {
        if (this.body[0].x === this.body[this.body.length -1].x) {
            this.body.push({x: this.body[this.body.length -1].x - 20, y:this.body[0].y});
            }
        else if (this.body[0].y === this.body[this.body.length -1].y) {
            this.body.push({x:this.body[0].x, y: this.body[this.body.length -1].y - 20});
        }
        console.log(this.body);
    }
}
    
    
