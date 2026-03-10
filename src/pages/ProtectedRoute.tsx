import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"
import { supabase } from "../supabase"

export default function ProtectedRoute({ children }: any) {
    const [loading, setLoading] = useState(true)
    const [session, setSession] = useState<any>(null)

    useEffect(() => {
        checkSession()
    }, [])

    async function checkSession() {
        const { data } = await supabase.auth.getSession()

        setSession(data.session)
        setLoading(false)
    }

    if (loading) return <div>Loading...</div>

    if (!session) {
        return <Navigate to="/login" />
    }

    return children
}