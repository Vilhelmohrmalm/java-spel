
// ---------------------------- klasser och stat generatorer--------------------------------------------//

function statgen(a, b){
    return(Math.round(Math.random()*b+a))
    }



function vapengenerator(spelar_stats){
    if( spelar_stats.p_lvl < 10){
        let Svärd = new Vapen(statgen(0, 1), statgen(1, 2), "ett Svärd")
        let Sköld = new Vapen(statgen(1, 2), statgen(0, 0), "en Sköld")
        let Yxa = new Vapen(statgen(0, 0), statgen(1, 4), "en Yxa")
        let Pilbåge = new Vapen(statgen(0, 0), statgen(1, 3), "en Pilbåge")
        let Spjut = new Vapen(statgen(0, 0), statgen(2, 3), "ett Spjut")
        let Vlista = [Svärd, Sköld, Yxa, Pilbåge, Spjut]
        let index = Math.floor(Math.random() * Vlista.length);
        let vapen = Vlista[index]
        return(vapen)
    
    }
    else if (spelar_stats.p_lvl < 20){
        let Svärd = new Vapen(statgen(0, 1), statgen(2, 4), "ett Svärd")
        let Sköld = new Vapen(statgen(2, 3), statgen(0, 0), "en Sköld")
        let Yxa = new Vapen(statgen(0, 0), statgen(1, 6), "en Yxa")
        let Pilbåge = new Vapen(statgen(0, 0), statgen(2, 5), "en Pilbåge")
        let Spjut = new Vapen(statgen(0, 0), statgen(3, 4), "ett Spjut")
        let Vlista = [Svärd, Sköld, Yxa, Pilbåge, Spjut]
        let index = Math.floor(Math.random() * Vlista.length);
        let vapen = Vlista[index]
        return(vapen)
    }
    else if(spelar_stats.p_lvl < 30){
        let Svärd = new Vapen(statgen(1, 1), statgen(4, 5), "ett Svärd")
        let Sköld = new Vapen(statgen(3, 4), statgen(0, 0), "en Sköld")
        let Yxa = new Vapen(statgen(0, 0), statgen(3, 8), "en Yxa")
        let Pilbåge = new Vapen(statgen(0, 0), statgen(4, 7), "en Pilbåge")
        let Spjut = new Vapen(statgen(0, 0), statgen(5, 6), "ett Spjut")
        let Vlista = [Svärd, Sköld, Yxa, Pilbåge, Spjut]
        let index = Math.floor(Math.random() * Vlista.length);
        let vapen = Vlista[index]
        return(vapen)
    }
}
    




class Vapen {
        constructor(v_namn,v_hp,v_str){
        this.v_namn = v_namn;
        this.v_hp = v_hp;
        this.v_str = v_str;}
    
}


class Karaktärer{
    constructor( p_hp, p_str, p_lvl, p_lvlpoäng, p_namn, vapen){
    this.p_hp = p_hp;
    this.p_str = p_str;
    this.p_lvl = p_lvl;
    this.p_lvlpoäng = p_lvlpoäng;
    this.p_namn = p_namn;
    this.vapen = vapen; }
}

class Monster{
    constructor( m_hp, m_str, m_namn){
        this.m_namn = m_namn;
        this.m_hp = m_hp;
        this.m_str = m_str;}
    //def __str__(self):
      //  return f"Du stöter på en {self.m_namn}, den har {self.m_hp} hp och {self.m_str} styrka"
}

function monstrgenerator(){
    monster = Math.round(Math.random())
    if (Karaktärer.p_lvl < 10){
        let Slime = new Monster(statgen(4, 11), statgen(2, 6), "Slime")
        let Goblin = new Monster(statgen(3, 7), statgen(3, 8), "Goblin")
        if (monster == 1){
        monster_stats = (Slime);
        return (monster_stats);
        }
        else if (monster == 2){
        monster_stats = (Goblin)
        return (monster_stats)
        }
    }

    else if (Karaktärer.p_lvl < 20){
        let Lycan = new Monster(statgen(6, 12), statgen(4, 9), "Lycan")
        let Golem = new Monster(statgen(12, 17), statgen(3,3), "Golem")  
        if (monster == 1){
        monster_stats = (Lycan);
        return (monster_stats);
        }
        else if (monster == 2){
        monster_stats = (Golem)
        return (monster_stats)
        }
    }
    else (Karaktärer.p_lvl < 30);{
        let Undead = new Monster(health(15, 22), damage(4, 5), "Undead")
        let Orc = new Monster(health(9, 15), damage(6, 10), "Orc") 
        if (monster == 1){
        monster_stats = (Undead);
        return (monster_stats);
        }
        else if (monster == 2){
        monster_stats = (Orc)
        return (monster_stats)
        }
    }
}


