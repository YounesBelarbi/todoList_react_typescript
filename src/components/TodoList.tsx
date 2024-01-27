import { useTodo } from "../hooks/useTodo"
import { motion } from "framer-motion"
import { TodoItem } from "./TodoItem"

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
                <motion.ul>
                    {todos.map((todoObject) => (
                        <TodoItem todo={todoObject} key={todoObject.id} />
                    ))}
                </motion.ul>
            )
    )
}
