import { useState } from 'react'
import { TODO_FILTERS } from './components/consts'
import { Footer } from './components/Footer'
import { Todos } from './components/Todos'
import { type FilterValue, type Todo as TodoType, type TodoId } from './types'

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
  const [filterSelected, setFilterSeelcted] = useState<FilterValue>(TODO_FILTERS.ALL)

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSeelcted(filter)
  }

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount
  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  return (
    <div className='todoapp'>
      <Todos
        todos={filteredTodos}
        onRemoveTodo={handleRemove}
        onToogleCompleted={handleCompleted} />
      <Footer
        activeCount={activeCount}
        filterSelected={filterSelected}
        handleFilterChange={handleFilterChange}
        onClearCompleted={() => {}}
        completedCount={completedCount}
      />
    </div>
  )
}

export default App
