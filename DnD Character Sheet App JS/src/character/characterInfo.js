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
}