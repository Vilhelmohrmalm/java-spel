
// ---------------------------- klasser och stat generatorer--------------------------------------------//


spelar_stats = "";


function statgen(a, b) {
    return (Math.round(Math.random() * (b-a) + a))
}



function vapengenerator(spelar_stats) {
    if (spelar_stats.p_lvl < 10) {
        let Svärd = new Vapen(statgen(0, 1), statgen(1, 2), "ett Svärd")
        let Sköld = new Vapen(statgen(1, 2), statgen(0, 0), "en Sköld")
        let Yxa = new Vapen(statgen(0, 0), statgen(1, 4), "en Yxa")
        let Pilbåge = new Vapen(statgen(0, 0), statgen(1, 3), "en Pilbåge")
        let Spjut = new Vapen(statgen(0, 0), statgen(2, 3), "ett Spjut")
        let Vlista = [Svärd, Sköld, Yxa, Pilbåge, Spjut]
        let index = Math.floor(Math.random() * Vlista.length);
        let vapen = Vlista[index]
        return (vapen)

    }
    else if (spelar_stats.p_lvl < 20 && spelar_stats.p_lvl >= 10) {
        let Svärd = new Vapen(statgen(0, 1), statgen(2, 4), "ett Svärd")
        let Sköld = new Vapen(statgen(2, 3), statgen(0, 0), "en Sköld")
        let Yxa = new Vapen(statgen(0, 0), statgen(1, 6), "en Yxa")
        let Pilbåge = new Vapen(statgen(0, 0), statgen(2, 5), "en Pilbåge")
        let Spjut = new Vapen(statgen(0, 0), statgen(3, 4), "ett Spjut")
        let Vlista = [Svärd, Sköld, Yxa, Pilbåge, Spjut]
        let index = Math.floor(Math.random() * Vlista.length);
        let vapen = Vlista[index]
        return (vapen)
    }
    else if (spelar_stats.p_lvl < 30 && spelar_stats.p_lvl>=20) {
        let Svärd = new Vapen(statgen(1, 1), statgen(4, 5), "ett Svärd")
        let Sköld = new Vapen(statgen(3, 4), statgen(0, 0), "en Sköld")
        let Yxa = new Vapen(statgen(0, 0), statgen(3, 8), "en Yxa")
        let Pilbåge = new Vapen(statgen(0, 0), statgen(4, 7), "en Pilbåge")
        let Spjut = new Vapen(statgen(0, 0), statgen(5, 6), "ett Spjut")
        let Vlista = [Svärd, Sköld, Yxa, Pilbåge, Spjut]
        let index = Math.floor(Math.random() * Vlista.length);
        let vapen = Vlista[index]
        return (vapen)
    }
}





class Vapen {
    constructor(v_hp, v_str, v_namn) {
        this.v_namn = v_namn;
        this.v_hp = v_hp;
        this.v_str = v_str;
    }

}


class Karaktärer {
    constructor(p_hp, p_str, p_lvl, p_lvlpoäng, p_namn, vapen, p_färg) {
        this.p_hp = p_hp;
        this.p_str = p_str;
        this.p_lvl = p_lvl;
        this.p_lvlpoäng = p_lvlpoäng;
        this.p_namn = p_namn;
        this.vapen = vapen;
        this.p_färg = p_färg;
    }
}

class Monster {
    constructor(m_hp, m_str, m_namn) {
        this.m_namn = m_namn;
        this.m_hp = m_hp;
        this.m_str = m_str;
    }
    //def __str__(self):
    //  return f"Du stöter på en {self.m_namn}, den har {self.m_hp} hp och {self.m_str} styrka"
}

