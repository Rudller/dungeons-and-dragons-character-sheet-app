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
        <>
        <h1>Witoj poszukiwaczu przygód</h1>
        <button onClick={() => navigation('/character-sheet-creator')}>Przejdź do tworzenia postaci</button>
        <button 
            className="bg-orange-500 rounded-md"
            onClick={onLogout}
        >Logout</button>
        </>
    )
}