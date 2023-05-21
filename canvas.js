
// ---------------------------- klasser och stat generatorer--------------------------------------------//


let vänster = "ArrowLeft";
let höger = "ArrowRight";
let up = "ArrowUp";
let ner = "ArrowDown";

nytt_vapen = "";

spelar_stats = "";

function kontroll(){
    vänster = document.getElementById("vänster").value
    höger = document.getElementById("höger").value
    up = document.getElementById("up").value
    ner = document.getElementById("ner").value;


    document.getElementById("vänster").value = none
    document.getElementById("höger").value = none
    document.getElementById("up").value = none
    document.getElementById("ner").value = none

}

function återställ(){
    vänster = "ArrowLeft";
    höger = "ArrowRight";
    up = "ArrowUp";
    ner = "ArrowDown";

}

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
        nytt_vapen = Vlista[index]
        vapenbild()
        return(nytt_vapen)

    }
    else if (spelar_stats.p_lvl < 20 && spelar_stats.p_lvl >= 10) {
        let Svärd = new Vapen(statgen(0, 1), statgen(2, 4), "ett Svärd")
        let Sköld = new Vapen(statgen(2, 3), statgen(0, 0), "en Sköld")
        let Yxa = new Vapen(statgen(0, 0), statgen(1, 6), "en Yxa")
        let Pilbåge = new Vapen(statgen(0, 0), statgen(2, 5), "en Pilbåge")
        let Spjut = new Vapen(statgen(0, 0), statgen(3, 4), "ett Spjut")
        let Vlista = [Svärd, Sköld, Yxa, Pilbåge, Spjut]
        let index = Math.floor(Math.random() * Vlista.length);
        nytt_vapen = Vlista[index]
        vapenbild()
        return(nytt_vapen)

    }
    else if (spelar_stats.p_lvl < 30 && spelar_stats.p_lvl >= 20) {
        let Svärd = new Vapen(statgen(1, 1), statgen(4, 5), "ett Svärd")
        let Sköld = new Vapen(statgen(3, 4), statgen(0, 0), "en Sköld")
        let Yxa = new Vapen(statgen(0, 0), statgen(3, 8), "en Yxa")
        let Pilbåge = new Vapen(statgen(0, 0), statgen(4, 7), "en Pilbåge")
        let Spjut = new Vapen(statgen(0, 0), statgen(5, 6), "ett Spjut")
        let Vlista = [Svärd, Sköld, Yxa, Pilbåge, Spjut]
        let index = Math.floor(Math.random() * Vlista.length);
        nytt_vapen = Vlista[index]
        vapenbild()
        return(nytt_vapen)

    }

}


