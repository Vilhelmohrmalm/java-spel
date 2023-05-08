function start(){
    var start = document.getElementById("startsida")
    start.style.display = "none"
}

function rum_typ(spelar_stats){
    let typ = random.randint(1, 10)
    if ( [1, 2, 3, 4, 10].includes(typ)){
        let monster_stats = monstrgenerator()
        spelar_stats = fight(spelar_stats, monster_stats)
        if (spelar_stats.p_lvlpoäng == 3){
            console.log(
                "Du har nu fått en lvl uppgradering som du kan använda för att höja en valfri stat med 1. \n")
            typingPrint(
                "Dina nuvarande stats är", spelar_stats.p_hp, "hp och", spelar_stats.p_str," str \n")
            spelar_stats = lvl_poäng(spelar_stats)
            return (spelar_stats)
        }
        else{
            return spelar_stats
        }
    }
    else if ( [5, 6].includes(typ)){
        console.log("och kommer till ett tomt rum\n")
        return (spelar_stats)
    }
    else if ([7, 8].includes(typ)){
        val_kista(spelar_stats)
        return (spelar_stats)
    }
    else if ([9].includes(typ)){
        fälla(spelar_stats)
        return (spelar_stats)
    }
}










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

    if (directions.right && playerX + playerWidth < 675) {
        playerX += dx;
    }

    if (directions.left && playerX > 25) {
        playerX -= dx;
    }

    if (directions.up && playerY > 30) {
        playerY -= dy;
    }

    if (directions.down && playerY + playerHeight < 500) {
        playerY += dy;
    }
}
    if ( playerX + playerWidth == 675 && playerY> 198 && playerY<343){
        rum_typ(spelar_stats)
    }

    if ( playerX + playerWidth == 25 && playerY> 198 && playerY<343){
        rum_typ(spelar_stats)
    }

    if ( playerY == 30 && playerX> 280 && playerX<420){
        rum_typ(spelar_stats)
    }
// -------------------------------------
// ------------ Start game ------------
animate();


