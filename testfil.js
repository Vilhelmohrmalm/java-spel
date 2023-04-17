

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

let Start = new Vapen(0, 0, "en pinne")

let Assasin = new Karaktärer(5, 10, 0, 0, "assasin", Start)

let Undead = new Monster(1, 0, "Undead")

let spelar_stats = Assasin

let monster_stats = Undead

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
        else{console.log("bag")}
    }
}
console.log(monster_stats.m_hp)
console.log(fight(spelar_stats, monster_stats))