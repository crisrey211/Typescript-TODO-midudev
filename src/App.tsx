import { useState } from 'react'
import { Todos } from './components/Todos'

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

  return (
    <div className='todoapp'>
      <Todos todos={todos} />
    </div>
  )
}

export default App
