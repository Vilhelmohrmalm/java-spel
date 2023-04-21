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

kista(spelar_stats)