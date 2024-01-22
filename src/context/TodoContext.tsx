import { createContext, useState } from "react"

interface TodoContextProps {
    todos: string[]
    addTodo: (todo: string) => void
}

export const TodoContext = createContext<TodoContextProps | undefined>(undefined)
export const TodoProvider = (props: { children: React.ReactNode } ) => {
    const [todos, setTodos] = useState<string[]>([])

    const addTodo = (todo: string) => {
        setTodos([...todos, todo])
    }

    const contextValueObject = {
        todos,
        addTodo
    }
    
    return (
        <TodoContext.Provider value={contextValueObject}>
            {props.children}
        </TodoContext.Provider>
    )
}
