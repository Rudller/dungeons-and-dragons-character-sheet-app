import { useEffect, useState } from "react";
import CharacterInfo from "../character/characterInfo"
import CharacterStats from "../character/CharacterStats";

const api = 'https://www.dnd5eapi.co'

export default function CharacterSheetCreator() {

    const [charInfo, setCharInfo] = useState(null)
    const [stats, setStats] = useState(null)

    const [profBonus, setProfBonus] = useState(null)

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
            const newCharacterInfo = new CharacterInfo(
                formElements.level.value,
                formElements.charName.value,
                formElements.class.value,
                formElements.race.value,
                formElements.background.value,
                formElements.alignment.value
            )
            setCharInfo(newCharacterInfo)
        
            if (formElements.level.value <= 5){
                setProfBonus(2)
            } else if (formElements.level.value <= 9) {
                setProfBonus(4)
            } else if (formElements.level.value <= 13) {
                setProfBonus(5)
            } else if (formElements.level.value <= 17) {
                setProfBonus(6)
            }

            console.log(charInfo);
        }

        return (
            <>
            {!charInfo &&
            <div className="flex flex-col justify-center items-center w-11/12 sm:w-9/12 lg:w-1/2 xl:w-1/3 m-auto">
                <h2 className="text-center text-slate-700 text-4xl font-bold mb-5">Main info</h2>
                    <form onSubmit={handlerSubmit} className="flex flex-col items-center border-2 border-slate-700 rounded-2xl shadow-lg shadow-slate-700 mb-10 p-1">
                        <label className=" text-xl m-5 flex flex-col items-center">
                            What is your character level?
                            <select name="level">
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
                                <option value="17 ">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                            </select>
                        </label>
                        <label className=" text-xl m-5 flex flex-col items-center">
                            Whats your character name?
                            <input name="charName"/>
                        </label>
                        <label className="text-xl m-5 flex flex-col items-center">
                            Class:
                            <select name="class">
                                {!classData && <option>Loading data...</option>}
                                {classData && classData.results.map((e, index) =>{
                                    return <option key={index} value={e.index}>{e.name}</option>
                                })
                                }
                            </select>
                        </label>
                        <label className="text-xl m-5 flex flex-col items-center">
                            Race:
                            <select name="race">
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
                            <select name="alignment">
                                {!alignmentData && <option>Loading Data...</option>}
                                {alignmentData && alignmentData.results.map((e, index) => {
                                    return <option key={index} value={e.index}>{e.name}</option>
                                })}
                            </select>
                        </label>
                        <button className="bg-orange-500 rounded-md p-2 border-slate-700 border-2 font-bold" type="submit">Next</button>
                    </form>
            </div>}
            { charInfo && (
                <div className="flex flex-col justify-center items-center border-2 border-slate-700 rounded-xl shadow-2xl w-11/12 sm:w-9/12 lg:w-1/2 xl:w-1/3 m-auto">
                    <h1 className="text-base font-bold">{charInfo.name} - {charInfo.lvl} Level</h1>
                    <div  className="flex justify-center items-center gap-3">
                        <h2 className="text-sm">Class: {charInfo.class}</h2>
                        <h2 className="text-sm">Race: {charInfo.race}</h2>
                        <h2 className="text-sm">Background: {charInfo.background}</h2>
                        <h2 className="text-sm">Alignment: {charInfo.alignment}</h2>
                    </div>
                    <p className="text-xs">Proficiency bonus: {profBonus}</p>
                </div>)}
            </>
        )
    }

    const AbilitiesPanel = () => {

    const [abilitiesTypePage, setAbilitiesTypePage] = useState(0)

        const PointBuy = () => {
            const [pointsToBuy, setPointsToBuy] = useState(27)

            const [strPoints, setStrPoints] = useState(8)
            const [dexPoints, setDexPoints] = useState(8)
            const [conPoints, setConPoints] = useState(8)
            const [intPoints, setIntPoints] = useState(8)
            const [wisPoints, setWisPoints] = useState(8)
            const [chaPoints, setChaPoints] = useState(8)
            
            //Increasing points logic where 'typeOfStatisic' is given statictic type 
            function pointPlus(statisticName,typeOfStatistic)
            {
                if (pointsToBuy > 0 && typeOfStatistic < 13) {
                    switch(statisticName)
                    {
                        case "str":
                            setStrPoints((prev) => prev + 1)
                            break;
                        case "dex":
                            setDexPoints((prev) => prev + 1)
                            break;
                        case "con":
                            setConPoints((prev) => prev + 1)
                            break;
                        case "int":
                            setIntPoints((prev) => prev + 1)
                            break;
                        case "wis":
                            setWisPoints((prev) => prev + 1)
                            break;
                        case "cha":
                            setChaPoints((prev) => prev + 1)
                            break;
                    }
                    setPointsToBuy((prev) => prev - 1)
                } else if (pointsToBuy >= 2 && typeOfStatistic < 15) {
                    switch(statisticName)
                    {
                        case "str":
                            setStrPoints((prev) => prev + 1)
                            break;
                        case "dex":
                            setDexPoints((prev) => prev + 1)
                            break;
                        case "con":
                            setConPoints((prev) => prev + 1)
                            break;
                        case "int":
                            setIntPoints((prev) => prev + 1)
                            break;
                        case "wis":
                            setWisPoints((prev) => prev + 1)
                            break;
                        case "cha":
                            setChaPoints((prev) => prev + 1)
                            break;
                    }
                    setPointsToBuy((prev) => prev - 2)
                }
            }
            //Decreasing points logic where 'typeOfStatisic' is given statictic type 
            function pointMinus(statisticName,typeOfStatistic)
            {
                if (pointsToBuy < 27 && typeOfStatistic > 8 && typeOfStatistic <= 13) {
                    switch(statisticName)
                    {
                        case "str":
                            setStrPoints((prev) => prev - 1)
                            break;
                        case "dex":
                            setDexPoints((prev) => prev - 1)
                            break;
                        case "con":
                            setConPoints((prev) => prev - 1)
                            break;
                        case "int":
                            setIntPoints((prev) => prev - 1)
                            break;
                        case "wis":
                            setWisPoints((prev) => prev - 1)
                            break;
                        case "cha":
                            setChaPoints((prev) => prev - 1)
                            break;
                    }
                    setPointsToBuy((prev) => prev + 1)
                } else if (pointsToBuy < 27 && typeOfStatistic <= 15 && typeOfStatistic > 8) {
                    switch(statisticName)
                    {
                        case "str":
                            setStrPoints((prev) => prev - 1)
                            break;
                        case "dex":
                            setDexPoints((prev) => prev - 1)
                            break;
                        case "con":
                            setConPoints((prev) => prev - 1)
                            break;
                        case "int":
                            setIntPoints((prev) => prev - 1)
                            break;
                        case "wis":
                            setWisPoints((prev) => prev - 1)
                            break;
                        case "cha":
                            setChaPoints((prev) => prev - 1)
                            break;
                    }
                    setPointsToBuy((prev) => prev + 2)
                }
            }
            //Strenght
            const handlerPlusStrBtn = () => {
               pointPlus("str",strPoints)
            }
            const handlerMinusStrBtn = () => {
               pointMinus("str",strPoints)
            }

            //Dexterity
            const handlerPlusDexBtn = () => {
                pointPlus("dex",dexPoints)
            }
            const handlerMinusDexBtn = () => {
                pointMinus("dex",dexPoints)
            }

            //Constitution
            const handlerPlusConBtn = () => {
                pointPlus("con",conPoints)
            }
            const handlerMinusConBtn = () => {
               pointMinus("con",conPoints)
            }

            //Intelligence
            const handlerPlusIntBtn = () => {
               pointPlus("int",intPoints)
            }
            const handlerMinusIntBtn = () => {
               pointMinus("int",intPoints)
            }

            //Wisdom
            const handlerPlusWisBtn = () => {
                pointPlus("wis",wisPoints)
            }
            const handlerMinusWisBtn = () => {
                pointMinus("wis",wisPoints)
            }

            //Charisma
            const handlerPlusChaBtn = () => {
                pointPlus("cha",chaPoints)
            }
            const handlerMinusChaBtn = () => {
                pointMinus("cha",chaPoints)
            }

            const handlerAcceptBtn = () => {
                if (pointsToBuy === 0) {
                    let updatedStr = strPoints;
                    let updatedDex = dexPoints;
                    let updatedCon = conPoints;
                    let updatedInt = intPoints;
                    let updatedWis = wisPoints;
                    let updatedCha = chaPoints;
            
                    // Check the selected bonus for +2
                    const bonusTwo = document.querySelector('#BonusTwo').value;
                    switch (bonusTwo) {
                        case "str":
                            updatedStr += 2;
                            break;
                        case "dex":
                            updatedDex += 2;
                            break;
                        case "con":
                            updatedCon += 2;
                            break;
                        case "int":
                            updatedInt += 2;
                            break;
                        case "wis":
                            updatedWis += 2;
                            break;
                        case "cha":
                            updatedCha += 2;
                            break;
                    }
            
                    // Check the selected bonus for +1
                    const bonusOne = document.querySelector('#BonusOne').value;
                    switch (bonusOne) {
                        case "str":
                            updatedStr += 1;
                            break;
                        case "dex":
                            updatedDex += 1;
                            break;
                        case "con":
                            updatedCon += 1;
                            break;
                        case "int":
                            updatedInt += 1;
                            break;
                        case "wis":
                            updatedWis += 1;
                            break;
                        case "cha":
                            updatedCha += 1;
                            break;
                    }

                    const updatedStats = new CharacterStats(updatedStr, updatedDex, updatedCon, updatedInt, updatedWis, updatedCha);
                    setStats(updatedStats);
                    console.log(stats);
            
                } else {
                    alert(`You have ${pointsToBuy} left. Assign them to abilities`);
                }
            };

            return (
                <div className="flex flex-col justify-center border-slate-700 border-2 rounded-xl p-1 shadow-2xl shadow-slate-700 w-11/12 sm:w-9/12 lg:w-1/2 xl:w-1/3 m-auto">
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
                    <h2 className="text-center my-3">Add +2 and +1 for two of your main stats</h2>
                    <label className="text-center" >
                        + 2 for: 
                        <select id="BonusTwo">
                            <option value="str">Strenght</option>
                            <option value="dex">Dexterity</option>
                            <option value="con">Constitution</option>
                            <option value="int">Inteligance</option>
                            <option value="wis">Wisdom</option>
                            <option value="cha">Charisma</option>
                        </select>
                    </label>
                    <label className="text-center">
                        + 1 for: 
                        <select id="BonusOne">
                            <option value="str">Strenght</option>
                            <option value="dex">Dexterity</option>
                            <option value="con">Constitution</option>
                            <option value="int">Inteligance</option>
                            <option value="wis">Wisdom</option>
                            <option value="cha">Charisma</option>
                        </select>
                    </label>
                    <button className="m-1 font-bold " onClick={handlerAcceptBtn}>Accept</button>
                </div>
            )
        }

        const StandardArrayPoints = () => {
            const pointsArr = ["-",15, 14, 13, 12, 10, 8]


            const handlerSubmit = (e) => {

                const formElements = e.currentTarget.elements

                let updatedStr = Number(formElements[0].value)
                let updatedDex = Number(formElements[1].value)
                let updatedCon = Number(formElements[2].value)
                let updatedInt = Number(formElements[3].value)
                let updatedWis = Number(formElements[4].value)
                let updatedCha = Number(formElements[5].value)

                    const bonusTwo = document.querySelector('#BonusTwo').value;
                    switch (bonusTwo) {
                        case "str":
                            updatedStr += 2;
                            break;
                        case "dex":
                            updatedDex += 2;
                            break;
                        case "con":
                            updatedCon += 2;
                            break;
                        case "int":
                            updatedInt += 2;
                            break;
                        case "wis":
                            updatedWis += 2;
                            break;
                        case "cha":
                            updatedCha += 2;
                            break;
                    }
            
                    const bonusOne = document.querySelector('#BonusOne').value;
                    switch (bonusOne) {
                        case "str":
                            console.log(updatedStr)
                            updatedStr += 1;
                            console.log(updatedStr)
                            break;
                        case "dex":
                            updatedDex += 1;
                            break;
                        case "con":
                            updatedCon += 1;
                            break;
                        case "int":
                            updatedInt += 1;
                            break;
                        case "wis":
                            updatedWis += 1;
                            break;
                        case "cha":
                            updatedCha += 1;
                            break;
                    }

                    const updatedStats = new CharacterStats(updatedStr, updatedDex, updatedCon, updatedInt, updatedWis, updatedCha)
                    setStats(updatedStats)
                    console.log(stats)
                }
                
            

            return (
                <div className="border-slate-700 border-2 rounded-2xl p-2 shadow-2xl shadow-slate-700 w-11/12 sm:w-9/12 lg:w-1/2 xl:w-1/3 m-auto">
                    <h1 className="text-center font-bold my-2">Standard Array of Ability Points</h1>
                    <p className="text-center text-slate-700">How it works? The standard array is a specific set of scores, which in D&D 5th edition is [15, 14, 13, 12, 10, 8]. Assign each of the numbers to the stats.</p>
                    <div className="flex flex-col my-2">
                        <h2 className="text-center my-3">Add +2 and +1 for two of your main stats</h2>
                        <label className="text-center" >
                            + 2 for: 
                            <select id="BonusTwo">
                                <option value="str">Strenght</option>
                                <option value="dex">Dexterity</option>
                                <option value="con">Constitution</option>
                                <option value="int">Inteligance</option>
                                <option value="wis">Wisdom</option>
                                <option value="cha">Charisma</option>
                            </select>
                        </label>
                        <label className="text-center">
                            + 1 for: 
                            <select id="BonusOne">
                                <option value="str">Strenght</option>
                                <option value="dex">Dexterity</option>
                                <option value="con">Constitution</option>
                                <option value="int">Inteligance</option>
                                <option value="wis">Wisdom</option>
                                <option value="cha">Charisma</option>
                            </select>
                        </label>
                    </div>
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
                let updatedStr = strPoints;
                let updatedDex = dexPoints;
                let updatedCon = conPoints;
                let updatedInt = intPoints;
                let updatedWis = wisPoints;
                let updatedCha = chaPoints;

                 // Check the selected bonus for +2
                 const bonusTwo = document.querySelector('#BonusTwo').value;
                 switch (bonusTwo) {
                     case "str":
                         updatedStr += 2;
                         break;
                     case "dex":
                         updatedDex += 2;
                         break;
                     case "con":
                         updatedCon += 2;
                         break;
                     case "int":
                         updatedInt += 2;
                         break;
                     case "wis":
                         updatedWis += 2;
                         break;
                     case "cha":
                         updatedCha += 2;
                         break;
                 }
         
                 // Check the selected bonus for +1
                 const bonusOne = document.querySelector('#BonusOne').value;
                 switch (bonusOne) {
                     case "str":
                         updatedStr += 1;
                         break;
                     case "dex":
                         updatedDex += 1;
                         break;
                     case "con":
                         updatedCon += 1;
                         break;
                     case "int":
                         updatedInt += 1;
                         break;
                     case "wis":
                         updatedWis += 1;
                         break;
                     case "cha":
                         updatedCha += 1;
                         break;
                    }
                
                let updatedStats = new CharacterStats(updatedStr, updatedDex, updatedCon, updatedInt, updatedWis, updatedCha)
                setStats(updatedStats)
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
                <div className="flex flex-col border-slate-700 border-2 rounded-2xl shadow-2xl shadow-slate-700 w-11/12 sm:w-9/12 lg:w-1/2 xl:w-1/3 m-auto">
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
                    <h2 className="text-center my-3">Add +2 and +1 for two of your main stats</h2>
                    <label className="text-center" >
                        + 2 for: 
                        <select id="BonusTwo">
                            <option value="str">Strenght</option>
                            <option value="dex">Dexterity</option>
                            <option value="con">Constitution</option>
                            <option value="int">Inteligance</option>
                            <option value="wis">Wisdom</option>
                            <option value="cha">Charisma</option>
                        </select>
                    </label>
                    <label className="text-center">
                        + 1 for: 
                        <select id="BonusOne">
                            <option value="str">Strenght</option>
                            <option value="dex">Dexterity</option>
                            <option value="con">Constitution</option>
                            <option value="int">Inteligance</option>
                            <option value="wis">Wisdom</option>
                            <option value="cha">Charisma</option>
                        </select>
                    </label>
                    <button onClick={handlerStatBtn} className="font-bold m-1">Assign to stat</button>
                </div>
            )
        }

        return (
            <div className="">
            {!stats && charInfo && <div className="my-20">
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
            }
            {stats && <div className="flex ">
                {stats.abilities.map((e, index) => {
                    return (
                    <div key={index} className="flex flex-col border-2 border-slate-700 rounded-xl w-1/6 my-5">
                        <h1 className="text-center font-bold">{e.modifier}</h1>
                        <h1 className="text-center text-sm">{e.name}</h1>
                        <h1 className="border-2 border-slate-700 rounded-2xl text-center font-thin translate-y-1/3 translate-x-1/4 w-2/3 bg-white">{e.score}</h1>
                    </div>
                    )
                })}
                
            </div>}
            </div>
        )
    }

    const SavingThrowPanel = () => {
        const [s, setS] = useState(stats)

        const handleChkStr = (e) => {
            const updatedStats = {...s}
            if (e.target.checked) {
                updatedStats.savingThrows[0].proficient = true
                updatedStats.savingThrows[0].modifier = updatedStats.savingThrows[0].modifier + profBonus
            } else {
                updatedStats.savingThrows[0].proficient = false
                updatedStats.savingThrows[0].modifier = updatedStats.savingThrows[0].modifier - profBonus
            }
            setS(updatedStats)
        }

        const handleChkDex = (e) => {
            const updatedStats = {...s}
            if (e.target.checked) {
                updatedStats.savingThrows[1].proficient = true
                updatedStats.savingThrows[1].modifier = updatedStats.savingThrows[1].modifier + profBonus
            } else {
                updatedStats.savingThrows[1].proficient = false
                updatedStats.savingThrows[1].modifier = updatedStats.savingThrows[1].modifier - profBonus
            }
            setS(updatedStats)
        }

        const handleChkCon = (e) => {
            const updatedStats = {...s}
            if (e.target.checked) {
                updatedStats.savingThrows[2].proficient = true
                updatedStats.savingThrows[2].modifier = updatedStats.savingThrows[2].modifier + profBonus
            } else {
                updatedStats.savingThrows[2].proficient = false
                updatedStats.savingThrows[2].modifier = updatedStats.savingThrows[2].modifier - profBonus
            }
            setS(updatedStats)
        }

        const handleChkInt = (e) => {
            const updatedStats = {...s}
            if (e.target.checked) {
                updatedStats.savingThrows[3].proficient = true
                updatedStats.savingThrows[3].modifier = updatedStats.savingThrows[3].modifier + profBonus
            } else {
                updatedStats.savingThrows[3].proficient = false
                updatedStats.savingThrows[3].modifier = updatedStats.savingThrows[3].modifier - profBonus
            }
            setS(updatedStats)
        }

        const handleChkWis = (e) => {
            const updatedStats = {...s}
            if (e.target.checked) {
                updatedStats.savingThrows[4].proficient = true
                updatedStats.savingThrows[4].modifier = updatedStats.savingThrows[4].modifier + profBonus
            } else {
                updatedStats.savingThrows[4].proficient = false
                updatedStats.savingThrows[4].modifier = updatedStats.savingThrows[4].modifier - profBonus
            }
            setS(updatedStats)
        }

        const handleChkCha = (e) => {
            const updatedStats = {...s}
            if (e.target.checked) {
                updatedStats.savingThrows[5].proficient = true
                updatedStats.savingThrows[5].modifier = updatedStats.savingThrows[5].modifier + profBonus
            } else {
                updatedStats.savingThrows[5].proficient = false
                updatedStats.savingThrows[5].modifier = updatedStats.savingThrows[5].modifier - profBonus
            }
            setS(updatedStats)
        }

        return (
            <div className="flex flex-col border-2 border-slate-700 shadow-2xl rounded-2xl w-11/12 sm:w-9/12 lg:w-1/2 xl:w-1/3 mx-auto my-10 p-2">
                {!stats && <h1 className="animate-pulse text-center font-bold">Waiting for Stats...</h1>}
                {stats &&
                <>
                <h1 className="text-center m-2">Set your saving throw proficiency</h1>
                <p className="text-center">Set 2 abilities that you have proficient in saving throws</p>
                <label className="text-center">
                    <input type="checkbox" onChange={handleChkStr}/>
                    Strenght: {stats.savingThrows[0].modifier}
                </label>
                <label className="text-center">
                    <input type="checkbox" onChange={handleChkDex} />
                    Dexterity: {stats.savingThrows[1].modifier}
                </label>
                <label className="text-center">
                    <input type="checkbox" onChange={handleChkCon} />
                    Constitution: {stats.savingThrows[2].modifier}
                </label>
                <label className="text-center">
                    <input type="checkbox" onChange={handleChkInt} />
                    Inteligance: {stats.savingThrows[3].modifier}
                </label>
                <label className="text-center">
                    <input type="checkbox" onChange={handleChkWis} />
                    Wisdom: {stats.savingThrows[4].modifier}
                </label>
                <label className="text-center">
                    <input type="checkbox" onChange={handleChkCha} />
                    Charisma: {stats.savingThrows[5].modifier}
                </label>
                </>}
            </div>
        )
    }

    const SkillsPanel = () => {
        const [s, setS] = useState(stats)

        const handleChk = (e, skillIndex) => {
            const updatedStats = { ...s }
            if (e.target.checked) {
                updatedStats.skills[skillIndex].proficient = true
                updatedStats.skills[skillIndex].modifier += profBonus
            } else {
                updatedStats.skills[skillIndex].proficient = false
                updatedStats.skills[skillIndex].modifier -= profBonus
            }
            setS(updatedStats)
        }
        
        return (
            <div className="flex flex-col items-center border-2 border-slate-700 rounded-xl shadow-2xl w-11/12 sm:w-9/12 lg:w-1/2 xl:w-1/3 mx-auto my-5 p-2">
                {!stats && <h1 className="animate-pulse text-center font-bold">Waiting for Stats...</h1>}
                {stats && <>
                <h1>Set your skill proficiency</h1>
                {stats.skills.map((e, index) => {
                    return (
                        <label key={index}>
                            <input key={index} type="checkbox" onChange={(e) => handleChk(e, index)}></input>
                            {e.name}: {e.modifier} ({e.ability})
                        </label>
                    )
                })}
                </>}
            </div>
        )
    }

    const ProficiencyPanel = () => {

        const btnHandler = () => {

        }

        return (
            <>
            {stats && 
            <div className="flex flex-col items-center">
                <SavingThrowPanel />
                <SkillsPanel />
                <button className=" m-auto border-2 border-slate-700 font-bold" onClick={btnHandler}>Next</button>
            </div>
            }
            </>
        )
    }

    return (
        <div>
        <h1 className="text-center text-5xl font-bold text-slate-700 mb-10">Create your character!</h1>
        <MainInfoPanel />
        <AbilitiesPanel />
        <ProficiencyPanel />
        </div>
    )
}