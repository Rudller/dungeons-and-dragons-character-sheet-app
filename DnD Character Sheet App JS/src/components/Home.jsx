import { useEffect } from "react";
import supabase from "../config/supabaseClient";
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigation = useNavigate()

    useEffect(() => {
        getSession()
    })

    async function getSession() {
        const { data, error } = await supabase.auth.getSession()
        console.log('data:', data, 'error:', error)

        if (!data.session) {
            navigation('/signin')
        }
    }

    async function onLogout() {
        let {error} = await supabase.auth.signOut()
        console.log(error)
        navigation('/signin')
    }

    return (
        <div className="flex flex-col justify-center border-slate-700 border-2 rounded-xl p-1 shadow-2xl shadow-slate-700 w-11/12 sm:w-9/12 lg:w-1/2 xl:w-1/3 mx-auto">
            <h1 className="text-center font-bold text-4xl mb-2">Witoj poszukiwaczu przygód</h1>
            <button className="border-slate-700 border-2 rounded-xl mb-2" onClick={() => navigation('/character-sheet-creator')}>Create your character based on OGL 1.1 Licence</button>
            <button onClick={() => navigation('/empty-chatacter-sheet')}>Create Character on Empty Sheet</button>
            <button 
                className="bg-orange-500 border-slate-700 border-2 rounded-xl mb-2"
                onClick={onLogout}
            >Logout</button>
        </div>
    )
}