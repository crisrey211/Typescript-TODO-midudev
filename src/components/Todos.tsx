import { type ListOfTodos } from "../types"

interface Props {
    todos: ListOfTodos
}

export const Todos: React.FC<Props> = ({todos})=>{
    return(
        <ul>
            {todos.map((todo)=><li>{todo.title}</li>)}
        </ul>
    )
}