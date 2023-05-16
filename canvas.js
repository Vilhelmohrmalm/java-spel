
// ---------------------------- klasser och stat generatorer--------------------------------------------//


let vänster = "ArrowLeft";
let höger = "ArrowRight";
let up = "ArrowUp";
let ner = "ArrowDown";

spelar_stats = "";



function inställningar(){
    var inst = document.getElementById("inst");
    if(inst.style.display == "block"){   
    inst.style.display = "none"
    }
    else{
    inst.style.display = "block"
    }
}


function statgen(a, b) {
    return (Math.round(Math.random() * (b - a) + a))
}



function vapengenerator() {
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
    else if (spelar_stats.p_lvl < 30 && spelar_stats.p_lvl >= 20) {
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
            document.getElementById("m_hälsa").innerHTML = ("Hp: "+ monster_stats.m_hp)
            document.getElementById("m_styrka").innerHTML = ("Str: "+monster_stats.m_str)
            return (monster_stats);
        }
        else if (monster == 0) {
            monster_stats = (Goblin)
            document.getElementById("m_hälsa").innerHTML = ("Hp: "+ monster_stats.m_hp)
            document.getElementById("m_styrka").innerHTML = ("Str: "+monster_stats.m_str)
            return (monster_stats)
        }
    }

    else if (spelar_stats.p_lvl < 20 && spelar_stats.p_lvl >= 10) {
        let Lycan = new Monster(statgen(6, 12), statgen(4, 9), "Lycan")
        let Golem = new Monster(statgen(12, 17), statgen(3, 3), "Golem")
        if (monster == 1) {
            monster_stats = (Lycan);
            document.getElementById("m_hälsa").innerHTML = ("Hp: "+ monster_stats.m_hp)
            document.getElementById("m_styrka").innerHTML = ("Str: "+monster_stats.m_str)
            return (monster_stats);
        }
        else if (monster == 0) {
            monster_stats = (Golem)
            document.getElementById("m_hälsa").innerHTML = ("Hp: "+ monster_stats.m_hp)
            document.getElementById("m_styrka").innerHTML = ("Str: "+monster_stats.m_str)
            return (monster_stats)
        }
    }
    else (spelar_stats.p_lvl < 30 && spelar_stats.p_lvl >= 20); {
        let Undead = new Monster(statgen(15, 22), statgen(4, 5), "Undead")
        let Orc = new Monster(statgen(9, 15), statgen(6, 10), "Orc")
        if (monster == 1) {
            monster_stats = (Undead);
            document.getElementById("m_hälsa").innerHTML = ("Hp: "+ monster_stats.m_hp)
            document.getElementById("m_styrka").innerHTML = ("Str: "+monster_stats.m_str)
            return (monster_stats);
        }
        else if (monster == 0) {
            monster_stats = (Orc)
            document.getElementById("m_hälsa").innerHTML = ("Hp: "+ monster_stats.m_hp)
            document.getElementById("m_styrka").innerHTML = ("Str: "+monster_stats.m_str)
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

function slut() {
    document.getElementById("avslutning").style.display = "block"
    
}
// ---------------------------------------- SLUT  ----------------------------------------

// ---------------------------------------- lvl poäng  ----------------------------------------

function lvl_poäng() {

    let val = prompt("Vilken vill du höja\n H = hp\n S = str\n")

    if (["H", "h", "hp"].includes(val)) {
        spelar_stats.p_hp += 1
        document.getElementById("meddelande").innerHTML += ("Din hp är nu " + spelar_stats.p_hp + "<br/>")
        spelar_stats.p_lvlpoäng = 0

    }
    else if (["S", "s", "str"].includes(val)) {
        spelar_stats.p_str += 1
        document.getElementById("meddelande").innerHTML += ('Din str är nu ' + spelar_stats.p_str + "<br/>")
        spelar_stats.p_lvlpoäng = 0

    }
    else {
        document.getElementById("meddelande").innerHTML += ("Din sopa välj ett av alternativen <br/>")
        return lvl_poäng()
    }

}

// ---------------------------------------- lvl poäng  ----------------------------------------

// ---------------------------------------- FIGHT ----------------------------------------

function fight(monster_stats) {

    document.getElementById("meddelande").innerHTML +=
        "och du stöter på en " + monster_stats.m_namn + " med " + monster_stats.m_hp + " hp och " + monster_stats.m_str + " str <br/>"

    while (monster_stats.m_hp > 0) {

        if (spelar_stats.p_str + spelar_stats.vapen.v_str >= monster_stats.m_hp) {
            document.getElementById("meddelande").innerHTML += ("Du besegrade monstret <br/>")
            document.getElementById("meddelande").innerHTML += ("Du har " + spelar_stats.p_hp + " hp kvar <br/>")
            spelar_stats.p_lvl += 1
            document.getElementById("meddelande").innerHTML += ("Du är är nu lvl " + spelar_stats.p_lvl + "<br/>")
            spelar_stats.p_lvlpoäng += 1
            if (spelar_stats.p_lvl == 10) {
                spelar_stats.p_hp += 3
                document.getElementById("audio").src = " ../musik/7ds [Instrumental].mp3"
                document.getElementById("body").style.backgroundColor = "green"
            }

            else if (spelar_stats.p_lvl == 20){
                spelar_stats.p_hp +=3
                document.getElementById("audio").src = "musik/Vickeblanka - Black Rover (Instrumental).mp3"
                document.getElementById("body").style.backgroundColor = "navy"
                
            }

            return

        }
        else if (spelar_stats.p_str + spelar_stats.vapen.v_str < monster_stats.m_hp && monster_stats.m_str >= spelar_stats.p_hp + spelar_stats.vapen.v_hp) {
            document.getElementById("meddelande").innerHTML += ("Du dog <br/>")
            document.getElementById("meddelande").innerHTML += ("Du nådde lvl " + spelar_stats.p_lvl + " Måste vara skill issue <br/>")
            slut()
        }
        else if (spelar_stats.p_str + spelar_stats.vapen.v_str < monster_stats.m_hp && monster_stats.m_str < spelar_stats.p_hp + spelar_stats.vapen.v_hp) {
            monster_stats.m_hp = monster_stats.m_hp - spelar_stats.p_str - spelar_stats.vapen.v_str
            spelar_stats.p_hp = spelar_stats.p_hp - monster_stats.m_str + spelar_stats.vapen.v_hp
        }

    }
}

function boss_fight() {
    document.getElementById("audio").src = "musik/BC OP1.mp3"
    document.getElementById("meddelande").innerHTML += ("Nu har du nått sista kammaren men där väntar Taurus <br/>")
    document.getElementById("meddelande").innerHTML += ("Hans massiva slimekapacitet har gett honom en hp på 30 och en styrka på 10 <br/>")
    let m_hp = 30
    let m_str = 10
    let val = prompt("S = sloss mot Taurus\nL = ge upp\n")
    while (m_hp == 30) {
        if (["S", "s", "sloss", "sloss mot Taurus"].includes(val)) {
            while (m_hp > 0) {
                if (spelar_stats.p_str + spelar_stats.vapen.v_str >= m_hp) {
                    document.getElementById("meddelande").innerHTML += (
                        "Du besegrade tarus och kan änligen lämna labyrinten <br/>")
                }
                else if (spelar_stats.p_str + spelar_stats.vapen.v_str < m_hp && m_str >= spelar_stats.p_hp + spelar_stats.vapen.v_hp) {
                    document.getElementById("meddelande").innerHTML += (
                        "Taurus dödade dig, Måste vara skill issue <br/>")
                    slut()
                }
                else if (spelar_stats.p_str + spelar_stats.vapen.v_str < m_hp && m_str < spelar_stats.p_hp + spelar_stats.vapen.v_hp) {
                    m_hp = m_hp -
                        spelar_stats.p_str - spelar_stats.vapen.v_str
                    spelar_stats.p_hp = spelar_stats.p_hp -
                        m_str + spelar_stats.vapen.v_hp
                }
            }
        }
        else if (["L", "l", "ge upp"].includes(val)) {
            document.getElementById("meddelande").innerHTML += (
                "Du gav upp och dog på lvl 30, Måst vara skill issue <br/>")
            slut()
        }
        else {
            document.getElementById("meddelande").innerHTML += ("Din sopa välj ett av alternativen <br/>")
        }
    }
}


// ---------------------------------------- FIGHT ----------------------------------------

// ---------------------------------------- RUM TYP OCH KISTA ----------------------------------------

function kista() {

    let vapen = vapengenerator()

    document.getElementById("meddelande").innerHTML += (vapen.v_namn + " det har en hp på " + vapen.v_hp, " och en styrka på " + vapen.v_str + "<br/>")

    document.getElementById("meddelande").innerHTML += (
        "Du måste ta bort ditt nuvarande vapen för att ta det nya <br/>")

    document.getElementById("meddelande").innerHTML += (
        "Du har " + spelar_stats.vapen.v_namn + " med " + spelar_stats.vapen.v_hp + " hp och " + spelar_stats.vapen.v_str + " str <br/>")

    let svar = prompt(
        "Om du vill byta det nya vapnet mot det gammla vapnet skriv in 1 annars skriv något annat ")
    if (svar == "1") {
        document.getElementById("meddelande").innerHTML += ("Du har nu ett nytt vapen i din ryggsäck <br/>")
        spelar_stats.vapen = vapen

    }
    else {
        document.getElementById("meddelande").innerHTML += (
            "Du lämnade det nya fräsha vapnet i kistan för du kan inte överge ditt gamla vapen efter allt ni gjort tilsammans <br/>")

    }

}



function rum_typ() {

    if (spelar_stats.p_lvl <= 30) {

        if ([10, 20].includes(spelar_stats.p_lvl)) {
            spelar_stats.p_hp += 3
        }

        let typ = Math.round(Math.random() * 10)
        if ([1, 2, 3, 4, 10].includes(typ)) {
            let monster_stats = monstrgenerator()
            fight(monster_stats)
            if (spelar_stats.p_lvlpoäng == 3) {
                document.getElementById("meddelande").innerHTML = ("Du har nu fått en lvl uppgradering som du kan använda för att höja en valfri stat med 1. <br/>")
                document.getElementById("meddelande").innerHTML = (
                    "Dina nuvarande stats är " + spelar_stats.p_hp + " hp och " + spelar_stats.p_str + " str <br/>")
                lvl_poäng()
            }

        }
        else if ([5, 6].includes(typ)) {
            document.getElementById("meddelande").innerHTML += ("och kommer till ett tomt rum <br/>")

        }
        else if ([7, 8].includes(typ)) {
            val_kista()

        }
        else if ([9].includes(typ)) {
            fälla()

        }
    }
    else {
        boss_fight()
    }

}


function fälla() {
    if (spelar_stats.p_hp > 1) {
        spelar_stats.p_hp -= 1
        document.getElementById("meddelande").innerHTML += (
            "där du klev i en fälla, du har nu " + spelar_stats.p_hp + " hp kvar <br/>")

    }
    else {
        document.getElementById("meddelande").innerHTML += ("där du dör i en fälla <br/>")
        document.getElementById("meddelande").innerHTML += ("Du nådde lvl " + spelar_stats.p_lvl + "<br/>")
        document.getElementById("meddelande").innerHTML += (" Måste vara skill issue <br/>")
        slut()
    }
}

// ---------------------------------------- RUM TYP OCH KISTA ----------------------------------------

// ---------------------------------------- VALFUNKTIONER ----------------------------------------

function val_kista() {
    let val = prompt(
        "och hittar en kista. Vad vill du göra?\n Ö = öppna kista\n L = lämna kistan\n")

    if (["Ö", "öppna", "ö", "öppna kista"].includes(val)) {
        document.getElementById("meddelande").innerHTML += (
            "du öppnar kistan och i den hittar du <br/>")
        kista()

    }
    else if (["L", "lämna kistan", "lämna", "l"].includes(val)) {
        document.getElementById("meddelande").innerHTML += ("du lämnar kistan där för att rutna, utan att någonsinn få veta vad som finns i den. <br/>")
        document.getElementById("meddelande").innerHTML += ("Kistans inehåll kommer att förbli ett mysterium för alltid. <br/>")

    }
    else {
        document.getElementById("meddelande").innerHTML += ("din sopa välj ett av alternativen <br/>")
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
    document.getElementById("p_bild").src = "../bilder/assa.jpg"


    animate();
}

function barb() {
    var val = document.getElementById("karaktärsval")
    val.style.display = "none"
    let hero = Barb;
    spelar_stats = hero
    document.getElementById("p_bild").src = "../bilder/barb.jpg"
    animate();
}

function knig() {
    var val = document.getElementById("karaktärsval")
    val.style.display = "none"
    let hero = Knight;
    spelar_stats = hero
    document.getElementById("p_bild").src = "../bilder/knig.jpg"

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
        case vänster:
            directions.left = true;
            break;
        case höger:
            directions.right = true;
            break;
        case up:
            directions.up = true;
            break;
        case ner:
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

    document.getElementById("hälsa").innerHTML = ("Hp: "+spelar_stats.p_hp)
    document.getElementById("styrka").innerHTML = ("Str: "+spelar_stats.p_str)
    document.getElementById("lvl").innerHTML = ("Lvl: "+spelar_stats.p_lvl)
    document.getElementById("lvl-p").innerHTML = ("Lvl_p: "+spelar_stats.p_lvlpoäng)
    document.getElementById("vapen-s").innerHTML = ("V_Str "+spelar_stats.vapen.v_str)
    document.getElementById("vapen-h").innerHTML = ("V_Hp "+spelar_stats.vapen.v_hp)
    document.getElementById("vapen-typ").innerHTML = ("Vapen: "+spelar_stats.vapen.v_namn)

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
        playerX = 350;
        playerY = 475;
        rum_typ()

    }

    if (playerX + playerWidth == 45 && playerY > 198 && playerY < 343) {
        playerX = 350;
        playerY = 475;
        rum_typ()

    }

    if (playerY == 30 && playerX > 280 && playerX < 420) {
        playerX = 350;
        playerY = 475;
        rum_typ()

    }
}

// -------------------------------------
// ------------ Start game ------------