function vapenbild(){
    if (nytt_vapen.v_namn == "ett Svärd"){
        document.getElementById("m_bild").src ="bilder/svärd.jfif"
    }
    else if(nytt_vapen.v_namn == "ett Spjut"){
        document.getElementById("m_bild").src ="bilder/spjut.jfif"
    }
    else if(nytt_vapen.v_namn == "en Sköld"){
        document.getElementById("m_bild").src ="bilder/sköld.jfif"
    }
    else if(nytt_vapen.v_namn == "en Yxa"){
        document.getElementById("m_bild").src ="bilder/yxa.jfif"
    }
    else if(nytt_vapen.v_namn == "en Pilbåge"){
        document.getElementById("m_bild").src ="bilder/pilbåge.jfif"
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
            document.getElementById("m_bild").src ="bilder/slime.jfif"
            return (monster_stats);
        }
        else if (monster == 0) {
            monster_stats = (Goblin)
            document.getElementById("m_bild").src ="bilder/goblin.jfif"
            return (monster_stats)
        }
    }

    else if (spelar_stats.p_lvl < 20 && spelar_stats.p_lvl >= 10) {
        let Lycan = new Monster(statgen(6, 12), statgen(4, 9), "Lycan")
        let Golem = new Monster(statgen(12, 17), statgen(3, 3), "Golem")
        if (monster == 1) {
            monster_stats = (Lycan);
            document.getElementById("m_bild").src ="bilder/lycan.jfif"
            return (monster_stats);
        }
        else if (monster == 0) {
            monster_stats = (Golem)
            document.getElementById("m_bild").src ="bilder/golem.jfif"
            return (monster_stats)
        }
    }
    else (spelar_stats.p_lvl < 30 && spelar_stats.p_lvl >= 20); {
        let Undead = new Monster(statgen(15, 22), statgen(4, 5), "Undead")
        let Orc = new Monster(statgen(9, 15), statgen(6, 10), "Orc")
        if (monster == 1) {
            monster_stats = (Undead);
            document.getElementById("m_bild").src ="bilder/undead.jfif"
            return (monster_stats);
        }
        else if (monster == 0) {
            monster_stats = (Orc)
            document.getElementById("m_bild").src ="bilder/orc.jfif"
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


// ---------------------------------------- SLUT  ----------------------------------------

// ---------------------------------------- lvl poäng  ----------------------------------------

function lvl_upgr(n){
  
  if (n==1){
    spelar_stats.p_hp += 1
    spelar_stats.p_lvlpoäng = 0
  }
  else if(n==2){
    spelar_stats.p_str += 1
    spelar_stats.p_lvlpoäng = 0
  }
  document.getElementById("lvl_poäng").style.display = "none"
  return
}

// ---------------------------------------- lvl poäng  ----------------------------------------

// ---------------------------------------- FIGHT ----------------------------------------

function fight(monster_stats) {

    document.getElementById("meddelande").innerHTML =
        ( "Du stöter på en " + monster_stats.m_namn + "<br/>med " + monster_stats.m_hp + " hp och " + monster_stats.m_str + " str <br/>")

    while (monster_stats.m_hp > 0) {

        if (spelar_stats.p_str + spelar_stats.vapen.v_str >= monster_stats.m_hp) {
            spelar_stats.p_lvl += 1
            document.getElementById("meddelande").innerHTML += ("Du besegrade monstret <br/>Du har " + spelar_stats.p_hp + " hp kvar <br/> Du är är nu lvl " + spelar_stats.p_lvl + "<br/")
            spelar_stats.p_lvlpoäng += 1
            if (spelar_stats.p_lvl == 10) {
                spelar_stats.p_hp += 3
                document.getElementById("audio").src = " ../musik/7ds [Instrumental].mp3"
                document.getElementById("body").style.backgroundColor = "darkgreen"
            }

            else if (spelar_stats.p_lvl == 20){
                spelar_stats.p_hp +=3
                document.getElementById("audio").src = "musik/Vickeblanka - Black Rover (Instrumental).mp3"
                document.getElementById("body").style.backgroundColor = "navy"
                
            }

            return

        }
        else if (  spelar_stats.p_hp + spelar_stats.vapen.v_hp <= monster_stats.m_str) {
            document.getElementById("over").innerHTML = (" Du blev dödat av en "+ monster_stats.m_namn+"<br/> Du nådde lvl " + spelar_stats.p_lvl + "<br/> Måste vara skill issue <br/> ")
            document.getElementById("förlust").style.display = "block"
            return
        }
        else {
            monster_stats.m_hp = monster_stats.m_hp - spelar_stats.p_str - spelar_stats.vapen.v_str
            spelar_stats.p_hp = spelar_stats.p_hp - monster_stats.m_str + spelar_stats.vapen.v_hp
        }

    }
}



// ---------------------------------------- FIGHT ----------------------------------------

// ---------------------------------------- RUM TYP ----------------------------------------



function rum_typ() {

    if (spelar_stats.p_lvl < 30) {



        let typ = Math.round(Math.random() * 10)
        if ([1, 2, 3, 4, 10].includes(typ)) {
            let monster_stats = monstrgenerator()
            document.getElementById("m_stat").innerHTML = ("Monster stat")
            document.getElementById("m_hälsa").innerHTML = ("Hp: "+ monster_stats.m_hp)
            document.getElementById("m_styrka").innerHTML = ("Str: "+monster_stats.m_str)
            fight(monster_stats)
            if (spelar_stats.p_lvlpoäng == 3) {
                document.getElementById("lvl_poäng").style.display = "block"
            }

        }
        else if ([5, 6].includes(typ)) {
            document.getElementById("meddelande").innerHTML = ("Du kommer till ett tomt rum <br/>")

        }
        else if ([7, 8].includes(typ)) {
            document.getElementById("val_kista").style.display = " block"

        }
        else if ([9].includes(typ)) {
            fälla()

        }
    }
    else {
        document.getElementById("val_taurus").style.display = "block"
        document.getElementById("audio").src = "musik/BC OP1.mp3"
        document.getElementById("body").style.backgroundColor = "maroon"
    }

}


function fälla() {
    if (spelar_stats.p_hp > 1) {
        spelar_stats.p_hp -= 1
        document.getElementById("meddelande").innerHTML = (
            "Du klev i en fälla, du har nu " + spelar_stats.p_hp + " hp kvar <br/>")

    }
    else {

        document.getElementById("over").innerHTML = (" Du dör i en fälla <br/> Du nådde lvl " + spelar_stats.p_lvl + "<br/> Måste vara skill issue ")
        document.getElementById("förlust").style.display = "block"
    }
}

// ---------------------------------------- RUM TYP OCH KISTA ----------------------------------------

// ---------------------------------------- VALFUNKTIONER ----------------------------------------



function öppna(){
    document.getElementById("val_kista").style.display = "none"
    vapen = vapengenerator()
    document.getElementById("m_stat").innerHTML = ("Nytt Vapen stat")
    document.getElementById("m_hälsa").innerHTML = ("Hp: "+ nytt_vapen.v_hp)
    document.getElementById("m_styrka").innerHTML = ("Str: "+ nytt_vapen.v_str)
    document.getElementById("vapentext").innerHTML = ("Du finner "+ nytt_vapen.v_namn+ " med hp "+ nytt_vapen.v_hp+ " och str "+ nytt_vapen.v_str+"<br/> Vad vill du göra?")
    document.getElementById("val_vapen").style.display = "block"
    
}

function lämna(){
    document.getElementById("val_kista").style.display = "none"
    document.getElementById("meddelande").innerHTML += ("du lämnar kistan där för att rutna, utan att någonsinn få veta vad som finns i den. <br/> Kistans inehåll kommer att förbli ett mysterium för alltid. <br/>")

}

function byt_ut(){
    document.getElementById("meddelande").innerHTML = ("Du har nu ett nytt vapen i din ryggsäck <br/>")
    spelar_stats.vapen = vapen
    document.getElementById("val_vapen").style.display = "none"
    if (nytt_vapen.v_namn == "ett Svärd"){
        document.getElementById("v_bild").src ="bilder/svärd.jfif"
    }
    else if(nytt_vapen.v_namn == "ett Spjut"){
        document.getElementById("v_bild").src ="bilder/spjut.jfif"
    }
    else if(nytt_vapen.v_namn == "en Sköld"){
        document.getElementById("v_bild").src ="bilder/sköld.jfif"
    }
    else if(nytt_vapen.v_namn == "en Yxa"){
        document.getElementById("v_bild").src ="bilder/yxa.jfif"
    }
    else if(nytt_vapen.v_namn == "en Pilbåge"){
        document.getElementById("v_bild").src ="bilder/pilbåge.jfif"
    }

}

function lämna_vapen(){
    document.getElementById("val_vapen").style.display = "none"
    document.getElementById("meddelande").innerHTML = (
        "Du lämnade det nya fräsha vapnet i kistan för du kan inte överge ditt gamla vapen efter allt ni gjort tilsammans <br/>")
}

function ge_upp(){
    document.getElementById("over").innerHTML = (" Du gav upp <br/> Du nådde lvl " + spelar_stats.p_lvl + "<br/> Måste vara skill issue <br/> ")
    document.getElementById("val_taurus").style.display = "none"
    document.getElementById("förlust").style.display = "block"
}

function boss_fight() {

    document.getElementById("val_taurus").style.display = "none"
    let m_hp = 30
    let m_str = 10

   
    while (m_hp > 0) {
        if (spelar_stats.p_str + spelar_stats.vapen.v_str >= m_hp) {
            document.getElementById("vinst").style.display = "block"
            return
        }
        else if ( m_str >= spelar_stats.p_hp + spelar_stats.vapen.v_hp) {
            document.getElementById("over").innerHTML = (" Du blir dödat av Taurus <br/> Du nådde lvl " + spelar_stats.p_lvl + "<br/> Måste vara skill issue <br/> ")
            document.getElementById("förlust").style.display = "block"
            return
        }
        else  {
            m_hp = m_hp -
                spelar_stats.p_str - spelar_stats.vapen.v_str
            spelar_stats.p_hp = spelar_stats.p_hp - m_str + spelar_stats.vapen.v_hp
                
        }
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
        case vänster:
            directions.left = false;
            break;
        case höger:
            directions.right = false;
            break;
        case up:
            directions.up = false;
            break;
        case ner:
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


