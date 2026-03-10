type Props = {
    employee: any
    editingId: string | null
    name: string
    role: string
    setName: (v: string) => void
    setRole: (v: string) => void
    setEditingId: (v: string | null) => void
    updateEmployee: (id: string) => void
    deleteEmployee: (id: string) => void
}

export default function EmployteeItem({
    employee,
    editingId,
    name,
    role,
    setName,
    setRole,
    setEditingId,
    updateEmployee,
    deleteEmployee
}: Props) {
    const isEditing = editingId === employee.id

    if (isEditing) {
        return (
            <div>
                <input value={name} onChange={(e) => setName(e.target.value)} />
                <input value={role} onChange={(e) => setRole(e.target.value)} />
                <button onClick={() => { updateEmployee(employee.id) }}>Save</button>
            </div>
        )
    }

    return (
        <div>
            <p>{employee.name} - {employee.role}</p>

            <button onClick={() => {
                setEditingId(employee.id)
                setName(employee.name)
                setRole(employee.role)
            }}>
                Edit
            </button>

            <button onClick={() => deleteEmployee(employee.id)}>
                Delete
            </button>
        </div>
    )
}