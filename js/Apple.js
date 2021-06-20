class Apple {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.size = 5;
        this.color = "#FF0000";
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
    setY(newY) {
        this.y = newY;
    }
    getWindow() {
        let canvas = document.getElementById('canvas');
        return canvas;
    }
    getWindowContext() {
        let context = this.getWindow().getContext('2d');
        return context;
    }
    drawApple() {
        // Check if the coord of the apple are in the canvas and draw the apple
        if (this.x >= 0 && this.x < this.getWindow().width && this.y >= 0 && this.y < this.getWindow().height) {
            this.getWindowContext().strokeStyle = this.color;
            this.getWindowContext().fillStyle = this.color;
            this.getWindowContext().fillRect(this.x, this.y, this.size, this.size);
            this.getWindowContext().strokeRect(this.x, this.y, this.size, this.size);
        }
        else {
            // If not, reset coord of the apple until the coord are in the canvas
            this.y = Math.floor((Math.random() * canvas.height) + 21);
            this.x = Math.floor((Math.random() * canvas.width) + 21);
        }
    }
    spawn() {
        this.x = Math.floor((Math.random() * this.getWindow().width));
        this.y = Math.floor((Math.random() * this.getWindow().height));
    }
}