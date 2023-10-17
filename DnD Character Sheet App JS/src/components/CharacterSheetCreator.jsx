import { useEffect, useState } from "react";
import CharacterInfo from "../character/characterInfo"
import CharacterStats from "../character/CharacterStats";

const api = 'https://www.dnd5eapi.co'

export default function CharacterSheetCreator() {
    const [characterSheet, setCharacterSheet] = useState({})

    const [charInfo, setCharInfo] = useState(null)
    const [stats, setStats] = useState(null)

    const [abilitiesTypePage, setAbilitiesTypePage] = useState(0)

    const [classData, setClassData] = useState(null)
    const [raceData, setRaceData] = useState(null)
    const [alignmentData, setAlignmentData] = useState(null)

    useEffect(() => {
        fetch(`${api}/api/classes`)
            .then((r) => r.json())
            .then((data) => setClassData(data))

        fetch(`${api}/api/races`)
            .then((r) => r.json())
            .then((data) => setRaceData(data))
        
        fetch(`${api}/api/alignments`)
            .then((r) => r.json())
            .then((data) => setAlignmentData(data))
    }, [])

    
    const MainInfoPanel = () => {
        
        function handlerSubmit(e) {
            e.preventDefault();
            
            const formElements = e.currentTarget.elements
            setCharInfo(new CharacterInfo(formElements[0].value, formElements[1].value, formElements[2].value,formElements[3].value, formElements[4].value))
            console.log(stats)
        }
    

        return (
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-center text-slate-700 text-4xl font-bold mb-5">Main info</h2>
                    <form onSubmit={handlerSubmit} className="flex flex-col items-center border-2 border-slate-700 rounded-2xl shadow-lg shadow-slate-700 mb-10 p-1">
                        <label className="text-xl m-5 flex flex-col items-center">
                            Whats your character name?
                            <input name="charName"/>
                        </label>
                        <label className="text-xl m-5 flex flex-col items-center">
                            Class:
                            <select>
                                {!classData && <option>Loading data...</option>}
                                {classData && classData.results.map((e, index) =>{
                                    return <option key={index} value={e.index}>{e.name}</option>
                                })
                                }
                            </select>
                        </label>
                        <label className="text-xl m-5 flex flex-col items-center">
                            Race:
                            <select>
                                {!raceData && <option>Loading data...</option>}
                                {raceData && raceData.results.map((e, index) => {
                                    return <option key={index} value={e.index}>{e.name}</option>
                                })}
                            </select>
                        </label>
                        <label className="text-xl m-5 flex flex-col items-center">
                            Background:
                            <input name="background" placeholder="Enter your background here" />
                        </label>
                        <label className="text-xl m-5 flex flex-col items-center">
                            Alignment:
                            <select>
                                {!alignmentData && <option>Loading Data...</option>}
                                {alignmentData && alignmentData.results.map((e, index) => {
                                    return <option key={index} value={e.index}>{e.name}</option>
                                })}
                            </select>
                        </label>
                        <button className="bg-orange-500 rounded-md p-2 border-slate-700 border-2 font-bold" type="submit">Next</button>
                    </form>
            </div>
        )
    }

    const AbilitiesPanel = () => {

        const PointBuy = () => {
            const [pointsToBuy, setPointsToBuy] = useState(27)

            const [strPoints, setStrPoints] = useState(8)
            const [dexPoints, setDexPoints] = useState(8)
            const [conPoints, setConPoints] = useState(8)
            const [intPoints, setIntPoints] = useState(8)
            const [wisPoints, setWisPoints] = useState(8)
            const [chaPoints, setChaPoints] = useState(8)
            
            //Strenght
            const handlerPlusStrBtn = () => {
                if (pointsToBuy > 0 && strPoints < 15) {
                    setStrPoints((prev) => prev + 1)
                    setPointsToBuy((prev) => prev - 1)
                }
            }
            const handlerMinusStrBtn = () => {
                if (pointsToBuy < 27 && strPoints > 8) {
                    setStrPoints((prev) => prev - 1)
                    setPointsToBuy((prev) => prev + 1)
                }
            }

            //Dexterity
            const handlerPlusDexBtn = () => {
                if (pointsToBuy > 0 && dexPoints < 15) {
                    setDexPoints((prev) => prev + 1)
                    setPointsToBuy((prev) => prev - 1)
                }
            }
            const handlerMinusDexBtn = () => {
                if (pointsToBuy < 27 && dexPoints > 8) {
                    setDexPoints((prev) => prev - 1)
                    setPointsToBuy((prev) => prev + 1)
                }
            }

            //Constitution
            const handlerPlusConBtn = () => {
                if (pointsToBuy > 0 && conPoints < 15) {
                    setConPoints((prev) => prev + 1)
                    setPointsToBuy((prev) => prev - 1)
                }
            }
            const handlerMinusConBtn = () => {
                if (pointsToBuy < 27 && conPoints > 8) {
                    setConPoints((prev) => prev - 1)
                    setPointsToBuy((prev) => prev + 1)
                }
            }

            //Intelligence
            const handlerPlusIntBtn = () => {
                if (pointsToBuy > 0 && intPoints < 15) {
                    setIntPoints((prev) => prev + 1)
                    setPointsToBuy((prev) => prev - 1)
                }
            }
            const handlerMinusIntBtn = () => {
                if (pointsToBuy < 27 && intPoints > 8) {
                    setIntPoints((prev) => prev - 1)
                    setPointsToBuy((prev) => prev + 1)
                }
            }

            //Wisdom
            const handlerPlusWisBtn = () => {
                if (pointsToBuy > 0 && wisPoints < 15) {
                    setWisPoints((prev) => prev + 1)
                    setPointsToBuy((prev) => prev - 1)
                }
            }
            const handlerMinusWisBtn = () => {
                if (pointsToBuy < 27 && wisPoints > 8) {
                    setWisPoints((prev) => prev - 1)
                    setPointsToBuy((prev) => prev + 1)
                }
            }

            //Charisma
            const handlerPlusChaBtn = () => {
                if (pointsToBuy > 0 && chaPoints < 15) {
                    setChaPoints((prev) => prev + 1)
                    setPointsToBuy((prev) => prev - 1)
                }
            }
            const handlerMinusChaBtn = () => {
                if (pointsToBuy < 27 && chaPoints > 8) {
                    setChaPoints((prev) => prev - 1)
                    setPointsToBuy((prev) => prev + 1)
                }
            }

            const handlerAcceptBtn = () => {
                setStats(new CharacterStats(strPoints, dexPoints, conPoints, intPoints, wisPoints, chaPoints))
                console.log(stats)
            }

            return (
                <div className="flex flex-col justify-center border-slate-700 border-2 rounded-xl p-1 m-1.5 shadow-2xl shadow-slate-700">
                    <h1 className="text-center font-bold text-5xl">Point buy</h1>
                    <p className="text-center mb-10">How it works? You have 27 points to distribute across all atributes. You cannot go above 15 and below 8 points.</p>
                    <h1 className="text-center">Points left: {pointsToBuy}</h1>
                    <div className="flex justify-around gap-1 border-slate-700 border-2 rounded-xl p-1">
                        <div className="flex flex-col w-1/12">
                            <button onClick={handlerPlusStrBtn}>+</button>
                            <input className="text-center text-xl" value={strPoints} onChange={(e) => setStrPoints(e)} />
                            <button onClick={handlerMinusStrBtn}>-</button>
                            <h2 className="text-center text-xl">STR</h2>
                        </div>
                        <div className="flex flex-col w-1/12">
                            <button onClick={handlerPlusDexBtn}>+</button>
                            <input className="text-center text-xl" value={dexPoints} onChange={(e) => setDexPoints(e)} />
                            <button onClick={handlerMinusDexBtn}>-</button>
                            <h2 className="text-center text-xl">DEX</h2>
                        </div>
                        <div className="flex flex-col w-1/12">
                            <button onClick={handlerPlusConBtn}>+</button>
                            <input className="text-center text-xl" value={conPoints} onChange={(e) => setConPoints(e)} />
                            <button onClick={handlerMinusConBtn}>-</button>
                            <h2 className="text-center text-xl">CON</h2>
                        </div>
                        <div className="flex flex-col w-1/12">
                            <button onClick={handlerPlusIntBtn}>+</button>
                            <input className="text-center text-xl" value={intPoints} onChange={(e) => setIntPoints(e)} />
                            <button onClick={handlerMinusIntBtn}>-</button>
                            <h2 className="text-center text-xl">INT</h2>
                        </div>
                        <div className="flex flex-col w-1/12">
                            <button onClick={handlerPlusWisBtn}>+</button>
                            <input className="text-center text-xl" value={wisPoints} onChange={(e) => setWisPoints(e)} />
                            <button onClick={handlerMinusWisBtn}>-</button>
                            <h2 className="text-center text-xl">WIS</h2>
                        </div>
                        <div className="flex flex-col w-1/12 ">
                            <button onClick={handlerPlusChaBtn}>+</button>
                            <input className="text-center text-xl" value={chaPoints} onChange={(e) => setChaPoints(e)} />
                            <button onClick={handlerMinusChaBtn}>-</button>
                            <h2 className="text-center text-xl">CHA</h2>
                        </div>
                    </div>
                    <button className="m-1 font-bold " onClick={handlerAcceptBtn}>Accept</button>
                </div>
            )
        }

        const StandardArrayPoints = () => {
            const pointsArr = ["-",15, 14, 13, 12, 10, 8]


            const handlerSubmit = (e) => {
                e.preventDefault()
                const formElements = e.currentTarget.elements
                setStats(new CharacterStats(formElements[0].value, formElements[1].value, formElements[2].value,formElements[3].value, formElements[4].value), formElements[5].value)
                console.log(stats)
            }

            return (
                <div className="border-slate-700 border-2 rounded-2xl m-1 p-2 shadow-2xl shadow-slate-700">
                    <h1 className="text-center font-bold my-2">Standard Array of Ability Points</h1>
                    <p className="text-center text-slate-700">How it works? The standard array is a specific set of scores, which in D&D 5th edition is [15, 14, 13, 12, 10, 8]. Assign each of the numbers to the stats.</p>
                    <form className="flex flex-col items-center gap-2 my-5 border-slate-700 border-2 rounded-2xl" onSubmit={handlerSubmit}>
                        <label>
                            Strenght
                            <select defaultValue={"-"}>
                                {
                                    pointsArr.map((e, i) => {
                                        return <option key={i}>{e}</option>
                                    })
                                }
                            </select>
                        </label>
                        <label>
                            Dexterity
                            <select defaultValue={"-"}>
                                {
                                    pointsArr.map((e, i) => {
                                        return <option key={i}>{e}</option>
                                    })
                                }
                            </select>
                        </label>
                        <label>
                            Constitution
                            <select defaultValue={"-"}>
                                {
                                    pointsArr.map((e, i) => {
                                        return <option key={i}>{e}</option>
                                    })
                                }
                            </select>
                        </label>
                        <label>
                            Inteligance
                            <select defaultValue={"-"}>
                                {
                                    pointsArr.map((e, i) => {
                                        return <option key={i}>{e}</option>
                                    })
                                }
                            </select>
                        </label>
                        <label>
                            Wisdom
                            <select defaultValue={"-"}>
                                {
                                    pointsArr.map((e, i) => {
                                        return <option key={i}>{e}</option>
                                    })
                                }
                            </select>
                        </label>
                        <label>
                            Charisma
                            <select defaultValue={"-"}>
                                {
                                    pointsArr.map((e, i) => {
                                        return <option key={i}>{e}</option>
                                    })
                                }
                            </select>
                        </label>
                        <button className="bg-orange-500 font-bold m-1" type="submit">Accept</button>
                    </form>
                </div>
            )
        }

        const PointsRoll = () => {
            const [rolls, setRolls] = useState([])
            const [finalStat, setFinalStat] = useState(0)

            const [strPoints, setStrPoints] = useState(null)
            const [dexPoints, setDexPoints] = useState(null)
            const [conPoints, setConPoints] = useState(null)
            const [intPoints, setIntPoints] = useState(null)
            const [wisPoints, setWisPoints] = useState(null)
            const [chaPoints, setChaPoints] = useState(null)

            const rollHandler = () => {
                setRolls([])
                let newRoll = []
                for(let i = 1; i <= 4; i++) {
                    newRoll = [...newRoll, Math.floor(Math.random() * 6 + 1)]
                }
                setRolls(newRoll)
                
            }

            const handlerStatBtn = () => {
                setStats(new CharacterStats(strPoints, dexPoints, conPoints, intPoints, wisPoints, chaPoints))
                console.log(stats)
            }

            useEffect(() => {
                if (rolls.length === 4) {
                    const sortedRolls = rolls.sort((a, b) => b - a).slice(0 , -1)
                    const stat = sortedRolls.reduce((a, b) => a + b, 0)
                    setFinalStat(stat)
                }
            }, [rolls])

            const assignBtn = (e) => {
                e.preventDefault()
                const formData = e.currentTarget.elements
                switch (formData[0].value) {
                    case 'str': 
                        setStrPoints(finalStat)
                        setFinalStat(0)
                        break
                    case 'dex': 
                        setDexPoints(finalStat)
                        setFinalStat(0)
                        break
                    case 'con': 
                        setConPoints(finalStat)
                        setFinalStat(0)
                        break
                    case 'int': 
                        setIntPoints(finalStat)
                        setFinalStat(0)
                        break
                    case 'wis': 
                        setWisPoints(finalStat)
                        setFinalStat(0)
                        break
                    case 'cha': 
                        setChaPoints(finalStat)
                        setFinalStat(0)
                        break
                }
            }

            return(
                <div className="flex flex-col border-slate-700 border-2 rounded-2xl mx-1 shadow-2xl shadow-slate-700">
                    <h1 className="text-center font-bold my-2">Roll your stats!</h1>
                    <p className="text-center italic my-2">How it works? Click &quot;Roll&quot; button to roll 4d6 dices and dropping the lowes number, and adding the remaining total</p>
                    {!rolls && <h2>Waiting to roll dices!</h2>}
                    {rolls && <>
                    <div className="flex">
                        <div className="flex flex-col items-center w-1/2 border-slate-700 border-2 rounded-2xl mx-1">
                            <h2 className=" border-b-2 border-slate-700 my-2 font-bold">Result:</h2>
                            <div className="flex justify-between gap-5">
                            {rolls.map((e, i) => {
                                return <h3 className="font-bold text-xl" key={i}>{e}</h3>
                            })}
                            </div>
                            <button className="font-bold m-1" onClick={rollHandler}>Roll</button>
                        </div>
                        <div className="flex flex-col items-center w-1/2 border-slate-700 border-2 rounded-2xl mx-1">
                            <h2 className="border-b-2 border-slate-700 my-2 font-bold">Final stat: {finalStat}</h2>
                            <form onSubmit={assignBtn} className="flex flex-col">
                                <label>
                                    Select stat to assaign: 
                                    <select>
                                        <option value="str">Strenght</option>
                                        <option value="dex">Dexterity</option>
                                        <option value="con">Constitution</option>
                                        <option value="int">Inteligance</option>
                                        <option value="wis">Wisdom</option>
                                        <option value="cha">Charisma</option>
                                    </select>
                                </label>
                                <button type="submit" className="font-bold m-1 bg-orange-500">Assign to stat</button>
                            </form>
                        </div>
                    </div>
                    </>}
                    <div className="flex flex-col items-center border-slate-700 border-2 rounded-2xl m-1 p-2">
                        <h3>Strenght: {strPoints}</h3>
                        <h3>Dexterity: {dexPoints}</h3>
                        <h3>Constitution: {conPoints}</h3>
                        <h3>Inteligance: {intPoints}</h3>
                        <h3>Wisdom: {wisPoints}</h3>
                        <h3>Charisma: {chaPoints}</h3>
                    </div>
                    <button onClick={handlerStatBtn} className="font-bold m-1">Assign to stat</button>
                </div>
            )
        }

        return (
            <div>
                <h1 className="text-center text-slate-700 font-bold text-4xl">Abilities</h1>
                <p className="text-center text-slate-700">Select type of point distribution</p>
                <nav className="flex justify-center space-x-4 my-5">
                    <a onClick={() => setAbilitiesTypePage(1)} className="font-medium px-3 py-2 text-slate-700 border-slate-700 cursor-pointer hover:text-blue-500 border-2 rounded-2xl" >Point Buy</a>
                    <a onClick={() => setAbilitiesTypePage(2)} className="font-medium px-3 py-2 text-slate-700 border-slate-700 cursor-pointer hover:text-blue-500 border-2 rounded-2xl">Standard Array</a>
                    <a onClick={() => setAbilitiesTypePage(3)} className="font-medium px-3 py-2 text-slate-700 border-slate-700 cursor-pointer hover:text-blue-500 border-2 rounded-2xl">Rolls</a>
                </nav>
                {abilitiesTypePage == 1 && <PointBuy />}
                {abilitiesTypePage == 2 && <StandardArrayPoints />}
                {abilitiesTypePage == 3 && <PointsRoll />}
            </div>
        )
    }




    return (
        <div>
        <h1 className="text-center text-5xl font-bold text-slate-700 mb-10">Create your character!</h1>
        <MainInfoPanel />
        <AbilitiesPanel />
        </div>
    )
} 