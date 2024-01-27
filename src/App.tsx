import { Toaster } from 'react-hot-toast'
import './App.css'
import { AddTodo } from './components/AddTodo'
import { TodoList } from './components/TodoList'

function App() {

  return (
    <>
      <Toaster position='top-right' />
      <AddTodo />
      <TodoList />
    </>
  )
}

export default App
