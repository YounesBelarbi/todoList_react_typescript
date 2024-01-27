import { Toaster } from 'react-hot-toast'
import './App.css'
import { AddTodo } from './components/AddTodo'

function App() {

  return (
    <>
      <Toaster position='top-right' />
      <AddTodo />
    </>
  )
}

export default App
