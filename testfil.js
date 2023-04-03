function lvl_poäng(spelar_stats){

    let val = input("Vilken vill du höja\n H = hp\n S = str\n")
    if (val in ["H", "h", "hp"]):
        spelar_stats.p_hp += 1
        typingPrint(f"Din hp är nu {spelar_stats.p_hp}\n")
        spelar_stats.p_lvlpoäng = 0
        return spelar_stats
    elif val in ["S", "s", "str"]:
        spelar_stats.p_str += 1
        typingPrint(f"Din str är nu {spelar_stats.p_str}\n")
        spelar_stats.p_lvlpoäng = 0
        return spelar_stats
    else:
        typingPrint("Din sopa välj ett av alternativen\n")
        return lvl_poäng(spelar_stats)

}