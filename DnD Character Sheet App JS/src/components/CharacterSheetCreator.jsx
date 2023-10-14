import { useEffect, useState } from "react";
import CharacterInfo from "../character/characterInfo"
import CharacterStats from "../character/CharacterStats";

const api = 'https://www.dnd5eapi.co'

export default function CharacterSheetCreator() {
    const [characterSheet, setCharacterSheet] = useState({})

    const [charInfo, setCharInfo] = useState(null)
    const [stats, setStats] = useState(null)

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
            <>
            <h2>Main info</h2>
        <form onSubmit={handlerSubmit} className="flex flex-col items-center">
            <label>
                Whats your character name?
                <input name="charName"/>
            </label>
            <label>
                Class:
                <select>
                    {!classData && <option>Loading data...</option>}
                    {classData && classData.results.map((e, index) =>{
                        return <option key={index} value={e.index}>{e.name}</option>
                    })
                    }
                </select>
            </label>
            <label>
                Race:
                <select>
                    {!raceData && <option>Loading data...</option>}
                    {raceData && raceData.results.map((e, index) => {
                        return <option key={index} value={e.index}>{e.name}</option>
                    })}
                </select>
            </label>
            <label>
                Background:
                <input name="background" placeholder="Enter your background here" />
            </label>
            <label>
                Alignment:
                <select>
                    {!alignmentData && <option>Loading Data...</option>}
                    {alignmentData && alignmentData.results.map((e, index) => {
                        return <option key={index} value={e.index}>{e.name}</option>
                    })}
                </select>
            </label>
            <button className="bg-orange-500 rounded-md p-2" type="submit">Next</button>
        </form>
            </>
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
                <div className="flex flex-col justify-center">
                    <h1 className="text-center">Points left: {pointsToBuy}</h1>
                    <div className="flex justify-around">
                        <div className="flex flex-col w-10">
                            <button onClick={handlerPlusStrBtn}>+</button>
                            <input className="text-center text-xl" value={strPoints} onChange={(e) => setStrPoints(e)} />
                            <button onClick={handlerMinusStrBtn}>-</button>
                            <h2>Strenght</h2>
                        </div>
                        <div className="flex flex-col w-10">
                            <button onClick={handlerPlusDexBtn}>+</button>
                            <input className="text-center text-xl" value={dexPoints} onChange={(e) => setDexPoints(e)} />
                            <button onClick={handlerMinusDexBtn}>-</button>
                            <h2>Dexterity</h2>
                        </div>
                        <div className="flex flex-col w-10">
                            <button onClick={handlerPlusConBtn}>+</button>
                            <input className="text-center text-xl" value={conPoints} onChange={(e) => setConPoints(e)} />
                            <button onClick={handlerMinusConBtn}>-</button>
                            <h2>Constitution</h2>
                        </div>
                        <div className="flex flex-col w-10">
                            <button onClick={handlerPlusIntBtn}>+</button>
                            <input className="text-center text-xl" value={intPoints} onChange={(e) => setIntPoints(e)} />
                            <button onClick={handlerMinusIntBtn}>-</button>
                            <h2>Intelligence</h2>
                        </div>
                        <div className="flex flex-col w-10">
                            <button onClick={handlerPlusWisBtn}>+</button>
                            <input className="text-center text-xl" value={wisPoints} onChange={(e) => setWisPoints(e)} />
                            <button onClick={handlerMinusWisBtn}>-</button>
                            <h2>Wisdom</h2>
                        </div>
                        <div className="flex flex-col w-10">
                            <button onClick={handlerPlusChaBtn}>+</button>
                            <input className="text-center text-xl" value={chaPoints} onChange={(e) => setChaPoints(e)} />
                            <button onClick={handlerMinusChaBtn}>-</button>
                            <h2>Charisma</h2>
                        </div>
                    </div>
                    <button onClick={handlerAcceptBtn}>Accept</button>
                </div>
            )
        }

        const StandardArrayPoints = () => {
            const [pointsArr, setPointArr] = useState([15, 14, 13, 12, 10, 8])

            //Tu jest coś zjebane. Submit aktualizuje submita z main info. Pojebane gówno
            const handlerSubmit = (e) => {
                e.preventDefault()
                const formElements = e.currentTarget.elements
                setStats(new CharacterStats(formElements[0].value, formElements[1].value, formElements[2].value,formElements[3].value, formElements[4].value), formElements[5].value)
                console.log(charInfo)
            }

            return (
                <div className="border-solid border-red-500 border-2">
                    <form onSubmit={handlerSubmit}>
                        <h2>Strenght</h2>
                        <select>
                            {
                                pointsArr.map((e, i) => {
                                    return <option key={i}>{e}</option>
                                })
                            }
                        </select>
                        <h2>Dexterity</h2>
                        <select>
                            {
                                pointsArr.map((e, i) => {
                                    return <option key={i}>{e}</option>
                                })
                            }
                        </select>
                        <h2>Constitution</h2>
                        <select>
                            {
                                pointsArr.map((e, i) => {
                                    return <option key={i}>{e}</option>
                                })
                            }
                        </select>
                        <h2>Inteligance</h2>
                        <select>
                            {
                                pointsArr.map((e, i) => {
                                    return <option key={i}>{e}</option>
                                })
                            }
                        </select>
                        <h2>Wisdom</h2>
                        <select>
                            {
                                pointsArr.map((e, i) => {
                                    return <option key={i}>{e}</option>
                                })
                            }
                        </select>
                        <h2>Charisma</h2>
                        <select>
                            {
                                pointsArr.map((e, i) => {
                                    return <option key={i}>{e}</option>
                                })
                            }
                        </select>
                        <button type="submit">Accept</button>
                    </form>
                </div>
            )
        }

        return (
            <>
            <h1 className="text-center text-slate-700">Abilities</h1>
            <p className="text-center text-slate-700">Select type of point distribution</p>
            <nav className="flex justify-center space-x-4">
                <a className="font-medium px-3 py-2 text-slate-700 border-slate-700" >Point Buy</a>
                <a className="font-medium px-3 py-2 text-slate-700 border-slate-700">Standard Array</a>
                <a className="font-medium px-3 py-2 text-slate-700 border-slate-700">Rolls</a>
            </nav>
            <PointBuy />
            <StandardArrayPoints />
            </>
        )
    }




    return (
        <>
        <h1>Create your character!</h1>
        <MainInfoPanel />
        <AbilitiesPanel />
        </>
    )
} 