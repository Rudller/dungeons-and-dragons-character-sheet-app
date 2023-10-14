export default class CharacterInfo{
    constructor(charName, charClass, charRace, charBackground, charAlignment) {
        this.characterInfo = {
            name: charName,
            class: charClass,
            race: charRace,
            background: charBackground,
            alignment: charAlignment
        }
    }

    getCharacterInfo() {
        return this.characterInfo
    }
}