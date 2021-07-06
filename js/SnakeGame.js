const gameState = {
    "starting": 0,
    "ongoing": 1,
    "pausing": 2,
    "ending": 3,
    "reset":4
};


class SnakeGame {
    constructor() {

        this.menuStartButton = document.querySelector('.play');
        this.resetButton = document.querySelector(".reset");
        this.startingCount = 1;

        this.game = new Game(gameState.ongoing,350);
        // this.snake = new Snake(canvas.width/2,canvas.height/2,10,10,10,10,"left","#000000","#00FF00",3);

        //binding this to the method of the class
        this.launch = this.launch.bind(this);
        this.addClickEventToMenuStartButton = this.addClickEventToMenuStartButton.bind(this);
        this.showmenu = this.showMenu.bind(this);
        this.hideMenu = this.hideMenu.bind(this);
        this.showCanvas = this.showCanvas.bind(this);
        this.hideCanvas = this.hideCanvas.bind(this);
        this.showControlsScreen = this.showControlsScreen.bind(this);
        this.hideControlsScreen = this.showControlsScreen.bind(this);
        this.start = this.start.bind(this);
        // this.reset = this.reset.bind(this);
        this.checkGameState();
        

    }

    launch() {
        this.addClickEventToMenuStartButton();
    }

    addClickEventToMenuStartButton() {
        this.menuStartButton.addEventListener('click',this.start);
    }
    
    showMenu() {
        document.querySelector("#main").style.display = 'block';
    }

    hideMenu() {
        document.querySelector("#main").style.display = 'none';
    }

    showCanvas() {
        canvas.style.display = "block";
    }

    hideCanvas() {
        canvas.style.display = "none";
    }

    showControlsScreen() {
        document.querySelector(".controls").style.display = 'grid';
    }

    hideControlsScreen() {
        document.querySelector(".controls").style.display = 'none';
    }
    showGameOverScreen() {
        document.querySelector("#game-over-screen").style.display = "block";
        this.resetButton.addEventListener('click',this.reset);
    }
    hideGameOverScreen() {
        document.querySelector("#game-over-screen").style.display = "none";
    }
    end() {
        this.hideCanvas();
        if (document.querySelector('.wrapper-canvas').clientWidth < 1200) {
            this.hideControlsScreen();
        }
        this.showGameOverScreen();
    }

    // reset() {
    //     this.startingCount = 0;
    //     this.hideMenu();
    //     this.showCanvas();
    //     this.hideGameOverScreen();
    //     if (document.querySelector('.wrapper-canvas').clientWidth < 1200) {
    //         this.showControlsScreen();
    //     }
    //     this.game.ongoing();
    // }

    start() {
        this.startingCount = 0;
        this.hideMenu();
        this.showCanvas();
        if (document.querySelector('.wrapper-canvas').clientWidth < 1200) {
            this.showControlsScreen();
        }
        this.game.ongoing();

    }
    checkGameState() {
        switch (this.game.state) {
            case gameState.ongoing:
                this.launch();
                break;
            case gameState.pausing:
                this.game.timeInterval = 0;
                break;
            case gameState.ending:
                this.end();
                break;
            // case gameState.reset:
            //     this.reset();
            //     break;
        }
    }
       
    
}


let snakeGame = new SnakeGame();



