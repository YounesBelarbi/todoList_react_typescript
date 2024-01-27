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
                    {todos.map((todoObject) => (
                        <li key={todoObject.id}>{todoObject.text}</li>
                    ))}
                </ul>
            )
    )
}
