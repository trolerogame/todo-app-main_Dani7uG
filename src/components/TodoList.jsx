import React from 'react'
import ItemTodoList from './ItemTodoList'
import { saveLocalStorage } from '../functions/saveLocalStorage'
const TodoList = ({ todo, setTodo, darkMode }) => {
  const deleteItem = item => {
    const newItem = todo.filter((it, i) => i !== item)
    setTodo(newItem)
    saveLocalStorage(newItem)
  }
  const checkItem = (check,i) => {
    todo[i] = {...todo[i], check}
    setTodo(todo)
    saveLocalStorage(todo)
  }
  return (
    <div>
      {todo.map((item, i) => (
        <ItemTodoList
          key={i}
          darkMode={darkMode}
          item={item}
          i={i}
          deleteItem={deleteItem}
          checkItem={checkItem}
        />
      ))}
    </div>
  )
}

export default TodoList
