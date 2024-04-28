import { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";
import { useNavigate } from 'react-router-dom'

export default function Home({ callback }) {
    const navigation = useNavigate()

    const [userID, setUserID] = useState(null)
    const [userSheets, setUserSheets] = useState(null)

    useEffect(() => {
        getSession()
        getSheets()
    }, [userID])

    async function getSession() {
        const { data, error } = await supabase.auth.getSession()
        console.log('data:', data, 'error:', error)
        setUserID(data.session.user.id)

        if (!data.session) {
            navigation('/signin')
        }
    }

    const getSheets = async () => {
        if (userID) {
            const { data, error } = await supabase
            .from('CharacterSheets')
            .select('character')
            .eq('created_by', userID)

        console.log(data, error)
        setUserSheets(data)
        }
    }

    async function onLogout() {
        let {error} = await supabase.auth.signOut()
        console.log(error)
        navigation('/signin')
    }

    return (
        <>
        <header className="bg-slate-700">
            <h1 className="flex text-4xl font-bold text-orange-500 text-center p-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">tRPG<p className="text-white font-thin font">Helper</p></h1>
        </header>
        <div className="flex flex-col justify-center border-slate-700 border-2 rounded-xl p-1 shadow-2xl shadow-slate-700 w-11/12 sm:w-9/12 lg:w-1/2 xl:w-1/3 mx-auto my-5">
            <h1 className="text-center font-bold text-4xl mb-2">Welcome to Table RPG Helper!</h1>
            <div className="flex flex-col justify-center items-center border-gray-300 border my-5 rounded-md">
                {!userSheets && <p className=" animate-pulse">There is no created character sheets. Click buttons below to create one</p>}
                {userSheets && userSheets.map((e, i) => {
                    const char = JSON.parse(e.character[0])

                    const btnHandler = () => {
                        callback(char)
                        navigation('/char-sheet')
                    }

                    return (
                        <div onClick={btnHandler} className="w-full h-20 cursor-pointer border border-gray-300 hover:border-orange-500" key={i}>
                            <h1 className="text-center">Character: {char.name}</h1>
                            <h2 className="text-center">Level: {char.lvl} / Class: {char.class} / Race: {char.race}</h2>
                        </div>
                    )
                })}
            </div>
            <button className="border-slate-700 bg-gray-500 border-2 rounded-xl mb-2" onClick={() => navigation('/character-sheet-creator')}>Create your character based on OGL 1.1 Licence (under construction)</button>
            <button onClick={() => navigation('/empty-chatacter-sheet')}>Create Character on Empty Sheet</button>
            <button 
                className="bg-orange-500 border-slate-700 border-2 rounded-xl mb-2"
                onClick={onLogout}
            >Logout</button>
        </div>
        </>
        
    )
}