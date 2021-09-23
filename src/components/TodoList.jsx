import React from 'react'
import ItemTodoList from './ItemTodoList'
const TodoList = ({todo}) => {
    return (
        <div>
            {todo.map((item,i) => <ItemTodoList key={i} item={item} i={i}/>)}
        </div>
    )
}

export default TodoList
