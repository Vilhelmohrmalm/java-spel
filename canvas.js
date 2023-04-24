//  ------------ Setup ------------
window.focus;
const SCREENWIDTH = innerWidth;
const SCREENHEIGHT = innerHeight;
let gameCanvas = document.getElementById("gameCanvas");
let c = gameCanvas.getContext("2d"); // Drawing object
gameCanvas.height = 500
gameCanvas.width = 700
// gameCanvas.height = SCREENHEIGHT / 2;
// gameCanvas.width = SCREENWIDTH / 2;
// -------------------------------------
// Player variables
let playerX = 350;
let playerY = 475;
let playerWidth = 20;
let playerHeight = 20;
let dx = 5;
let dy = 5;



let directions = {
    left: false,
    right: false,
    up: false,
    down: false,
};


// -------------------------------------
// ------------ Player movement ------------
document.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "ArrowLeft":
            directions.left = true;
            break;
        case "ArrowRight":
            directions.right = true;
            break;
        case "ArrowUp":
            directions.up = true;
            break;
        case "ArrowDown":
            directions.down = true;
            break;
        default:
            break;
    }
});

document.addEventListener("keyup", (e) => {
    switch (e.key) {
        case "ArrowLeft":
            directions.left = false;
            break;
        case "ArrowRight":
            directions.right = false;
            break;
        case "ArrowUp":
            directions.up = false;
            break;
        case "ArrowDown":
            directions.down = false;
            break;
        default:
            break;
    }
});
// -------------------------------------
// ------------ Animation ------------
function animate() {
    let myAudio = document.querySelector('#audio')
    myAudio.play()
    requestAnimationFrame(animate); // Run gameloop recursively
    c.clearRect(0, 0, gameCanvas.width, gameCanvas.height); // Clear screen

    c.fillStyle = "white";
    c.fillRect(playerX, playerY, playerWidth, playerHeight); // Draw player

    c.beginPath();
    c.rect(playerX, playerY, playerWidth, playerHeight);
    c.stroke();

    if (directions.right && playerX + playerWidth < 700) {
        playerX += dx;
    }

    if (directions.left && playerX > 0) {
        playerX -= dx;
    }

    if (directions.up && playerY > 0) {
        playerY -= dy;
    }

    if (directions.down && playerY + playerHeight < 500) {
        playerY += dy;
    }
}
// -------------------------------------
// ------------ Start game ------------
animate();


