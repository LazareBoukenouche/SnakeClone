
// Declaration of the constantes of the game
const TOP = 0;
const LEFT = 0;
const BLACK = "#000000";
const WHITE = "#FFFFFF";
const RED = "#FF0000";
const DARKRED = "#AA0000";
const GREEN = "#00FF00";
const BLUE = "#0000FF";

// Variables declaration
let HORIZONTAL_SPEED = -10;
let VERTICAL_SPEED = 0;
let initialCoordX = 150;
let initialCoordY = 150;
let appleWidth = 20;
let appleHeight = 20;
let snakeWidth = 20;
let snakeHeight = 20;
let timeInterval = 30

let startingCount = 1;

// Create the canvas window, where the game will be played.
let canvas = document.getElementById('canvas');  
let context = canvas.getContext('2d');    
let applePosX = Math.floor((Math.random() * canvas.height) + 40);
let applePosY = Math.floor((Math.random() * canvas.width) + 40);
  
// Create the segments of the body snake, with 20 pixels of separation for each one
let snake = [
    {x: 150, y: 150},
    {x: 130, y: 150},
    {x: 110, y: 150},
    ];
    
function menu() {
    setColors(BLACK,WHITE);
    drawRect(LEFT,TOP,canvas.width,canvas.height);
    drawRect(canvas.width/4, canvas.height/5, 350,200);
    write('Click','for starting Snake');
}

// Function used for writing messages on the screen menu
function write(text1,text2) {
    if( typeof(text2) == 'undefined' ){
		text2 = null;
	}
    context.font = '100px serif';
    setColors(BLACK, BLACK);
    context.fillText(text1, canvas.width/2, canvas.height/2);
    context.font = '30px serif';
    context.fillText(text2, canvas.width/3.7, canvas.height/1.6);
}    


function main() { // fonction main with setTimeout
	setTimeout(function onTick(timeInterval) {
    //Drawing the canvas window    
    clearCanvas(TOP, LEFT,canvas.width,canvas.height);
    drawSnakeFullBody();
    drawApple(DARKRED,RED,applePosX,applePosY,appleWidth,appleHeight);
    move();
    checkAppleCollision() 
    checkWallCollision();
    startingCount = 0;
    // Call main again
    main();
    }, timeInterval)
  }
  
function gameOver() {
    clearCanvas(TOP, LEFT,canvas.width,canvas.height);
    setTimeout(function onTick(timeInterval) {
    setColors(BLACK, WHITE);
    drawRect(canvas.width/4, canvas.height/5, 350,200);
    write('You lost !', 'Press R for reset');
    gameOver();
    }, timeInterval)
};

function write(text1,text2) {
    if( typeof(text2) == 'undefined' ){
		text2 = null;
	}
    context.font = '40px serif';
    setColors(BLACK, BLACK);
    context.fillText(text1, canvas.width/4, canvas.height/2);
    context.font = '30px serif';
    context.fillText(text2, canvas.width/4, canvas.height/1.6);
}
  
function clearCanvas(Xpos,Ypos,width,height) {
    // Remove everything on the canvas window and reset it to white
    setColors(WHITE,WHITE);
    drawRect(Xpos,Ypos,width,height);
    }
      
function setColors(colorBorder,colorFull){
    context.strokeStyle = colorBorder;
    context.fillStyle = colorFull;
    }
    
function drawRect(coordX,coordY,width,height){
    // fillRect() draw a full rectangle and strokeRect() draw a border
    context.fillRect(coordX,coordY,width,height);
    context.strokeRect(coordX,coordY,width,height);
    }

function drawSnakeSegments(segments) {
    // Color the snake in green and add a white border
    setColors(BLACK,GREEN);
    // Do the coloring every 20 pixels
    drawRect(segments.x, segments.y, snakeWidth, snakeHeight)
    }
        
function drawSnakeFullBody() {
    snake.forEach(drawSnakeSegments);
    };       

function drawApple(borderColor,fullColor,Xpos,Ypos,appleWidth,appleHeight) {
    // Check if the coord of the apple are in the canvas and draw the apple
    if (Xpos >= 0 && Xpos < canvas.width && Ypos >= 0 && Ypos < canvas.height) {
        setColors(borderColor,fullColor);
        drawRect(Xpos, Ypos,appleWidth,appleHeight);
    }
    else {
        // If not, reset coord of the apple until the coord are in the canvas
        applePosX = Math.floor((Math.random() * canvas.height) + 21);
        applePosY = Math.floor((Math.random() * canvas.width) + 21);
    }
}

function checkAppleCollision() {
	if (snake[0].x < applePosX + appleWidth &&
        snake[0].x + snakeWidth > applePosX &&
        snake[0].y < applePosY + appleHeight &&
        snakeHeight + snake[0].y > applePosY) {
		applePosX = Math.floor((Math.random() * canvas.height) + 20);
        applePosY = Math.floor((Math.random() * canvas.width) + 20);
        clearCanvas(applePosX,applePosY,20,20);
        snakeGrow()
    }
};

