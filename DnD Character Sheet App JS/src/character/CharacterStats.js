export default class CharacterStats {
    constructor(charLvl, charName, charClass, charRace, charBackground, charAlignment ,str, dex, con, int, wis, cha){
        
        this.lvl = charLvl
        this.name = charName
        this.class = charClass
        this.race = charRace
        this.background = charBackground
        this.alignment = charAlignment

        this.str = str
        this.dex = dex
        this.con = con
        this.int = int
        this.wis = wis
        this.cha = cha

        this.profBonus = (this.lvl <= 5 ? 3 : this.lvl <= 9 ? 4 : this.lvl <= 13 ? 5 : this.lvl < 17 ? 6 : 2) 

        this.armorClass = 10
        this.initiative = Math.floor((this.dex-10)/2)
        this.speed = '9m'

        this.abilities = [
            { name: 'Strength', abbreviation: 'STR', score: this.str, modifier: Math.floor((this.str-10)/2)},
            { name: 'Dexterity', abbreviation: 'DEX', score: this.dex, modifier: Math.floor((this.dex-10)/2)},
            { name: 'Constitution', abbreviation: 'CON', score: this.con, modifier: Math.floor((this.con-10)/2)},
            { name: 'Intelligence', abbreviation: 'INT', score: this.int, modifier: Math.floor((this.int-10)/2)},
            { name: 'Wisdom', abbreviation: 'WIS', score: this.wis, modifier: Math.floor((this.wis-10)/2)},
            { name: 'Charisma', abbreviation: 'CHA', score: this.cha, modifier: Math.floor((this.cha-10)/2)}
          ]

        this.savingThrows =  [
            { ability: 'Strength', modifier: Math.floor((this.str-10)/2) + (this.proficient ? this.profBonus : 0), proficient: false},
            { ability: 'Dexterity', modifier: Math.floor((this.dex-10)/2) + (this.proficient ? this.profBonus : 0), proficient: false},
            { ability: 'Constitution', modifier: Math.floor((this.con-10)/2) + (this.proficient ? this.profBonus : 0), proficient: false},
            { ability: 'Intelligence', modifier: Math.floor((this.int-10)/2) + (this.proficient ? this.profBonus : 0), proficient: false},
            { ability: 'Wisdom', modifier: Math.floor((this.wis-10)/2) + (this.proficient ? this.profBonus : 0), proficient: false},
            { ability: 'Charisma', modifier: Math.floor((this.cha-10)/2) + (this.proficient ? this.profBonus : 0), proficient: false}
          ]
        
        this.skills = [
            { name: 'Acrobatics', ability: 'DEX', proficient: false, modifier: Math.floor((this.dex-10)/2) },
            { name: 'Animal Handling', ability: 'WIS', proficient: false, modifier: Math.floor((this.wis-10)/2) },
            { name: 'Arcana', ability: 'INT', proficient: false, modifier: Math.floor((this.int-10)/2)},
            { name: 'Athletics', ability:  'STR', proficient: false, modifier: Math.floor((this.str-10)/2) },
            { name: 'Deception', ability: 'CHA', proficient: false, modifier: Math.floor((this.cha-10)/2) },
            { name: 'History', ability: 'INT', proficient: false, modifier: Math.floor((this.int-10)/2) },
            { name: 'Insight', ability: 'WIS', proficient: false, modifier: Math.floor((this.wis-10)/2) },
            { name: 'Intimidation', ability: 'CHA', proficient: true, modifier: Math.floor((this.cha-10)/2) },
            { name: 'Investigation', ability: 'INT', proficient: false, modifier: Math.floor((this.int-10)/2) },
            { name: 'Medicine', ability: 'WIS', proficient: false, modifier: Math.floor((this.wis-10)/2) },
            { name: 'Nature', ability: 'INT', proficient: false, modifier: Math.floor((this.int-10)/2) },
            { name: 'Perception', ability: 'WIS', proficient: false, modifier: Math.floor((this.wis-10)/2) },
            { name: 'Performance', ability: 'CHA', proficient: false, modifier: Math.floor((this.cha-10)/2) },
            { name: 'Persuasion', ability: 'CHA', proficient: false, modifier: Math.floor((this.cha-10)/2) },
            { name: 'Religion', ability: 'INT', proficient: false, modifier: Math.floor((this.int-10)/2) },
            { name: 'Sleight of Hand', ability: 'DEX', proficient: false, modifier: Math.floor((this.dex-10)/2) },
            { name: 'Stealth', ability: 'DEX', proficient: false, modifier: Math.floor((this.dex-10)/2) },
            { name: 'Survival', ability: 'WIS', proficient: false, modifier: Math.floor((this.wis-10)/2) }
          ]


    }

    strProfMod(str, proficient) {
      let modifier = Math.floor((str - 10) / 2)
      if (proficient) {
        modifier += 2
      }
      return modifier
    }

    setStr(str) {
      this.str = str
      this.abilities[0].score = str
      this.abilities[0].modifier = Math.floor((str-10)/2)
      this.savingThrows[0].modifier = Math.floor((str-10)/2)
      this.skills.filter((x) => x.ability == 'STR').forEach(x =>{
        x.modifier = Math.floor((str-10)/2)
      }) 
    }

    setDex(dex) {
      this.dex = dex
      this.abilities[1].score = dex
      this.abilities[1].modifier = Math.floor((dex-10)/2)
      this.savingThrows[1].modifier = Math.floor((dex-10)/2)
      this.skills.filter((x) => x.ability == 'DEX').forEach(x =>{
        x.modifier = Math.floor((dex-10)/2)
      }) 
    }

    setCon(con) {
      this.con = con
      this.abilities[2].score = con
      this.abilities[2].modifier = Math.floor((con-10)/2)
      this.savingThrows[2].modifier = Math.floor((con-10)/2)
      this.skills.filter((x) => x.ability == 'CON').forEach(x =>{
        x.modifier = Math.floor((con-10)/2)
      }) 
    }

    setInt(int) {
      this.int = int
      this.abilities[3].score = int
      this.abilities[3].modifier = Math.floor((int-10)/2)
      this.savingThrows[3].modifier = Math.floor((int-10)/2)
      this.skills.filter((x) => x.ability == 'INT').forEach(x =>{
        x.modifier = Math.floor((int-10)/2)
      }) 
    }

    setWis(wis) {
      this.wis = wis
      this.abilities[4].score = wis
      this.abilities[4].modifier = Math.floor((wis-10)/2)
      this.savingThrows[4].modifier = Math.floor((wis-10)/2)
      this.skills.filter((x) => x.ability == 'WIS').forEach(x =>{
        x.modifier = Math.floor((wis-10)/2)
      }) 
    }

    setCha(cha) {
      this.cha = cha
      this.abilities[5].score = cha
      this.abilities[5].modifier = Math.floor((cha-10)/2)
      this.savingThrows[5].modifier = Math.floor((cha-10)/2)
      this.skills.filter((x) => x.ability == 'CHA').forEach(x =>{
        x.modifier = Math.floor((cha-10)/2)
      }) 
    }

    setSavingThrowProficienty(abilityName, bool, profBonus) {
        this.savingThrows.filter((e) => e.ability == abilityName).proficient = bool
        this.savingThrows.filter((e) => e.ability == abilityName).modifier += profBonus
    }

    setSkillProficienty(skillName, bool) {
        this.skills.filter((e) => e.name == skillName).proficient = bool
    }
    
}