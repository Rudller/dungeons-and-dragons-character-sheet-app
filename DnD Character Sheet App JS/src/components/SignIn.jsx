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
        <div className="flex flex-col items-center justify-center h-screen w-screen">
          <div className="flex flex-col items-center">
            <h1 className="font-bold">Hi!</h1>
            <h2 className="font-extralight">Welcome to Dungeons and Dragons character Sheet creator.</h2>
          </div>
          <div className="flex flex-col items-center border-2 border-slate-700 rounded-xl w-3/4 md:w-1/2 lg:w-1/3 m-auto shadow-2xl">
          <h1 className="font-bold text-4xl my-5">Log In!</h1>
          <form onSubmit={onSignIn} className="flex flex-col gap-3">

            <label className="self-end">
              E-mail:
              <input 
                type="text" 
                name="logInEmail"
                placeholder=" Enter email here " 
                value={login} onChange={(e) => setLogin(e.target.value)} />
            </label>

            <label className="self-end">
              Password:
              <input 
                type="password" 
                name="logInPass"
                placeholder=" Password " 
                value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>

            <button type="submit" className="bg-orange-500 border-2 border-slate-700 font-bold shadow-xl">Sing In!</button>

          </form>

          <a className=" font-extralight cursor-pointer my-5 animate-pulse" onClick={() => navigation('/signup')}>Not a user? Click <u>HERE</u> to create account</a>
        </div>
        </div>
    )
}