function checkSnakeBodyCollision() {
    if (snake[0].x < snake[snake.length -1].x + snakeWidth &&
        snake[0].x + snakeWidth > applePosX &&
        snake[0].y < snake[snake.length -1].y + snakeHeight &&
        snakeHeight + snake[0].y > snake[snake.length -1].y){
        alert(0);
        }    
}

function snakeGrow() {
    if (snake[0].x === snake[snake.length -1].x) {
        snake.push({x: snake[snake.length -1].x - 20, y:snake[0].y});
        clearCanvas(snake[snake.length -1].x - 20,snake[0].y,snakeWidth,snakeHeight);
        }
    else if (snake[0].y === snake[snake.length -1].y) {
        snake.push({x:snake[0].x, y: snake[snake.length -1].y - 20});
        clearCanvas(snake[0].x,snake[snake.length -1].y - 20,snakeWidth,snakeHeight);
    }
};

function checkWallCollision() {
    if (snake[0].x === 0) {
        HORIZONTAL_SPEED = 10;
    }
    if (snake[0].x === canvas.width) {
        HORIZONTAL_SPEED = -10;
    }
    if (snake[0].y === 0) {
        VERTICAL_SPEED = 10;
    }
    if (snake[0].y === canvas.height) {
        VERTICAL_SPEED = -10;
    }
}

function move() {
    const head = {x: snake[0].x + HORIZONTAL_SPEED, y: snake[0].y + VERTICAL_SPEED};
    //The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
    snake.unshift(head);
    //The pop() method removes the last element from an array and returns that element, and changes the length of the array.
    snake.pop();
    }

function pausingTheGame(){
    if (HORIZONTAL_SPEED != 0 && VERTICAL_SPEED === 0 || HORIZONTAL_SPEED === 0 && VERTICAL_SPEED != 0){
    HORIZONTAL_SPEED = 0;
    VERTICAL_SPEED = 0;
    }
}	

function changeDirectionX(hSpeed,vSpeed){
   if (snake[0].y === snake[snake.length -1].y && HORIZONTAL_SPEED === hSpeed && VERTICAL_SPEED === vSpeed){
                HORIZONTAL_SPEED = hSpeed;
                VERTICAL_SPEED = vSpeed;
                }
            else {
                HORIZONTAL_SPEED = -hSpeed;
                VERTICAL_SPEED = -vSpeed;
            }
};

// Function who change the verticality
function changeDirectionY(hSpeed,vSpeed){
   if (snake[0].y === snake[snake.length -1].y && HORIZONTAL_SPEED === hSpeed && VERTICAL_SPEED === vSpeed){
                HORIZONTAL_SPEED = hSpeed;
                VERTICAL_SPEED = vSpeed;
                }
            else {
                HORIZONTAL_SPEED = -hSpeed;
                VERTICAL_SPEED = vSpeed;
            }
};

document.getElementById("canvas").addEventListener("click", function( event ) {
    main();
  }, {once : true});
  
// Creating keyboard events with the Char codes of the keyboard
document.onkeydown = function(e) {
    switch (e.keyCode) {
    // Keyboard keys for starting, speeding up and slowing the game
    
        // Pressing X for starting the game
        case 88:
            // Check if the game is  not already started before starting it
            if (startingCount === 1) {
            clearCanvas(TOP, LEFT,canvas.width,canvas.height);
            main();
        }
            break;
        // Pressing L will speed the game
        case 76:
            timeInterval -= 10;
            break;
        // Pressing S will slow the game
        case 83:
            timeInterval += 10;
            break;
            
    // Keyboard keys for changing the direction of the snake
    
        //Left arrow
        case 37:
            changeDirectionX(10,0);
            break;
        //Up arrow
        case 38:
            if (snake[0].x === snake[snake.length -1].x && HORIZONTAL_SPEED === 0 && VERTICAL_SPEED === 10){
                HORIZONTAL_SPEED = 0;
                VERTICAL_SPEED = 10;
                }
            else {
                HORIZONTAL_SPEED = 0;
                VERTICAL_SPEED = -10;
            }
            break;
        //Right arrow
        case 39:
            changeDirectionX(-10,0);
            break;
        //Down arrow
        case 40:
            if (snake[0].x === snake[snake.length -1].x && HORIZONTAL_SPEED === 0 && VERTICAL_SPEED === -10){
                HORIZONTAL_SPEED = 0;
                VERTICAL_SPEED = -10;
                }
            else {
                HORIZONTAL_SPEED = 0;
                VERTICAL_SPEED = 10;
            }
            break;
    }
};



// Main game loop
menu()