function monstrgenerator() {

    let monster = Math.round(Math.random())
    if (spelar_stats.p_lvl < 10) {
        let Slime = new Monster(statgen(4, 11), statgen(2, 6), "Slime")
        let Goblin = new Monster(statgen(3, 7), statgen(3, 8), "Goblin")
        if (monster == 1) {
            monster_stats = (Slime);
            return (monster_stats);
        }
        else if (monster == 0) {
            monster_stats = (Goblin)
            return (monster_stats)
        }
    }

    else if (spelar_stats.p_lvl < 20 && spelar_stats.p_lvl >= 10) {
        let Lycan = new Monster(statgen(6, 12), statgen(4, 9), "Lycan")
        let Golem = new Monster(statgen(12, 17), statgen(3, 3), "Golem")
        if (monster == 1) {
            monster_stats = (Lycan);
            return (monster_stats);
        }
        else if (monster == 0) {
            monster_stats = (Golem)
            return (monster_stats)
        }
    }
    else (spelar_stats.p_lvl < 30  && spelar_stats.p_lvl >= 20); {
        let Undead = new Monster(statgen(15, 22), statgen(4, 5), "Undead")
        let Orc = new Monster(statgen(9, 15), statgen(6, 10), "Orc")
        if (monster == 1) {
            monster_stats = (Undead);
            return (monster_stats);
        }
        else if (monster == 0) {
            monster_stats = (Orc)
            return (monster_stats)
        }
    }
}


let Start = new Vapen(0, 0, "en pinne")

let Assasin = new Karaktärer(5, 10, 0, 0, "assasin", Start, "black")
let Barb = new Karaktärer(8, 7, 0, 0, "Barb", Start, "orange")
let Knight = new Karaktärer(10, 5, 0, 0, "Knight", Start, "silver")

// ---------------------------- klasser och stat generatorer--------------------------------------------//

// ---------------------------------------- SLUT  ----------------------------------------

function slut(){
    console.log("Game Over")
    quit()
}
// ---------------------------------------- SLUT  ----------------------------------------

// ---------------------------------------- lvl poäng  ----------------------------------------

function lvl_poäng(){

    let val = prompt("Vilken vill du höja\n H = hp\n S = str\n")

    if (["H", "h", "hp"].includes(val)){
        spelar_stats.p_hp += 1
        console.log("Din hp är nu", spelar_stats.p_hp, "\n")
        spelar_stats.p_lvlpoäng = 0

    }
    else if (["S", "s", "str"].includes(val)){
        spelar_stats.p_str += 1
        console.log('Din str är nu', spelar_stats.p_str, "\n")
        spelar_stats.p_lvlpoäng = 0

    }
    else{
        console.log("Din sopa välj ett av alternativen\n")
        return lvl_poäng()
    }

}

// ---------------------------------------- lvl poäng  ----------------------------------------

// ---------------------------------------- FIGHT ----------------------------------------

function fight(monster_stats){

    console.log(
        "och du stöter på en", monster_stats.m_namn, "med", monster_stats.m_hp, "hp och", monster_stats.m_str, "str\n")

    while (monster_stats.m_hp > 0) {

        if (spelar_stats.p_str + spelar_stats.vapen.v_str >= monster_stats.m_hp){
            console.log("Du besegrade monstret\n")
            console.log("Du har", spelar_stats.p_hp, "hp kvar\n")
            spelar_stats.p_lvl += 1
            console.log("Du är är nu lvl", spelar_stats.p_lvl,"\n")
            spelar_stats.p_lvlpoäng += 1
            return
 
        }
        else if (spelar_stats.p_str + spelar_stats.vapen.v_str < monster_stats.m_hp && monster_stats.m_str >= spelar_stats.p_hp + spelar_stats.vapen.v_hp){
            console.log(
                "Du dog\nDu nådde lvl", spelar_stats.p_lvl,"\nMåste vara skill issue\n")
            slut()
        }
        else if (spelar_stats.p_str + spelar_stats.vapen.v_str < monster_stats.m_hp && monster_stats.m_str < spelar_stats.p_hp + spelar_stats.vapen.v_hp){
            monster_stats.m_hp = monster_stats.m_hp - spelar_stats.p_str - spelar_stats.vapen.v_str
            spelar_stats.p_hp = spelar_stats.p_hp - monster_stats.m_str + spelar_stats.vapen.v_hp
        }
        
    }
}

// ---------------------------------------- FIGHT ----------------------------------------

// ---------------------------------------- RUM TYP OCH KISTA ----------------------------------------

