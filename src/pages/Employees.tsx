import { supabase } from "../supabase"
import { useEffect, useState } from "react"
import EmployeeItem from "../components/EmployeeItem"
import AddEmployee from "../components/AddEmployee"

export default function Employees() {

    const [employees, setEmployees] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [name, setName] = useState<string>("")
    const [role, setRole] = useState<string>("")
    const [editingId, setEditingId] = useState<string | null>(null)

    useEffect(() => {
        loadEmployees()
    }, [])

    async function loadEmployees() {
        const { data, error } = await supabase.from("employees").select("*")

        console.log("DATA:", data)
        console.log("ERROR:", error)

        if (error) {
            console.log(error)
        } else {
            setEmployees(data)
            setLoading(false)

        }
    }

    async function updateEmployee(id: string) {
        const { error } = await supabase.from("employees").update({ name, role }).eq("id", id)

        if (error) {
            console.log("ERROR:", error)
        } else {
            setEditingId(null)
            loadEmployees()
        }
    }

    async function deleteEmployee(id: string) {

        const { error } = await supabase.from("employees").delete().eq("id", id)
        if (error) {
            console.log("ERROR:", error)
        } else {
            loadEmployees()
        }
    }

    if (loading) {
        return <div>Loading employees...</div>
    }

    return (//for all JSX we cover it with ()
        <div>
            <h1>Employees</h1>

            {//for JS or TS inside JSX we cover with {}
                employees.map((employee) => (//JSX
                    <EmployeeItem
                        key={employee.id}
                        employee={employee}
                        editingId={editingId}
                        name={name}
                        role={role}
                        setName={setName}
                        setRole={setRole}
                        setEditingId={setEditingId}
                        updateEmployee={updateEmployee}
                        deleteEmployee={deleteEmployee}
                    />
                ))}
            <AddEmployee loadEmployees={loadEmployees} />



        </div>
    )
}