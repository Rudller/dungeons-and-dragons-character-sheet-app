import { useState } from "react";
import supabase from "../config/supabaseClient";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
    const [singUpLogin, setSingUpLogin] = useState('')
    const [singUpPass, setSingUpPass] = useState('')

    const navigation = useNavigate()

    async function handleSingUp(e) {
        e.preventDefault()
        
        let { data, error } = await supabase.auth.signUp(
            {
              email: singUpLogin,
              password: singUpPass
            }
        )
          
        if (!error) {
          console.log('user created successfully');
          console.log(data);
          return;
        }
        
        console.error('something went wrong', error);
      }


    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen">
            <div className="flex flex-col items-center border-2 border-slate-700 rounded-xl w-3/4 md:w-1/2 lg:w-1/3 m-auto shadow-2xl">
            <h1 className="font-bold text-4xl my-5">Register new user!</h1>
            <form onSubmit={handleSingUp} className="flex flex-col gap-3">

            <label className="self-end">
                E-mail:
                <input 
                type="text" 
                name="signUpEmail"
                placeholder=" Enter your emali here " 
                value={singUpLogin} onChange={(e) => setSingUpLogin(e.target.value)} />
            </label>

            <label className="self-end">
                Password:
                <input 
                type="password" 
                name="signUpPass"
                placeholder=" Enter password here " 
                value={singUpPass} onChange={(e) => setSingUpPass(e.target.value)}/>
            </label>

            <button type="submit" className="bg-orange-500 border-2 border-slate-700 font-bold shadow-xl">Sing Up!</button>

            </form>

            <a className="font-extralight cursor-pointer my-5 animate-pulse" onClick={() => navigation('/signin')}>Already a user? Click <u>HERE</u> to log in</a>
        </div>
        </div>
    )
}