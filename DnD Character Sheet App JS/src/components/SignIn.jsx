import { useState } from "react"
import supabase from "../config/supabaseClient"
import { useNavigate } from "react-router-dom"

export default function SignIn() {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigate()

    async function onSignIn(e) {
      e.preventDefault()

      let { data, error} = await supabase.auth.signInWithPassword({
        email: login,
        password: password
      })

      if (!error) {
        console.log('user logged successfully')
        console.log(data)

        navigation('/')
        return
      }
      console.error('Something went wrong:', error)
      
    }
    
    return (
        <>
        <h1 className="font-bold text-lg">Log In!</h1>
        <form onSubmit={onSignIn} className="flex flex-col gap-3">

          <label>
            E-mail:
            <input 
              type="text" 
              name="logInEmail"
              placeholder=" Enter email here " 
              value={login} onChange={(e) => setLogin(e.target.value)} />
          </label>

          <label>
            Password:
            <input 
              type="password" 
              name="logInPass"
              placeholder=" Password " 
              value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>

          <button type="submit" className="bg-orange-500 rounded-md">Sing In!</button>

        </form>

        <a onClick={() => navigation('/signup')}>Not a user? Click HERE to create account</a>
        </>
    )
}