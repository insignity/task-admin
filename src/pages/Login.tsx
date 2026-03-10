import { useState } from "react"
import { supabase } from "../supabase"
import { useNavigate } from "react-router-dom"

export default function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function handleLogin() {
        const { error } = await supabase.auth.signInWithPassword({
            email, password
        })
        if (!error) {
            navigate("/dashboard")
        }
    }

    return (
        <div>
            <h2>Login</h2>

            <input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />

            <button onClick={handleLogin}>Login</button>

        </div>
    )
}