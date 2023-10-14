export default class CharacterStats {
    constructor(str, dex, con, int, wis, cha){
        this.str = str
        this.dex = dex
        this.con = con
        this.int = int
        this.wis = wis
        this.cha = cha

        this.abilities = [
            { name: 'Strength', abbreviation: 'STR', score: this.str, modifier: Math.floor((this.str-10)/2)},
            { name: 'Dexterity', abbreviation: 'DEX', score: this.dex, modifier: Math.floor((this.dex-10)/2)},
            { name: 'Constitution', abbreviation: 'CON', score: this.con, modifier: Math.floor((this.con-10)/2)},
            { name: 'Intelligence', abbreviation: 'INT', score: this.int, modifier: Math.floor((this.int-10)/2)},
            { name: 'Wisdom', abbreviation: 'WIS', score: this.wis, modifier: Math.floor((this.wis-10)/2)},
            { name: 'Charisma', abbreviation: 'CHA', score: this.cha, modifier: Math.floor((this.cha-10)/2)}
          ]

        this.savingThrows =  [
            { ability: 'Strength', modifier: Math.floor((this.str-10)/2), proficient: false},
            { ability: 'Dexterity', modifier: Math.floor((this.dex-10)/2), proficient: false},
            { ability: 'Constitution', modifier: Math.floor((this.con-10)/2), proficient: false},
            { ability: 'Intelligence', modifier: Math.floor((this.int-10)/2), proficient: false},
            { ability: 'Wisdom', modifier: Math.floor((this.wis-10)/2), proficient: false},
            { ability: 'Charisma', modifier: Math.floor((this.cha-10)/2), proficient: false}
          ]
        
        this.skills = [
            {
              name: 'Acrobatics',
              ability: 'DEX',
              proficient: false,
              modifier: Math.floor((this.dex-10)/2)
            },
            {
              name: 'Animal Handling',
              ability: 'WIS',
              proficient: false,
              modifier: Math.floor((this.wis-10)/2)
            },
            {
              name: 'Arcana',
              ability: 'INT',
              proficient: false,
              modifier: Math.floor((this.int-10)/2)
            },
            {
              name: 'Athletics',
              ability:  'STR',
              proficient: false,
              modifier: Math.floor((this.str-10)/2)
            },
            {
              name: 'Deception',
              ability: 'CHA',
              proficient: false,
              modifier: Math.floor((this.cha-10)/2)
            },
            {
              name: 'History',
              ability: 'INT',
              proficient: false,
              modifier: Math.floor((this.int-10)/2)
            },
            {
              name: 'Insight',
              ability: 'WIS',
              proficient: false,
              modifier: Math.floor((this.wis-10)/2)
            },
            {
              name: 'Intimidation',
              ability: 'CHA',
              proficient: true,
              modifier: Math.floor((this.cha-10)/2)
            },
            {
              name: 'Investigation',
              ability: 'INT',
              proficient: false,
              modifier: Math.floor((this.int-10)/2)
            },
            {
              name: 'Medicine',
              ability: 'WIS',
              proficient: false,
              modifier: Math.floor((this.wis-10)/2)
            },
            {
              name: 'Nature',
              ability: 'INT',
              proficient: false,
              modifier: Math.floor((this.int-10)/2)
            },
            {
              name: 'Perception',
              ability: 'WIS',
              proficient: false,
              modifier: Math.floor((this.wis-10)/2)
            },
            {
              name: 'Performance',
              ability: 'CHA',
              proficient: false,
              modifier: Math.floor((this.cha-10)/2)
            },
            {
              name: 'Persuasion',
              ability: 'CHA',
              proficient: false,
              modifier: Math.floor((this.cha-10)/2)
            },
            {
              name: 'Religion',
              ability: 'INT',
              proficient: false,
              modifier: Math.floor((this.int-10)/2)
            },
            {
              name: 'Sleight of Hand',
              ability: 'DEX',
              proficient: false,
              modifier: Math.floor((this.dex-10)/2)
            },
            {
              name: 'Stealth',
              ability: 'DEX',
              proficient: false,
              modifier: Math.floor((this.dex-10)/2)
            },
            {
              name: 'Survival',
              ability: 'WIS',
              proficient: false,
              modifier: Math.floor((this.wis-10)/2)
            }
          ]


    }

    getAbilities() {
        return this.abilities;
    }

    setSavingThrowProficienty(abilityName) {
        this.savingThrows.filter((e) => e.ability = abilityName).proficient = true;
    }

    getSavingThrow() {
        return this.savingThrows
    }

    setSkillProficienty(skillName) {
        this.skills.filter((e) => e.name = skillName).proficient = true
    }

    getSkills(){
        return this.skills
    }
    
}