function kista(){

    let vapen=vapengenerator()

    console.log(vapen.v_namn,"\n det har en hp på", vapen.v_hp, "och en styrka på",vapen.v_str,"\n")

    console.log(
        "Du måste ta bort ditt nuvarande vapen för att ta det nya\n")

    console.log(
        "Du har", spelar_stats.vapen.v_namn, "med", spelar_stats.vapen.v_hp," hp och", spelar_stats.vapen.v_str, "str\n ")
    while (true){
        let svar = prompt(
            "Om du vill byta det nya vapnet mot det gammla vapnet skriv in 1 annars skriv något annat \n")
        if (svar == "1"){
            console.log("Du har nu ett nytt vapen i din ryggsäck\n")
            spelar_stats.vapen = vapen

        }
        else{
            console.log(
                "Du lämnade det nya fräsha vapnet i kistan för du kan inte överge ditt gamla vapen efter allt ni gjort tilsammans\n")

        }
    }
}



function rum_typ(){

    let typ = Math.round( Math.random()*10)
    if ([ 4, 10].includes(typ)) {
        let monster_stats = monstrgenerator()
        fight(monster_stats)
        if (spelar_stats.p_lvlpoäng == 3) {
            console.log(
                "Du har nu fått en lvl uppgradering som du kan använda för att höja en valfri stat med 1. \n")
            typingPrint(
                "Dina nuvarande stats är", spelar_stats.p_hp, "hp och", spelar_stats.p_str, " str \n")
             lvl_poäng()
        }

    }
    else if ([5, 6, 1, 2, 3].includes(typ)) {
        console.log("och kommer till ett tomt rum\n")

    }
    else if ([7, 8].includes(typ)) {
        val_kista()

    }
    else if ([9].includes(typ)) {
        fälla()

    }

}


function fälla(){
    if (spelar_stats.p_hp > 1){
        spelar_stats.p_hp -= 1
        console.log(
            "där du klev i en fälla, du har nu", spelar_stats.p_hp," hp kvar\n")

    }
    else{
        typingPrint(
            "där du dör i en fälla\n Du nådde lvl", spelar_stats.p_lvl,"\n Måste vara skill issue\n")
        slut()
    }
}

// ---------------------------------------- RUM TYP OCH KISTA ----------------------------------------

// ---------------------------------------- VALFUNKTIONER ----------------------------------------

function val_kista(){
    let val = prompt(
        "och hittar en kista. Vad vill du göra?\n Ö = öppna kista\n L = lämna kistan\n")

    if (["Ö", "öppna", "ö", "öppna kista"].includes(val)){
        console.log(
            "du öppnar kistan och i den hittar du ")
        kista()

    }
    else if (["L", "lämna kistan", "lämna", "l"].includes(val)){
        console.log("du lämnar kistan där för att rutna, utan att någonsinn få veta vad som finns i den.\nKistans inehåll kommer att förbli ett mysterium för alltid.\n")

    }
    else{
        console.log("din sopa välj ett av alternativen")
        return val_kista()
    }
}

// ---------------------------------------- VALFUNKTIONER ----------------------------------------

// ---------------------------------------- STARTVAL ----------------------------------------

function start() {

    var start = document.getElementById("startsida")
    var karaktär = document.getElementById("karaktärsval")
    start.style.display = "none"
    karaktär.style.display = "block"
}

function assa() {
    var val = document.getElementById("karaktärsval")
    val.style.display = "none"
    let hero = Assasin;
    c.fillStyle = "black";
    spelar_stats = hero
    animate();
}

function barb() {
    var val = document.getElementById("karaktärsval")
    val.style.display = "none"
    let hero = Barb;
    spelar_stats = hero 
    animate();
}

function knig() {
    var val = document.getElementById("karaktärsval")
    val.style.display = "none"
    let hero = Knight;
    spelar_stats = hero  

    animate();
}

// ---------------------------------------- STARTVAL ----------------------------------------



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

    c.fillStyle = spelar_stats.p_färg;
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

    if (playerX + playerWidth == 675 && playerY > 198 && playerY < 343) {
        rum_typ()
         playerX = 350;
         playerY = 475;
    }
    
    if (playerX + playerWidth == 25 && playerY > 198 && playerY < 343) {
        rum_typ()
         playerX = 350;
         playerY = 475;
    }
    
    if (playerY == 30 && playerX > 280 && playerX < 420) {
        rum_typ()
         playerX = 350;
         playerY = 475;
    }
}

// -------------------------------------
// ------------ Start game ------------


