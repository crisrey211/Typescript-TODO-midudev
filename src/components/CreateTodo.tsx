import * as React from 'react'
import { useState } from 'react'
import { type TodoTitle } from '../types'

interface Props {
  saveTodo: ({ title }: TodoTitle) => void
}

export const CreateTodo: React.FC<Props> = ({ saveTodo }) => {
  const [inputValue, setInputvalue] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    saveTodo({ title: inputValue })
    setInputvalue('')
  }

  return (
      <form onSubmit={handleSubmit}>
          <input
              className='new-todo'
              value={inputValue}
              onChange={(event) => {
                setInputvalue(event.target.value)
              }}
            placeholder={'¿Qué quieres hacer?'}
          autoFocus/>
      </form>
  )
}
