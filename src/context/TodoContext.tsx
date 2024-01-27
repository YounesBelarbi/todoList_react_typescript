import { createContext, useState } from "react"

interface TodoContextProps {
    todos: Todo[]
    addTodo: (todo: string) => void
}

interface Todo {
    id: number
    text: string
    status: 'pending' | 'completed'
}

export const TodoContext = createContext<TodoContextProps | undefined>(undefined)
export const TodoProvider = (props: { children: React.ReactNode } ) => {
    const [todos, setTodos] = useState<Todo[]>([])

    const addTodo = (todo: Todo) => {
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
