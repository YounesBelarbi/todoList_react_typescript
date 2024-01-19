import { useEffect, useRef, useState } from "react"

export const AddTodo = () => {
    const [value, setValue] = useState<string>("")
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.focus()
      }
    }, [])
    

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log(value)
    }

    return (
        <form className="" onSubmit={handleSubmit}>
            <div>
                <input
                    ref={inputRef}
                    value={value}
                    type="text"
                    className=""
                    placeholder="Ajouter une tâche..." 
                    onChange={(e) => setValue(e.target.value)}/>
                <button
                    type="submit"
                    className=""
                >Valider</button>
            </div>
        </form>
    )
}
