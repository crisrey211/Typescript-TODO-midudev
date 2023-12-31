import * as React from 'react'
import { type TodoId, type Todo as TodoType } from '../types'

interface Props extends TodoType {
  onRemoveTodo: ({ id }: TodoId) => void
  onToogleCompleted: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onToogleCompleted }) => {
  const handleChangedCheckbox = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onToogleCompleted({ id, completed: event.target.checked })
  }

  return (
        <div className='view'>
            <input
              className='toggle'
              checked={completed}
              type='checkbox'
              onChange={handleChangedCheckbox}
          />
          <label>{title}</label>
          <button
              className='destroy'
              onClick={() => { onRemoveTodo({ id }) }}/>
        </div>
  )
}
