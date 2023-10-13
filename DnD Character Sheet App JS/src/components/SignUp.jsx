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
        <div>
            <h1>Register new user!</h1>
            <form onSubmit={handleSingUp} className="flex flex-col gap-3">

            <label>
                E-mail:
                <input 
                type="text" 
                name="signUpEmail"
                placeholder=" Enter your emali here " 
                value={singUpLogin} onChange={(e) => setSingUpLogin(e.target.value)} />
            </label>

            <label>
                Password:
                <input 
                type="password" 
                name="signUpPass"
                placeholder=" Enter password here " 
                value={singUpPass} onChange={(e) => setSingUpPass(e.target.value)}/>
            </label>

            <button type="submit" className="bg-orange-500 rounded-md">Sing Up!</button>

            </form>

            <a onClick={() => navigation('/signin')}>Already a user? Click HERE to log in</a>
        </div>
    )
}