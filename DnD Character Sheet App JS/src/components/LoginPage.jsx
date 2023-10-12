import React, { useState } from "react"

export default function LoginPage() {
    const [signUp, setSignUp] = useState(false)
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [singUpLogin, setSingUpLogin] = useState('')
    const [singUpPass, setSingUpPass] = useState('')

    return (
    <>
    <h1 className="text-center">Welcome in Dungeons and Dragons Character Sheet Vault</h1>
      <div className="border-solid border-2 border-orange-500 rounded-md flex flex-col justify-center items-center m-10 p-2">
        {/* Logowanie uzytkownika */}
        {!signUp && 
        <>
        <h1 className="font-bold text-lg">Log In!</h1>
        <form className="flex flex-col gap-3">
          <label>
            E-mail:
            <input type="text" placeholder=" Enter email here " value={login} onChange={(e) => setLogin(e.target.value)} />
          </label>
          <label>
            Password:
            <input type="password" placeholder=" Password " value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <button className="bg-orange-500 rounded-md">Sing In!</button>
        </form>
        <div className="">
            <p>Not a user? Click on <a onClick={() => setSignUp(true)}>Sign Up!</a></p>
        </div>
        </>
        }
        {/* Rejestracja nowego uzytkownika */}
        {signUp && 
        <>
        <h1>Register new user!</h1>
        <form className="flex flex-col gap-3">
          <label>
            E-mail:
            <input type="text" placeholder=" Enter your emali here " value={singUpLogin} onChange={(e) => setSingUpLogin(e.target.value)} />
          </label>
          <label>
            Password:
            <input type="password" placeholder=" Enter password here " value={singUpPass} onChange={(e) => setSingUpPass(e.target.value)}/>
          </label>
          <button className="bg-orange-500 rounded-md">Sing Up!</button>
        </form>
        <div className="">
            <p>Have a account? Click on <a onClick={() => setSignUp(false)}>Sign In!</a></p>
        </div>
        </>
        }
      </div>
    </>
    )
}