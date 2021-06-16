// let applePosX = Math.floor((Math.random() * canvas.height) + 40);
// let applePosY = Math.floor((Math.random() * canvas.width) + 40);

class Apple {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.size = 10;
    }

    // define the getters and setters
    getX() {
        return this.x;
    }
    setX(newX) {
        this.x = newX;
    }
    getY() {
        return this.y;
    }
    sety(newY) {
        this.y = newY;
    }
    drawApple(borderColor,fullColor,Xpos,Ypos) {
        // Check if the coord of the apple are in the canvas and draw the apple
        if (Xpos >= 0 && Xpos < canvas.width && Ypos >= 0 && Ypos < canvas.height) {
            setColors(borderColor,fullColor);
            drawRect(Xpos, Ypos,this.width,this.height);
        }
        else {
            // If not, reset coord of the apple until the coord are in the canvas
            this.y = Math.floor((Math.random() * canvas.height) + 21);
            this.x = Math.floor((Math.random() * canvas.width) + 21);
        }
    }
}