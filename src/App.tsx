import { useState } from 'react'
import { Todos } from './components/Todos'
import { type Todo as TodoType, type TodoId } from './types'

const mockTodos = [{
  id: '1',
  title: 'Ver el Twich de midu',
  completed: true
}, {
  id: '2',
  title: 'Aprender React con ts',
  completed: false
}, {
  id: '3',
  title: 'Sacar tickets miduFest',
  completed: false
}]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        console.log('hola')
        return { ...todo, completed }
      }
      return todo
    })
    setTodos(newTodos)
  }

  return (
    <div className='todoapp'>
      <Todos todos={todos} onRemoveTodo={handleRemove} onToogleCompleted={handleCompleted} />
    </div>
  )
}

export default App
