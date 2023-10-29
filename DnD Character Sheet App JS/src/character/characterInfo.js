export default class CharacterInfo{
    constructor(charLvl, charName, charClass, charRace, charBackground, charAlignment) {
        // this.characterInfo = {
        //     lvl: charLvl,
        //     name: charName,
        //     class: charClass,
        //     race: charRace,
        //     background: charBackground,
        //     alignment: charAlignment
        // }
        this.lvl = charLvl
        this.name = charName
        this.class = charClass
        this.race = charRace
        this.background = charBackground
        this.alignment = charAlignment
    }

    getCharacterInfo() {
        return this.characterInfo
    }
    
    setCharacterLevel(level) {
        this.lvl = level
    }

    setCharacterName(name) {
        this.name = name
    }

    setCharacterClass(charClass) {
        this.class = charClass
    }

    setCharacterRace(race) {
        this.race = race
    }

    setCharacterBackground(background) {
        this.background = background
    }

    setCharacterAlignment(alignment) {
        this.alignment = alignment
    }
}