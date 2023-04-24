function statgen(a, b){
    return(Math.round(Math.random()*b+a))
    }

class Vapen {
    constructor(v_hp,v_str, v_namn){
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

let Start = new Vapen(0, 0, "en pinne")

let Assasin = new Karaktärer(11, 15, 5, 0, "assasin", Start)

let Undead = new Monster(11, 6, "Undead")

let spelar_stats = Assasin

let monster_stats = Undead




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

function fälla(spelar_stats){
    if (spelar_stats.p_hp > 1){
        spelar_stats.p_hp -= 1
        console.log(
            "där du klev i en fälla, du har nu", spelar_stats.p_hp," hp kvar\n")
        return spelar_stats
    }
    else{
        typingPrint(
            "där du dör i en fälla\n Du nådde lvl", spelar_stats.p_lvl,"\n Måste vara skill issue\n")
        slut()
    }
}


function val_vanlig(spelar_stats){

    while (spelar_stats.p_lvl <= 30){

        if ( [10, 20].includes(spelar_stats.p_lvl)){
            spelar_stats.p_hp += 3 
        }

        let val = prompt(
            "vad vill du göra?\n S = se stats\n V = gå vänster\n F = gå fram\n H = gå höger\n R = öppna ryggsäck\n")
        if ( ["S", "stats", "s", "se stats"].includes(val)){
            console.log(
                "Du har", spelar_stats.p_hp," hp, din str är", spelar_stats.p_str," och din lvl är", spelar_stats.p_lvl,"\n")
            }
        else if ( ["V", "vänster", "v", "gå vänster"].includes(val)){
            console.log("Du går igenom dörren till vänster ")
            rum_typ(spelar_stats)
        }
        else if ( ["H", "höger", "h", "gå höger"].includes(val)){
           console.log("Du går igenom dörren till höger ")
            rum_typ(spelar_stats)
        }
        else if (["R", "ryggsäck", "r", "öppna ryggsäck"].includes(val)){
            console.log(
                "Du har", spelar_stats.vapen.v_namn," med", spelar_stats.vapen.v_hp," hp", spelar_stats.vapen.v_str," str \n")
            }
        else if (["F", "fram", "f", "fram"].includes(val)){
            console.log("Du går igenom dörren framför dig ")
            rum_typ(spelar_stats)
        }
        else{
            console.log("Din sopa välj ett av alternativen\n")
        }
    }
    return (spelar_stats)
}

function val_kista(spelar_stats){
    let val = prompt(
        "och hittar en kista. Vad vill du göra?\n S = se stats\n Ö = öppna kista\n L = lämna kistan\n")
    if (["S", "stats", "s", "se stats"].includes(val)){
        console.log(
            "Du har hp", spelar_stats.p_hp,", din str är", spelar_stats.p_str," och din lvl är", spelar_stats.p_lvl,"\n")
        return val_kista(spelar_stats)
    }
    else if (["Ö", "öppna", "ö", "öppna kista"].includes(val)){
        console.log(
            "du öppnar kistan och i den hittar du ")
        kista(spelar_stats)
        return spelar_stats
    }
    else if (["L", "lämna kistan", "lämna", "l"].includes(val)){
        console.log("du lämnar kistan där för att rutna, utan att någonsinn få veta vad som finns i den.\nKistans inehåll kommer att förbli ett mysterium för alltid.\n")
        return spelar_stats
    }
    else{
        console.log("din sopa välj ett av alternativen")
        return val_kista(spelar_stats)
    }
}

function karaktärsval(){
    let namn = prompt("""
    Välj din karaktär.
    svara med 1, 2 eller 3.

    1. Assasin       2. Barbarian       3. Knight
    hp = 5           hp = 8             hp = 10 
    str = 10         str = 7            str = 5 
    """)

    if (namn == "1"){
        Spelar_stats = (Assasin)
        console.log(" Du är nu en Assasin med 5 hp och 10 str \n")
        return (Spelar_stats)
    }

    else if (namn == "2"){
        Spelar_stats = (Barb)
        console.log(" Du är nu en Barbarian med 8 hp och 7 str \n")
        return (Spelar_stats)
    }

    else if (namn == "3"){
        Spelar_stats = (Knight)
        console.log(" Du är nu en Knight med 10 hp och 5 str \n")
        return (Spelar_stats)
    }

    else{
        console.log("svara 1, 2 eller 3 din sopa\n")
        return karaktärsval()
    }
}


function main(){
    console.log("""
    Välkommen till Daedalus labyrint

    Ditt mål är att nå lvl 30 men se upp för Taurus.
    Han har en slimekapasitet på 100%.
    """)

    let spelar_stats = karaktärsval(),

    val_vanlig(spelar_stats),

    boss_fight(spelar_stats),

    console.log("Grattis du vann\n"),
    slut(),

}
main()