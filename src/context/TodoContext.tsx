import { createContext, useState } from "react"
import getUid from "get-uid"

interface TodoContextProps {
    todos: Todo[]
    addTodo: (todo: string) => void
}

interface Todo {
    id: number
    text: string
    status: 'undone' | 'completed'
}

export const TodoContext = createContext<TodoContextProps | undefined>(undefined)
export const TodoProvider = (props: { children: React.ReactNode }) => {
    const [todos, setTodos] = useState<Todo[]>([])

    const addTodo = (text: string) => {
        const newTodo: Todo = {
            id: getUid(),
            text,
            status: 'undone'
        }
        setTodos([...todos, newTodo])
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
