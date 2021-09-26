import React from 'react'
import {saveLocalStorage} from '../functions/saveLocalStorage'
import { FooterItem,TaskLeft,ClearComplete,BarFilter } from '../styles/styleFooter'
const FooterTodoList = ({darkMode,todos,setTodo}) => {
    const handleClearComplete = () => {
        const newTodo = todos.filter(item => item.check !== true)
        setTodo(newTodo)
        saveLocalStorage(newTodo)
    }
    const all = () => setTodo(JSON.parse(localStorage.getItem('todo')))
    const complete = () => {
        all()
        setTodo(todos.filter(item => item.check === true))
    }
    const activate = () => {
        all()
        setTodo(todos.filter(item => item.check === false))
    }
    return (
        <FooterItem darkMode={darkMode}>
            <TaskLeft darkMode={darkMode} >{todos.length} items left</TaskLeft>
            <BarFilter darkMode={darkMode} >
                <button className='filter' onClick={all} >All</button>
                <button className='filter' onClick={activate}>Activate</button>
                <button className='filter' onClick={complete}>Completed</button>
            </BarFilter>
            <ClearComplete onClick={handleClearComplete}>Clear Completed</ClearComplete>
        </FooterItem>
    )
}

export default FooterTodoList
