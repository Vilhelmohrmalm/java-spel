


function mstats(a, b){
    let health = [];
    for (i=a; a<=i<=b; i++){
        health[health.length]=i}
    return (random.choice(health))
}

console.log(mstats(4,8))

def damage(a, b):
    damage = []
    for i in range(a, b+1):
        damage.append(i)
    return (random.choice(damage))


class Vapen():
    def __init__(self, v_hp, v_str, v_namn):
        self.v_namn = v_namn
        self.v_hp = v_hp
        self.v_str = v_str


class Karaktärer():
    def __init__(self, p_hp, p_str, p_lvl, p_lvlpoäng, p_namn, vapen):
        self.p_hp = p_hp
        self.p_str = p_str
        self.p_lvl = p_lvl
        self.p_lvlpoäng = p_lvlpoäng
        self.p_namn = p_namn
        self.vapen = vapen


class Monster():
    def __init__(self, m_hp, m_str, m_namn):
        self.m_namn = m_namn
        self.m_hp = m_hp
        self.m_str = m_str

    def __str__(self):
        return f"Du stöter på en {self.m_namn}, den har {self.m_hp} hp och {self.m_str} styrka"


def monstrgenerator_fas1():
    monster = random.randint(1, 2)
    Slime = Monster(health(4, 11), damage(2, 6), "Slime")
    Goblin = Monster(health(3, 7), damage(3, 8), "Goblin")
    if monster == 1:
        monster_stats = (Slime)
        return (monster_stats)
    elif monster == 2:
        monster_stats = (Goblin)
        return (monster_stats)


def monstrgenerator_fas2():
    monster = random.randint(1, 2)
    Lycan = Monster(health(6, 12), damage(4, 9), "Lycan")
    Golem = Monster(health(12, 17), damage(3,3), "Golem")
    if monster == 1:
        monster_stats = (Lycan)
        return (monster_stats)
    elif monster == 2:
        monster_stats = (Golem)
        return (monster_stats)


def monstrgenerator_fas3():
    monster = random.randint(1, 2)
    Undead = Monster(health(15, 22), damage(4, 5), "Undead")
    Orc = Monster(health(9, 15), damage(6, 10), "Orc")
    if monster == 1:
        monster_stats = (Undead)
        return (monster_stats)
    elif monster == 2:
        monster_stats = (Orc)
        return (monster_stats)


Start = Vapen(0, 0, "en pinne")

Assasin = Karaktärer(5, 10, 0, 0, "assasin", Start)
Barb = Karaktärer(8, 7, 0, 0, "Barb", Start)
Knight = Karaktärer(10, 5, 0, 0, "Knight", Start)

# ---------------------------------------- SLUT  ----------------------------------------

def slut():
    typingPrint("Game Over")
    quit()

# ---------------------------------------- SLUT  ----------------------------------------

# ---------------------------------------- lvl poäng  ----------------------------------------


def lvl_poäng(spelar_stats):

    val = typingInput("Vilken vill du höja\n H = hp\n S = str\n")
    if val in ["H", "h", "hp"]:
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


# ---------------------------------------- lvl poäng  ----------------------------------------

# ---------------------------------------- FIGHT ----------------------------------------


def fight(spelar_stats, monster_stats):
    typingPrint(
        f"och du stöter på en {monster_stats.m_namn} med {monster_stats.m_hp} hp och {monster_stats.m_str} str\n")
    while monster_stats.m_hp > 0:
        if spelar_stats.p_str + spelar_stats.vapen.v_str >= monster_stats.m_hp:
            typingPrint("Du besegrade monstret\n")
            typingPrint(f"Du har {spelar_stats.p_hp} hp kvar\n")
            spelar_stats.p_lvl += 1
            typingPrint(f"Du är är nu lvl {spelar_stats.p_lvl}\n")
            spelar_stats.p_lvlpoäng += 1
            return (spelar_stats)

        elif spelar_stats.p_str + spelar_stats.vapen.v_str < monster_stats.m_hp and monster_stats.m_str >= spelar_stats.p_hp + spelar_stats.vapen.v_hp:
            typingPrint(
                f"Du dog\nDu nådde lvl {spelar_stats.p_lvl}\nMåste vara skill issue\n")
            slut()
        elif spelar_stats.p_str + spelar_stats.vapen.v_str < monster_stats.m_hp and monster_stats.m_str < spelar_stats.p_hp + spelar_stats.vapen.v_hp:
            monster_stats.m_hp = monster_stats.m_hp - \
                spelar_stats.p_str - spelar_stats.vapen.v_str
            spelar_stats.p_hp = spelar_stats.p_hp - \
                monster_stats.m_str + spelar_stats.vapen.v_hp


