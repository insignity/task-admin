import { useEffect } from "react"
import { supabase } from "../supabase"
import { Link } from "react-router-dom"

export default function Dashboard() {
    useEffect(() => {
        checkUser()
    }, [])

    async function checkUser() {
        const { data } = await supabase.auth.getUser()
        console.log(data)
    }

    return <div>
        <h1>Dashboard</h1>
        <Link to="/employees">Employees</Link>
    </div>
}