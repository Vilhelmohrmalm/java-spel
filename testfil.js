class Karaktärer{
    constructor( p_hp, p_str, p_lvl, p_lvlpoäng, p_namn, vapen){
    this.p_hp = p_hp;
    this.p_str = p_str;
    this.p_lvl = p_lvl;
    this.p_lvlpoäng = p_lvlpoäng;
    this.p_namn = p_namn;
    this.vapen = vapen; }
}

class Vapen {
    constructor(v_namn,v_hp,v_str){
    this.v_namn = v_namn;
    this.v_hp = v_hp;
    this.v_str = v_str;}

}

let Start = new Vapen(0, 0, "en pinne")

let Assasin = new Karaktärer(5, 10, 0, 0, "assasin", Start)
let Barb = new Karaktärer(8, 7, 0, 0, "Barb", Start)
let Knight = new Karaktärer(10, 5, 0, 0, "Knight", Start)

console.log(Assasin)