let Start = new Vapen(0, 0, "en pinne")

let Assasin = new Karaktärer(5, 10, 0, 0, "assasin", Start)
let Barb = new Karaktärer(8, 7, 0, 0, "Barb", Start)
let Knight = new Karaktärer(10, 5, 0, 0, "Knight", Start)

// ---------------------------- klasser och stat generatorer--------------------------------------------//

// ---------------------------------------- SLUT  ----------------------------------------

function slut(){
    console.log("Game Over")
    quit()
}
// ---------------------------------------- SLUT  ----------------------------------------

// ---------------------------------------- lvl poäng  ----------------------------------------


function lvl_poäng(spelar_stats){

    let val = prompt("Vilken vill du höja\n H = hp\n S = str\n")

    if (["H", "h", "hp"].includes(val)){
        spelar_stats.p_hp += 1
        console.log("Din hp är nu", spelar_stats.p_hp, "\n")
        spelar_stats.p_lvlpoäng = 0
        return spelar_stats
    }
    else if (["S", "s", "str"].includes(val)){
        spelar_stats.p_str += 1
        console.log('Din str är nu', spelar_stats.p_str, "\n")
        spelar_stats.p_lvlpoäng = 0
        return spelar_stats
    }
    else{
        console.log("Din sopa välj ett av alternativen\n")
        return lvl_poäng(spelar_stats)
    }

}
// ---------------------------------------- lvl poäng  ----------------------------------------

// ---------------------------------------- FIGHT ----------------------------------------


