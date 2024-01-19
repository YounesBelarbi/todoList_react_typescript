import { useEffect, useRef, useState } from "react"
import { Input } from "./Input"

export const AddTodo = () => {
    const [value, setValue] = useState<string>("")
    const inputRef = useRef<HTMLInputElement>(null)
    const [todos, setTodos] = useState<string[]>([])

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }, [])


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (value.trim() !== "") {
            setTodos([...todos, value])
            setValue("")
        }
    }

    return (
        <form className="" onSubmit={handleSubmit}>
            <div>
                <Input
                    ref={inputRef}
                    value={value}
                    type="text"
                    className=""
                    placeholder="Ajouter une tâche..."
                    onChange={(e) => setValue(e.target.value)} />
                <button
                    type="submit"
                    className=""
                >Valider</button>
            </div>
        </form>
    )
}
