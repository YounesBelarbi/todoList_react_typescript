import { useEffect, useRef, useState } from "react"
import { Input } from "./Input"
import { useTodo } from "../hooks/useTodo"
import toast from "react-hot-toast"

export const AddTodo = () => {
    const [inputValue, setInputValue] = useState<string>("")
    const inputRef = useRef<HTMLInputElement>(null)
    const { addTodo } = useTodo()

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }, [])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (inputValue.trim() !== "") {
            addTodo(inputValue)
            setInputValue("")
            toast.success("Tâche ajoutée !")
        } else {
            toast.error("Le champ est vide !")
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Input
                    ref={inputRef}
                    value={inputValue}
                    type="text"
                    placeholder="Ajouter une tâche..."
                    onChange={(e) => setInputValue(e.target.value)} />
                <button
                    type="submit"
                >Valider</button>
            </div>
        </form>
    )
}
