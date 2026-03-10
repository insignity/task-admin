import { useState } from "react"
import { supabase } from "../supabase"

type Props = {
    loadEmployees: () => void
}



export default function AddEmployee({
    loadEmployees
}: Props) {

    const [name, setName] = useState("")
    const [isErrorHidden, setIsErrorHidden] = useState(false)
    const [role, setRole] = useState("")

    async function addEmployee() {

        if (name && role) {

            setIsErrorHidden(true)

            const { error } = await supabase.from("employees").insert({ name, role })

            if (error) {
                console.log("ERROR:", error)
            } else {
                setName("")
                setRole("")
                loadEmployees()
            }
        } else {
            setIsErrorHidden(false)
        }
    }


    return (<div>
        <input value={name} placeholder="name" onChange={(e) => {
            setIsErrorHidden(true)
            setName(e.target.value)
        }} />
        <input value={role} placeholder="role" onChange={(e) => {
            setIsErrorHidden(true)

            setRole(e.target.value)
        }} />
        <button onClick={() => { addEmployee() }}>Add new employee</button>
        <p hidden={isErrorHidden} style={{ color: "red" }}>The name and the role mustn't be empty!</p>
    </div>)
}