function fight(spelar_stats, monster_stats){
    console.log(
        "och du stöter på en", monster_stats.m_namn, "med", monster_stats.m_hp, "hp och", monster_stats.m_str, "str\n")

    while (monster_stats.m_hp > 0) {

        if (spelar_stats.p_str + spelar_stats.vapen.v_str >= monster_stats.m_hp){
            console.log("Du besegrade monstret\n")
            console.log("Du har", spelar_stats.p_hp, "hp kvar\n")
            spelar_stats.p_lvl += 1
            console.log("Du är är nu lvl", spelar_stats.p_lvl,"\n")
            spelar_stats.p_lvlpoäng += 1
            return (spelar_stats)
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



function boss_fight(spelar_stats){
    console.log("Nu har du nått sista kammaren men där väntar Taurus\n Hans massiva slimekapacitet har gett honom en hp på 30 och en styrka på 10\n")
   let m_hp = 30
    let m_str = 10
    let val = prompt("S = sloss mot Taurus\nL = ge upp\n")
    while (m_hp == 30){
        if (["S", "s", "sloss", "sloss mot Taurus"].includes(val)){
            while (m_hp > 0){
                if (spelar_stats.p_str + spelar_stats.vapen.v_str >= m_hp){
                    console.log(
                        "Du besegrade tarus och kan änligen lämna labyrinten\n")
                    return (spelar_stats)
                    }
                else if (spelar_stats.p_str + spelar_stats.vapen.v_str < m_hp && m_str >= spelar_stats.p_hp + spelar_stats.vapen.v_hp){
                    console.log(
                        "Taurus dödade dig\n Måste vara skill issue\n")
                    slut()
                }
                else if (spelar_stats.p_str + spelar_stats.vapen.v_str < m_hp && m_str < spelar_stats.p_hp + spelar_stats.vapen.v_hp){
                    m_hp = m_hp -
                        spelar_stats.p_str - spelar_stats.vapen.v_str
                    spelar_stats.p_hp = spelar_stats.p_hp -
                        m_str + spelar_stats.vapen.v_hp
                }
            }
        }
        else if  (["L", "l", "ge upp"].includes(val)){
            console.log(
                "Du gav upp och dog på lvl 30\n Måst vara skill issue\n")
            slut()
            }
        else{
            typingPrint("Din sopa välj ett av alternativen\n")
        }
    }
}

// ---------------------------------------- FIGHT ----------------------------------------

// ---------------------------------------- RUM TYP OCH KISTA ----------------------------------------


function kista(spelar_stats){

    let vapen=vapengenerator(spelar_stats)

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
            return spelar_stats
        }
        else{
            console.log(
                "Du lämnade det nya fräsha vapnet i kistan för du kan inte överge ditt gamla vapen efter allt ni gjort tilsammans\n")
            return spelar_stats
        }
    }
}


def rum_typ_fas1(spelar_stats):
    typ = random.randint(1, 10)
    if typ in [1, 2, 3, 4, 10]:
        monster_stats = monstrgenerator_fas1()
        spelar_stats = fight(spelar_stats, monster_stats)
        if spelar_stats.p_lvlpoäng == 3:
            typingPrint(
                "Du har nu fått en lvl uppgradering som du kan använda för att höja en valfri stat med 1. \n")
            typingPrint(
                f"Dina nuvarande stats är {spelar_stats.p_hp} hp och {spelar_stats.p_str} str \n")
            spelar_stats = lvl_poäng(spelar_stats)
            return (spelar_stats)
        else:
            return spelar_stats
    elif typ in [5, 6]:
        typingPrint("och kommer till ett tomt rum\n")
        return (spelar_stats)
    elif typ in [7, 8]:
        val_kista_fas1(spelar_stats)
        return (spelar_stats)
    elif typ in [9]:
        fälla(spelar_stats)
        return (spelar_stats)


def rum_typ_fas2(spelar_stats):
    typ = random.randint(1, 10)
    if typ in [1, 2, 3, 4]:
        monster_stats = monstrgenerator_fas2()
        spelar_stats = fight(spelar_stats, monster_stats)
        if spelar_stats.p_lvlpoäng == 3:
            typingPrint(
                "Du har nu fått en lvl uppgradering som du kan använda för att höja en valfri stat med 1. \n")
            typingPrint(
                f"Dina nuvarande stats är {spelar_stats.p_hp} hp och {spelar_stats.p_str} str \n")
            spelar_stats = lvl_poäng(spelar_stats)
            return (spelar_stats)
        else:
            return spelar_stats
    elif typ in [5, 6]:
        typingPrint("och kommer till ett tomt rum\n")
        return (spelar_stats)
    elif typ in [7, 8]:
        val_kista_fas2(spelar_stats)
        return (spelar_stats)
    elif typ in [9, 10]:
        fälla(spelar_stats)
        return (spelar_stats)


def rum_typ_fas3(spelar_stats):
    typ = random.randint(1, 10)
    if typ in [1, 2, 3, 4]:
        monster_stats = monstrgenerator_fas3()
        spelar_stats = fight(spelar_stats, monster_stats)
        if spelar_stats.p_lvlpoäng == 3:
            typingPrint(
                "Du har nu fått en lvl uppgradering som du kan använda för att höja en valfri stat med 1. \n")
            typingPrint(
                f"Dina nuvarande stats är {spelar_stats.p_hp} hp och {spelar_stats.p_str} str \n")
            spelar_stats = lvl_poäng(spelar_stats)
            return (spelar_stats)
        else:
            return spelar_stats
        return (spelar_stats)
    elif typ in [5, 6]:
        typingPrint("och kommer till ett tomt rum\n")
        return (spelar_stats)
    elif typ in [7, 8]:
        val_kista_fas3(spelar_stats)
        return (spelar_stats)
    elif typ in [9, 10]:
        fälla(spelar_stats)
        return (spelar_stats)


def fälla(spelar_stats):
    if spelar_stats.p_hp > 1:
        spelar_stats.p_hp -= 1
        typingPrint(
            f"där du klev i en fälla, du har nu {spelar_stats.p_hp} hp kvar\n")
        return spelar_stats
    else:
        typingPrint(
            f"där du dör i en fälla\n Du nådde lvl {spelar_stats.p_lvl}\n Måste vara skill issue\n")
        slut()


// ---------------------------------------- RUM TYP OCH KISTA ----------------------------------------

// ---------------------------------------- VALFUNKTIONER ----------------------------------------


def val_vanlig_fas1(spelar_stats):

    while spelar_stats.p_lvl <= 9:
        val = typingInput(
            "vad vill du göra?\n S = se stats\n V = gå vänster\n F = gå fram\n H = gå höger\n R = öppna ryggsäck\n")
        if val in ["S", "stats", "s", "se stats"]:
            typingPrint(
                f"Du har {spelar_stats.p_hp} hp, din str är {spelar_stats.p_str} och din lvl är {spelar_stats.p_lvl}\n")

        elif val in ["V", "vänster", "v", "gå vänster"]:
            typingPrint("Du går igenom dörren till vänster ")
            rum_typ_fas1(spelar_stats)
        elif val in ["H", "höger", "h", "gå höger"]:
            typingPrint("Du går igenom dörren till höger ")
            rum_typ_fas1(spelar_stats)
        elif val in ["R", "ryggsäck", "r", "öppna ryggsäck"]:
            typingPrint(
                f"Du har {spelar_stats.vapen.v_namn} med {spelar_stats.vapen.v_hp} hp {spelar_stats.vapen.v_str} str \n")
        elif val in ["F", "fram", "f", "fram"]:
            typingPrint("Du går igenom dörren framför dig ")
            rum_typ_fas1(spelar_stats)
        else:
            typingPrint("Din sopa välj ett av alternativen\n")

    return (spelar_stats)


def val_vanlig_fas2(spelar_stats):
    spelar_stats.p_hp += 3
    typingPrint(
        "Du har nu nått fas två som betyder att monstrerna kommer vara starkare och vapnen bättre\n Men du får 3 extra hp\n")
    while spelar_stats.p_lvl <= 19:
        val = typingInput(
            "vad vill du göra?\n S = se stats\n V = gå vänster\n F = gå fram\n H = gå höger\n R = öppna ryggsäck\n")
        if val in ["S", "stats", "s", "se stats"]:
            typingPrint(
                f"Du har {spelar_stats.p_hp} hp, din str är {spelar_stats.p_str} och din lvl är {spelar_stats.p_lvl}\n")

        elif val in ["V", "vänster", "v", "gå vänster"]:
            typingPrint("Du går igenom dörren till vänster ")
            rum_typ_fas2(spelar_stats)
        elif val in ["H", "höger", "h", "gå höger"]:
            typingPrint("Du går igenom dörren till höger ")
            rum_typ_fas2(spelar_stats)
        elif val in ["R", "ryggsäck", "r", "öppna ryggsäck"]:
            typingPrint(
                f"Du har {spelar_stats.vapen.v_namn} med {spelar_stats.vapen.v_hp} hp {spelar_stats.vapen.v_str} str \n")
        elif val in ["F", "fram", "f", "gå fram"]:
            typingPrint("Du går igenom dörren framför dig ")
            rum_typ_fas2(spelar_stats)
        else:
            typingPrint("Din sopa välj ett av alternativen\n")

    return (spelar_stats)


def val_vanlig_fas3(spelar_stats):
    spelar_stats.p_hp += 3
    typingPrint(
        "Du har nu nått fas tre som betyder att monstrerna kommer vara starkare och vapnen bättre\n Men du får 3 extra hp\n")
    while spelar_stats.p_lvl <= 29:
        val = typingInput(
            "vad vill du göra?\n S = se stats\n V = gå vänster\n F = gå fram\n H = gå höger\n R = öppna ryggsäck\n")
        if val in ["S", "stats", "s", "se stats"]:
            typingPrint(
                f"Du har {spelar_stats.p_hp} hp, din str är {spelar_stats.p_str} och din lvl är {spelar_stats.p_lvl}\n")

        elif val in ["V", "vänster", "v", "gå vänster"]:
            typingPrint("Du går igenom dörren till vänster ")
            rum_typ_fas3(spelar_stats)
        elif val in ["H", "höger", "h", "gå höger"]:
            typingPrint("Du går igenom dörren till höger ")
            rum_typ_fas3(spelar_stats)
        elif val in ["R", "ryggsäck", "r", "öppna ryggsäck"]:
            typingPrint(
                f"Du har {spelar_stats.vapen.v_namn} med {spelar_stats.vapen.v_hp} hp {spelar_stats.vapen.v_str} str \n")
        elif val in ["F", "fram", "f", "gå fram"]:
            typingPrint("Du går igenom dörren framför dig ")
            rum_typ_fas3(spelar_stats)
        else:
            typingPrint("Din sopa välj ett av alternativen\n")

    return (spelar_stats)


def val_kista_fas1(spelar_stats):
    val = typingInput(
        "och hittar en kista. Vad vill du göra?\n S = se stats\n Ö = öppna kista\n L = lämna kistan\n")
    if val in ["S", "stats", "s", "se stats"]:
        typingPrint(
            f"Du har hp {spelar_stats.p_hp}, din str är {spelar_stats.p_str} och din lvl är {spelar_stats.p_lvl}\n")
        return val_kista_fas1(spelar_stats)
    elif val in ["Ö", "öppna", "ö", "öppna kista"]:
        typingPrint(
            "du öppnar kistan och i den hittar du ")
        kista_fas1(spelar_stats)
        return spelar_stats
    elif val in ["L", "lämna kistan", "lämna", "l"]:
        typingPrint("du lämnar kistan där för att rutna, utan att någonsinn få veta vad som finns i den.\nKistans inehåll kommer att förbli ett mysterium för alltid.\n")
        return spelar_stats
    else:
        typingPrint("din sopa välj ett av alternativen")
        return val_kista_fas1(spelar_stats)


def val_kista_fas2(spelar_stats):
    val = typingInput(
        "och hittar en kista. Vad vill du göra?\n S = se stats\n Ö = öppna kista\n L = lämna kistan\n")
    if val in ["S", "stats", "s", "se stats"]:
        typingPrint(
            f"Du har hp {spelar_stats.p_hp}, din str är {spelar_stats.p_str} och din lvl är {spelar_stats.p_lvl}\n")
        return val_kista_fas2(spelar_stats)
    elif val in ["Ö", "öppna", "ö", "öppna kista"]:
        typingPrint(
            "du öppnar kistan och i den hittar du ")
        kista_fas2(spelar_stats)
        return spelar_stats
    elif val in ["L", "lämna kistan", "lämna", "l"]:
        typingPrint("du lämnar kistan där för att rutna, utan att någonsinn få veta vad som finns i den.\nKistans inehåll kommer att förbli ett mysterium för alltid.\n")
        return spelar_stats
    else:
        typingPrint("din sopa välj ett av alternativen")
        return val_kista_fas2(spelar_stats)


def val_kista_fas3(spelar_stats):
    val = typingInput(
        "och hittar en kista. Vad vill du göra?\n S = se stats\n Ö = öppna kista\n L = lämna kistan\n")
    if val in ["S", "stats", "s", "se stats"]:
        typingPrint(
            f"Du har hp {spelar_stats.p_hp}, din str är {spelar_stats.p_str} och din lvl är {spelar_stats.p_lvl}\n")
        return val_kista_fas3(spelar_stats)
    elif val in ["Ö", "öppna", "ö", "öppna kista"]:
        typingPrint(
            "du öppnar kistan och i den hittar du ")
        kista_fas3(spelar_stats)
        return spelar_stats
    elif val in ["L", "lämna kistan", "lämna", "l"]:
        typingPrint("du lämnar kistan där för att rutna, utan att någonsinn få veta vad som finns i den.\nKistans inehåll kommer att förbli ett mysterium för alltid.\n")
        return spelar_stats
    else:
        typingPrint("din sopa välj ett av alternativen")
        return val_kista_fas3(spelar_stats)

// ---------------------------------------- VALFUNKTIONER ----------------------------------------

// ---------------------------------------- SPELFUNKTIONER ----------------------------------------


def karaktärsval():
    namn = (typingInput("""
    Välj din karaktär.
    svara med 1, 2 eller 3.

    1. Assasin       2. Barbarian       3. Knight
    hp = 5           hp = 8             hp = 10 
    str = 10         str = 7            str = 5 
    """))

    if namn == "1":
        Spelar_stats = (Assasin)
        typingPrint(" Du är nu en Assasin med 5 hp och 10 str \n")
        return (Spelar_stats)

    elif namn == "2":
        Spelar_stats = (Barb)
        typingPrint(" Du är nu en Barbarian med 8 hp och 7 str \n")
        return (Spelar_stats)

    elif namn == "3":
        Spelar_stats = (Knight)
        typingPrint(" Du är nu en Knight med 10 hp och 5 str \n")
        return (Spelar_stats)

    else:
        typingPrint("svara 1, 2 eller 3 din sopa\n")
        return karaktärsval()


function main(){
    console.log("""
    Välkommen till Daedalus labyrint

    Ditt mål är att nå lvl 30 men se upp för Taurus.
    Han har en slimekapasitet på 100%.
    """)

    spelar_stats = karaktärsval(),

    val_vanlig_fas1(spelar_stats),

    val_vanlig_fas2(spelar_stats),

    val_vanlig_fas3(spelar_stats),

    boss_fight(spelar_stats),

    typingPrint("Grattis du vann\n"),
    slut(),

}
main()

// ---------------------------------------- SPELFUNKTIONER ----------------------------------------