def boss_fight(spelar_stats):
    typingPrint("Nu har du nått sista kammaren men där väntar Taurus\n Hans massiva slimekapacitet har gett honom en hp på 30 och en styrka på 10\n")
    m_hp = 30
    m_str = 10
    val = typingInput("S = sloss mot Taurus\nL = ge upp\n")
    while m_hp == 30:
        if val in ["S", "s", "sloss", "sloss mot Taurus"]:
            while m_hp > 0:
                if spelar_stats.p_str + spelar_stats.vapen.v_str >= m_hp:
                    typingPrint(
                        "Du besegrade tarus och kan änligen lämna labyrinten\n")
                    return (spelar_stats)

                elif spelar_stats.p_str + spelar_stats.vapen.v_str < m_hp and m_str >= spelar_stats.p_hp + spelar_stats.vapen.v_hp:
                    typingPrint(
                        f"Taurus dödade dig\n Måste vara skill issue\n")
                    slut()
                elif spelar_stats.p_str + spelar_stats.vapen.v_str < m_hp and m_str < spelar_stats.p_hp + spelar_stats.vapen.v_hp:
                    m_hp = m_hp - \
                        spelar_stats.p_str - spelar_stats.vapen.v_str
                    spelar_stats.p_hp = spelar_stats.p_hp - \
                        m_str + spelar_stats.vapen.v_hp
        elif val in ["L", "l", "ge upp"]:
            typingPrint(
                "Du gav upp och dog på lvl 30\n Måst vara skill issue\n")
            slut()
        else:
            typingPrint("Din sopa välj ett av alternativen\n")
# ---------------------------------------- FIGHT ----------------------------------------

# ---------------------------------------- RUM TYP OCH KISTA ----------------------------------------


def kista_fas1(spelar_stats):

    Svärd = Vapen(health(0, 1), damage(1, 2), "ett Svärd")
    Sköld = Vapen(health(1, 2), damage(0, 0), "en Sköld")
    Yxa = Vapen(health(0, 0), damage(1, 4), "en Yxa")
    Pilbåge = Vapen(health(0, 0), damage(1, 3), "en Pilbåge")
    Spjut = Vapen(health(0, 0), damage(2, 3), "ett Spjut")

    vapen = random.choice([Svärd, Sköld, Yxa, Pilbåge, Spjut])
    typingPrint(
        f"{vapen.v_namn}.\n det har en hp på {vapen.v_hp} och en styrka på {vapen.v_str}\n")

    typingPrint(
        "Du måste ta bort ditt nuvarande vapen för att ta det nya\n")

    typingPrint(
        f"Du har {spelar_stats.vapen.v_namn} med {spelar_stats.vapen.v_hp} hp och {spelar_stats.vapen.v_str} str\n ")
    while True:
        svar = typingInput(
            "Om du vill byta det nya vapnet mot det gammla vapnet skriv in 1 annars skriv något annat \n")
        if svar == "1":
            typingPrint("Du har nu ett nytt vapen i din ryggsäck\n")
            spelar_stats.vapen = vapen
            return spelar_stats
        else:
            typingPrint(
                "Du lämnade det nya fräsha vapnet i kistan för du kan inte överge ditt gamla vapen efter allt ni gjort tilsammans\n")
            return spelar_stats


