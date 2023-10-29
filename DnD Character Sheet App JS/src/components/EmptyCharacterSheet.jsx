import { useEffect, useState } from "react";
import CharacterStats from "../character/CharacterStats";



export default function EmptyCharacterSheet() {

    //const [stats, setStats] = useState(new CharacterStats(charLvl, charName, charClass, charRace, charBackground, charAlignment, charStr, charDex, charCon, charInt, charWis, charCha))

    //Char Info Variables
    const [charLvl, setCharLvl] = useState('');
    const [charName, setCharName] = useState('');
    const [charClass, setCharClass] = useState('');
    const [charRace, setCharRace] = useState('');
    const [charBackground, setCharBackground] = useState('');
    const [charAlignment, setCharAlignment] = useState('');

    //Char Stats Variables
    const [charStr, setCharStr] = useState(10);
    const [charDex, setCharDex] = useState(10);
    const [charCon, setCharCon] = useState(10);
    const [charInt, setCharInt] = useState(10);
    const [charWis, setCharWis] = useState(10);
    const [charCha, setCharCha] = useState(10);

    const [profBonus, setProfBonus] = useState(2)
    const [armorClass, setArmorClass] = useState(10)
    const [initiative, setInitiative] = useState(10)
    const [speed, setSpeed] = useState('9m')

    const [maxHP, setMaxHP] = useState(0)
    const [hitDice, setHitDice] = useState(8)

    const [stats, setStats] = useState(new CharacterStats(charLvl, charName, charClass, charRace, charBackground, charAlignment, charStr, charDex, charCon, charInt, charWis, charCha))

    useEffect(() => {
        setStats({
            lvl: charLvl,
            name: charName,
            class: charClass,
            race: charRace,
            background: charBackground,
            alignment: charAlignment,

            str: charStr,
            dex: charDex,
            con: charCon,
            int: charInt,
            wis: charWis,
            cha: charCha,

            profBonus: profBonus,

            armorClass: armorClass,
            initiative: initiative,
            speed: '9m',

            maxHP: maxHP,
            hitDice: hitDice,

            abilities: [
                {name: 'Strength', abbreviation: 'STR', score: charStr, modifier: Math.floor((charStr-10)/2)},
                {name: 'Dexterity', abbreviation: 'DEX', score: charDex, modifier: Math.floor((charDex-10)/2)},
                {name: 'Constitution', abbreviation: 'CON', score: charCon, modifier: Math.floor((charCon-10)/2)},
                {name: 'Intelligence', abbreviation: 'INT', score: charInt, modifier: Math.floor((charInt-10)/2)},
                {name: 'Wisdom', abbreviation: 'WIS', score: charWis, modifier: Math.floor((charWis-10)/2)},
                {name: 'Charisma', abbreviation: 'CHA', score: charCha, modifier: Math.floor((charCha-10)/2)},
                ],

            savingThrows: [
                { ability: 'Strength', modifier: Math.floor((charStr-10)/2) + (stats.savingThrows[0].proficient ? profBonus : 0), proficient: stats.savingThrows[0].proficient},
                { ability: 'Dexterity', modifier: Math.floor((charDex-10)/2) + (stats.savingThrows[1].proficient ? profBonus : 0), proficient: stats.savingThrows[1].proficient},
                { ability: 'Constitution', modifier: Math.floor((charCon-10)/2) + (stats.savingThrows[2].proficient ? profBonus : 0), proficient: stats.savingThrows[2].proficient},
                { ability: 'Intelligence', modifier: Math.floor((charInt-10)/2) + (stats.savingThrows[3].proficient ? profBonus : 0), proficient: stats.savingThrows[3].proficient},
                { ability: 'Wisdom', modifier: Math.floor((charWis-10)/2) + (stats.savingThrows[4].proficient ? profBonus : 0), proficient: stats.savingThrows[4].proficient},
                { ability: 'Charisma', modifier: Math.floor((charCha-10)/2) + (stats.savingThrows[5].proficient ? profBonus : 0), proficient: stats.savingThrows[5].proficient}
              ],

            skills: [
                { name: 'Acrobatics', ability: 'DEX', proficient: stats.skills[0].proficient, modifier: Math.floor((charDex-10)/2) + (stats.skills[0].proficient ? profBonus : 0) },
                { name: 'Animal Handling', ability: 'WIS', proficient: stats.skills[1].proficient, modifier: Math.floor((charWis-10)/2) + (stats.skills[1].proficient ? profBonus : 0) },
                { name: 'Arcana', ability: 'INT', proficient: stats.skills[2].proficient, modifier: Math.floor((charInt-10)/2) + (stats.skills[2].proficient ? profBonus : 0) },
                { name: 'Athletics', ability:  'STR', proficient: stats.skills[3].proficient, modifier: Math.floor((charStr-10)/2) + (stats.skills[3].proficient ? profBonus : 0) },
                { name: 'Deception', ability: 'CHA', proficient: stats.skills[4].proficient, modifier: Math.floor((charCha-10)/2) + (stats.skills[4].proficient ? profBonus : 0) },
                { name: 'History', ability: 'INT', proficient: stats.skills[5].proficient, modifier: Math.floor((charInt-10)/2) + (stats.skills[5].proficient ? profBonus : 0) },
                { name: 'Insight', ability: 'WIS', proficient: stats.skills[6].proficient, modifier: Math.floor((charWis-10)/2) + (stats.skills[6].proficient ? profBonus : 0) },
                { name: 'Intimidation', ability: 'CHA', proficient: stats.skills[7].proficient, modifier: Math.floor((charCha-10)/2) + (stats.skills[7].proficient ? profBonus : 0) },
                { name: 'Investigation', ability: 'INT', proficient: stats.skills[8].proficient, modifier: Math.floor((charInt-10)/2) + (stats.skills[8].proficient ? profBonus : 0) },
                { name: 'Medicine', ability: 'WIS', proficient: stats.skills[9].proficient, modifier: Math.floor((charWis-10)/2) + (stats.skills[9].proficient ? profBonus : 0) },
                { name: 'Nature', ability: 'INT', proficient: stats.skills[10].proficient, modifier: Math.floor((charInt-10)/2) + (stats.skills[10].proficient ? profBonus : 0) },
                { name: 'Perception', ability: 'WIS', proficient: stats.skills[11].proficient, modifier: Math.floor((charWis-10)/2 + (stats.skills[11].proficient ? profBonus : 0)) },
                { name: 'Performance', ability: 'CHA', proficient: stats.skills[12].proficient, modifier: Math.floor((charCha-10)/2) + (stats.skills[12].proficient ? profBonus : 0) },
                { name: 'Persuasion', ability: 'CHA', proficient: stats.skills[13].proficient, modifier: Math.floor((charCha-10)/2) + (stats.skills[13].proficient ? profBonus : 0) },
                { name: 'Religion', ability: 'INT', proficient: stats.skills[14].proficient, modifier: Math.floor((charInt-10)/2) + (stats.skills[14].proficient ? profBonus : 0) },
                { name: 'Sleight of Hand', ability: 'DEX', proficient: stats.skills[15].proficient, modifier: Math.floor((charDex-10)/2) + (stats.skills[15].proficient ? profBonus : 0) },
                { name: 'Stealth', ability: 'DEX', proficient: stats.skills[16].proficient, modifier: Math.floor((charDex-10)/2) + (stats.skills[16].proficient ? profBonus : 0) },
                { name: 'Survival', ability: 'WIS', proficient: stats.skills[17].proficient, modifier: Math.floor((charWis-10)/2) + (stats.skills[17].proficient ? profBonus : 0) }
              ]
        })
        console.log(stats)
    }, [charLvl, charName, charClass, charRace, charBackground, charAlignment, charStr, charDex, charCon, charInt, charWis, charCha, profBonus])

    const handleChkST = (event, skillIndex) => {
        const updatedStatsST = { ...stats }
        if (event.target.checked) {
            updatedStatsST.savingThrows[skillIndex].proficient = true
            updatedStatsST.savingThrows[skillIndex].modifier += profBonus
        } else {
            updatedStatsST.savingThrows[skillIndex].proficient = false
            updatedStatsST.savingThrows[skillIndex].modifier -= profBonus
        }
        setStats(updatedStatsST)
        console.log(stats)
    }

    const handleChkSkill = (e, skillIndex) => {
        const updatedStatsSkill = { ...stats }
        if (e.target.checked) {
            updatedStatsSkill.skills[skillIndex].proficient = true
            updatedStatsSkill.skills[skillIndex].modifier += profBonus
        } else {
            updatedStatsSkill.skills[skillIndex].proficient = false
            updatedStatsSkill.skills[skillIndex].modifier -= profBonus
        }
        setStats(updatedStatsSkill)
    }

    
    return (
        <div className="w-11/12 sm:w-9/12 lg:w-1/2 xl:w-1/3 m-auto flex flex-col items-center">
            {/* Main Info */}
            <div className="flex justify-center items-center m-auto border border-black px-3 py-2 rounded-xl">
                <div className="mt-1 w-1/2 -translate-y-2">
                    <label className="text-xs font-bold">Character Name</label>
                    <input value={charName} onChange={(e) => setCharName(e.target.value)} className="w-full border border-grey-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 -translate-x-1" />
                    <label className="text-xs font-bold block">Level</label>
                    <select value={charLvl} onChange={(e) => {setCharLvl(e.target.value); setProfBonus((this.lvl <= 5 ? 3 : this.lvl <= 9 ? 4 : this.lvl <= 13 ? 5 : this.lvl < 17 ? 6 : 2))}} className="border border-grey-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 rounded-lg shadow-sm translate-y-1">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                    </select>
                </div>
                <div className="w-1/2 border border-black rounded-lg px-3 py-2">
                    <div className="mt-1 flex">
                        <div className="w-1/2">
                            <input value={charClass} onChange={(e) => setCharClass(e.target.value)} className="w-full px-1 border-b border-grey-300 shadow-sm focus:outline-none focus:border-b-orange-500" />
                            <label className="text-xs block">CLASS</label>
                        </div>
                        <div className="w-1/2">
                            <input value={charBackground} onChange={(e) => setCharBackground(e.target.value)} className="w-full px-1 border-b border-grey-300 shadow-sm focus:outline-none focus:border-b-orange-500" />
                            <label className="text-xs block">BACKGROUND</label>
                        </div>
                    </div>
                    <div className="mt-1 flex">
                        <div className="w-1/2">
                            <input value={charRace} onChange={(e) => setCharRace(e.target.value)} className="w-full px-1 border-b border-grey-300 shadow-sm focus:outline-none focus:border-b-orange-500" />
                            <label className="text-xs block">RACE</label>
                        </div>
                        <div className="w-1/2">
                            <input value={charAlignment} onChange={(e) => setCharAlignment(e.target.value)} className="w-full px-1 border-b border-grey-300 shadow-sm focus:outline-none focus:border-b-orange-500" />
                            <label className="text-xs block">ALIGNMENT</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between mt-5 w-full">
                {/* Ability Points */}
                <div className="bg-gray-300 w-2/12 rounded-md flex flex-col items-stretch">
                    <div className="bg-white border border-black rounded-md w-10/12 mx-auto my-4">
                        <p className="text-center text-xs">Strenght</p>
                        <h1 className="text-center">{stats.abilities[0].modifier}</h1>
                        <input value={charStr} onChange={(e) => setCharStr(e.target.value)} className="border border-black rounded-full w-1/2 text-center translate-y-1/2 translate-x-1/2" />
                    </div>
                    <div className="bg-white border border-black rounded-md w-10/12 mx-auto my-4">
                        <p className="text-center text-xs">Dexterity</p>
                        <h1 className="text-center">{stats.abilities[1].modifier}</h1>
                        <input value={charDex} onChange={(e) => setCharDex(e.target.value)} className="border border-black rounded-full w-1/2 text-center translate-y-1/2 translate-x-1/2" />
                    </div>
                    <div className="bg-white border border-black rounded-md w-10/12 mx-auto my-4">
                        <p className="text-center text-xs">Constitution</p>
                        <h1 className="text-center">{stats.abilities[2].modifier}</h1>
                        <input value={charCon} onChange={(e) => setCharCon(e.target.value)} className="border border-black rounded-full w-1/2 text-center translate-y-1/2 translate-x-1/2" />
                    </div>
                    <div className="bg-white border border-black rounded-md w-10/12 mx-auto my-4">
                        <p className="text-center text-xs">Intelligence</p>
                        <h1 className="text-center">{stats.abilities[3].modifier}</h1>
                        <input value={charInt} onChange={(e) => setCharInt(e.target.value)} className="border border-black rounded-full w-1/2 text-center translate-y-1/2 translate-x-1/2" />
                    </div>
                    <div className="bg-white border border-black rounded-md w-10/12 mx-auto my-4">
                        <p className="text-center text-xs">Wisdom</p>
                        <h1 className="text-center">{stats.abilities[4].modifier}</h1>
                        <input value={charWis} onChange={(e) => setCharWis(e.target.value)} className="border border-black rounded-full w-1/2 text-center translate-y-1/2 translate-x-1/2" />
                    </div>
                    <div className="bg-white border border-black rounded-md w-10/12 mx-auto my-4">
                        <p className="text-center text-xs">Charisma</p>
                        <h1 className="text-center">{stats.abilities[5].modifier}</h1>
                        <input value={charCha} onChange={(e) => setCharCha(e.target.value)} className="border border-black rounded-full w-1/2 text-center translate-y-1/2 translate-x-1/2" />
                    </div>
                </div>
                <div className="text-sm w-3/12 mx-5">
                    {/* Saving Throw */}
                    <div className=" border border-gray-300 rounded-md">
                        {stats.savingThrows.map((e, i) => {
                            return (
                                <div key={i} className="flex gap-2 m-2">
                                    <input type="checkbox" onChange={(e) => handleChkST(e, i)} />
                                    <p>{e.modifier}</p> 
                                    <p>{e.ability}</p>
                                </div>
                            )
                        })}
                    <h3 className="font-bold text-center">Saving Throws</h3>
                    </div>
                    {/* Skills */}
                    <div className=" border border-gray-300 rounded-md mt-5">
                        {stats.skills.map((e, i) => {
                            return (
                                <div key={i} className="flex gap-2 m-2">
                                    <input type="checkbox" onChange={(e) => handleChkSkill(e, i)} />
                                    <p>{e.modifier} {e.name} ({e.ability})</p>
                                </div>
                            )
                        })}
                    <h3 className="font-bold text-center">Skills</h3>
                    </div>
                </div>
                <div className="bg-gray-300 w-1/2 rounded-md flex flex-col">
                    {/* AC Initiative Speed */}
                    <div className="flex justify-around mt-3">
                        <div className="w-1/4">
                            <input value={armorClass} onChange={(e) => setArmorClass(e.target.value)} className="shield border text-center text-2xl font-bold border-black bg-white w-full h-20"/>
                            <p className="text-center text-sm -translate-y-20">Armor Class</p>
                        </div>
                        <div className="w-1/4 ">
                            <input value={initiative} onChange={(e) => setInitiative(e.target.value)} type="text" className="border text-center text-2xl font-bold border-black rounded-md bg-white w-full h-20"/>
                            <p className="text-center text-sm -translate-y-20">Initiative</p>
                        </div>
                        <div className="w-1/4">
                            <input value={speed} onChange={(e) => setSpeed(e.target.value)} type="text" className="border text-center text-2xl font-bold border-black rounded-md bg-white w-full h-20"/>
                            <p className="text-center text-sm -translate-y-20">Speed</p>
                        </div>
                    </div>
                    {/* Max HP and HD */}
                    <div className="border border-black bg-white rounded-md w-11/12 mx-auto flex gap-2 flex-col items-center justify-center">
                        <div className="flex justify-center items-center m-2">
                            <p className="text-sm">Maximum Hit Points: </p>
                            <input className="w-1/12 border-b border-gray-300" type="text" value={maxHP} onChange={(e) => setMaxHP(e.target.value)}/>
                        </div>
                        <div className="flex justify-center m-2">
                            <p>Hit Dice: {stats.lvl}d</p>
                            <input className="w-1/12 border-b border-gray-300" type="text" value={hitDice} onChange={(e) => setHitDice(e.target.value)} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
