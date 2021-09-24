import React from 'react'
import ItemTodoList from './ItemTodoList'
const TodoList = ({todo,setTodo}) => {
    const deleteItem = item => {
        const newItem = todo.filter((it,i) => i !== item)
        setTodo(newItem)
        localStorage.setItem('todo',JSON.stringify(newItem))
    }
    return (
        <div>
            {todo.map((item,i) => <ItemTodoList key={i} item={item} i={i} deleteItem={deleteItem}/>)}
        </div>
    )
}

export default TodoList
