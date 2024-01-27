import { useTodo } from "../hooks/useTodo"

export const TodoList = () => {
    const { todos } = useTodo()

    return (
        !todos.length ?
            (
                <div>
                    <h2>Aucune tâche</h2>
                </div>
            )
            :
            (
                <ul>
                    {todos.map((todo, index) => (
                        <li key={index}>{todo}</li>
                    ))}
                </ul>
            )
    )
}
