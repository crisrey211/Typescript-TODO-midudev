import { type ListOfTodos } from '../types'

interface Props {
  todos: ListOfTodos
}

export const Todos: React.FC<Props> = ({ todos }) => {
  return (
        <ul>
            {todos.map((todo, i) => <li key={i}>{todo.title}</li>)}
        </ul>
  )
}