def kista_fas2(spelar_stats):

    Svärd = Vapen(health(0, 1), damage(2, 4), "ett Svärd")
    Sköld = Vapen(health(2, 3), damage(0, 0), "en Sköld")
    Yxa = Vapen(health(0, 0), damage(1, 6), "en Yxa")
    Pilbåge = Vapen(health(0, 0), damage(2, 5), "en Pilbåge")
    Spjut = Vapen(health(0, 0), damage(3, 4), "ett Spjut")

    vapen = random.choice([Svärd, Sköld, Yxa, Pilbåge, Spjut])
    typingPrint(
        f"{vapen.v_namn}.\n det har en hp på {vapen.v_hp} och en styrka på {vapen.v_str}\n")

    typingPrint(
        "Du måste ta bort ditt nuvarande vapen för att ta det nya\n")

    typingPrint(
        f"Du har {spelar_stats.vapen.v_namn} med {spelar_stats.vapen.v_hp} hp och {spelar_stats.vapen.v_str} str\n ")
    while True:
        svar = typingInput(
            "Om du vill byta det nya vapnet mot det gammla vapnet skriv in 1 annars skriv något annat \n")
        if svar == "1":
            typingPrint("Du har nu ett nytt vapen i din ryggsäck\n")
            spelar_stats.vapen = vapen
            return spelar_stats
        else:
            typingPrint(
                "Du lämnade det nya fräsha vapnet i kistan för du kan inte överge ditt gamla vapen efter allt ni gjort tilsammans\n")
            return spelar_stats


def kista_fas3(spelar_stats):

    Svärd = Vapen(health(1, 1), damage(4, 5), "ett Svärd")
    Sköld = Vapen(health(3, 4), damage(0, 0), "en Sköld")
    Yxa = Vapen(health(0, 0), damage(3, 8), "en Yxa")
    Pilbåge = Vapen(health(0, 0), damage(4, 7), "en Pilbåge")
    Spjut = Vapen(health(0, 0), damage(5, 6), "ett Spjut")

    vapen = random.choice([Svärd, Sköld, Yxa, Pilbåge, Spjut])
    typingPrint(
        f"{vapen.v_namn}.\n det har en hp på {vapen.v_hp} och en styrka på {vapen.v_str}\n")

    typingPrint(
        "Du måste ta bort ditt nuvarande vapen för att ta det nya\n")

    typingPrint(
        f"Du har {spelar_stats.vapen.v_namn} med {spelar_stats.vapen.v_hp} hp och {spelar_stats.vapen.v_str} str\n ")
    while True:
        svar = typingInput(
            "Om du vill byta det nya vapnet mot det gammla vapnet skriv in 1 annars skriv något annat \n")
        if svar == "1":
            typingPrint("Du har nu ett nytt vapen i din ryggsäck\n")
            spelar_stats.vapen = vapen
            return spelar_stats
        else:
            typingPrint(
                "Du lämnade det nya fräsha vapnet i kistan för du kan inte överge ditt gamla vapen efter allt ni gjort tilsammans\n")
            return spelar_stats


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


# ---------------------------------------- RUM TYP OCH KISTA ----------------------------------------

# ---------------------------------------- VALFUNKTIONER ----------------------------------------


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

# ---------------------------------------- VALFUNKTIONER ----------------------------------------

# ---------------------------------------- SPELFUNKTIONER ----------------------------------------


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


def main():
    typingPrint("""
    Välkommen till Daedalus labyrint

    Ditt mål är att nå lvl 30 men se upp för Taurus.
    Han har en slimekapasitet på 100%.
    """)

    spelar_stats = karaktärsval()

    val_vanlig_fas1(spelar_stats)

    val_vanlig_fas2(spelar_stats)

    val_vanlig_fas3(spelar_stats)

    boss_fight(spelar_stats)

    typingPrint("Grattis du vann\n")
    slut()


main()

# ---------------------------------------- SPELFUNKTIONER ----------------------------------------
