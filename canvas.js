function statgen(a, b) {
    return (Math.round(Math.random() * b + a))
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
    else if (spelar_stats.p_lvl < 20) {
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
    else if (spelar_stats.p_lvl < 30) {
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
    constructor(v_namn, v_hp, v_str) {
        this.v_namn = v_namn;
        this.v_hp = v_hp;
        this.v_str = v_str;
    }

}


class Karaktärer {
    constructor(p_hp, p_str, p_lvl, p_lvlpoäng, p_namn, vapen) {
        this.p_hp = p_hp;
        this.p_str = p_str;
        this.p_lvl = p_lvl;
        this.p_lvlpoäng = p_lvlpoäng;
        this.p_namn = p_namn;
        this.vapen = vapen;
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
    monster = Math.round(Math.random())
    if (Karaktärer.p_lvl < 10) {
        let Slime = new Monster(statgen(4, 11), statgen(2, 6), "Slime")
        let Goblin = new Monster(statgen(3, 7), statgen(3, 8), "Goblin")
        if (monster == 1) {
            monster_stats = (Slime);
            return (monster_stats);
        }
        else if (monster == 2) {
            monster_stats = (Goblin)
            return (monster_stats)
        }
    }

    else if (Karaktärer.p_lvl < 20) {
        let Lycan = new Monster(statgen(6, 12), statgen(4, 9), "Lycan")
        let Golem = new Monster(statgen(12, 17), statgen(3, 3), "Golem")
        if (monster == 1) {
            monster_stats = (Lycan);
            return (monster_stats);
        }
        else if (monster == 2) {
            monster_stats = (Golem)
            return (monster_stats)
        }
    }
    else (Karaktärer.p_lvl < 30); {
        let Undead = new Monster(health(15, 22), damage(4, 5), "Undead")
        let Orc = new Monster(health(9, 15), damage(6, 10), "Orc")
        if (monster == 1) {
            monster_stats = (Undead);
            return (monster_stats);
        }
        else if (monster == 2) {
            monster_stats = (Orc)
            return (monster_stats)
        }
    }
}


let Start = new Vapen(0, 0, "en pinne")

let Assasin = new Karaktärer(5, 10, 0, 0, "assasin", Start)
let Barb = new Karaktärer(8, 7, 0, 0, "Barb", Start)
let Knight = new Karaktärer(10, 5, 0, 0, "Knight", Start)


function rum_typ(spelar_stats) {
    console.log("penis")
    let typ = random.randint(1, 10)
    if ([1, 2, 3, 4, 10].includes(typ)) {
        let monster_stats = monstrgenerator()
        spelar_stats = fight(spelar_stats, monster_stats)
        if (spelar_stats.p_lvlpoäng == 3) {
            console.log(
                "Du har nu fått en lvl uppgradering som du kan använda för att höja en valfri stat med 1. \n")
            typingPrint(
                "Dina nuvarande stats är", spelar_stats.p_hp, "hp och", spelar_stats.p_str, " str \n")
            spelar_stats = lvl_poäng(spelar_stats)
            return (spelar_stats)
        }
        else {
            return spelar_stats
        }
    }
    else if ([5, 6].includes(typ)) {
        console.log("och kommer till ett tomt rum\n")
        return (spelar_stats)
    }
    else if ([7, 8].includes(typ)) {
        val_kista(spelar_stats)
        return (spelar_stats)
    }
    else if ([9].includes(typ)) {
        fälla(spelar_stats)
        return (spelar_stats)
    }
}

function start() {
    var start = document.getElementById("startsida")
    var karaktär = document.getElementById("karaktärsval")
    start.style.display = "none"
    karaktär.style.display = "block"
}

function assa() {
    var val = document.getElementById("karaktärsval")
    val.style.display = "none"
    spelar_stats = Assasin;
    c.fillStyle = "black";
    animate(spelar_stats);
}

function barb() {
    var val = document.getElementById("karaktärsval")
    val.style.display = "none"
    spelar_stats = Barb;
    animate(spelar_stats);
}

function knig() {
    var val = document.getElementById("karaktärsval")
    val.style.display = "none"
    spelar_stats = knig;
    animate(spelar_stats);
}

function rum_typ(spelar_stats) {
    let typ = random.randint(1, 10)
    if ([1, 2, 3, 4, 10].includes(typ)) {
        let monster_stats = monstrgenerator()
        spelar_stats = fight(spelar_stats, monster_stats)
        if (spelar_stats.p_lvlpoäng == 3) {
            console.log(
                "Du har nu fått en lvl uppgradering som du kan använda för att höja en valfri stat med 1. \n")
            typingPrint(
                "Dina nuvarande stats är", spelar_stats.p_hp, "hp och", spelar_stats.p_str, " str \n")
            spelar_stats = lvl_poäng(spelar_stats)
            return (spelar_stats)
        }
        else {
            return spelar_stats
        }
    }
    else if ([5, 6].includes(typ)) {
        console.log("och kommer till ett tomt rum\n")
        return (spelar_stats)
    }
    else if ([7, 8].includes(typ)) {
        val_kista(spelar_stats)
        return (spelar_stats)
    }
    else if ([9].includes(typ)) {
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
function animate(spelar_stats) {
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
if (playerX + playerWidth == 675 && playerY > 198 && playerY < 343) {
    rum_typ(spelar_stats)
}

if (playerX + playerWidth == 25 && playerY > 198 && playerY < 343) {
    rum_typ(spelar_stats)
}

if (playerY == 30 && playerX > 280 && playerX < 420) {
    rum_typ(spelar_stats)
}
// -------------------------------------
// ------------ Start game ------------



