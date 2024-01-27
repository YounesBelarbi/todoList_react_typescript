import { motion } from "framer-motion"
import { Todo } from "../context"

export const TodoItem = (props: { todo: Todo }) => {
    const { todo } = props //a tester si nécesaire

    return (
        <motion.li
            layout
            className={todo.status === 'completed' ? 'bg-opacity-50 text-zinc-500' : 'none'}
        >
            <motion.span
                layout
                style={{
                    textDecoration: todo.status === 'completed' ? 'line-through' : 'none',
                }}
            >
                {todo.text}
            </motion.span>
        </motion.li>)
}
