import React from 'react'
import {saveLocalStorage} from '../functions/saveLocalStorage'
import { FooterItem,TaskLeft,ClearComplete,BarFilter } from '../styles/styleFooter'
import {getLocalStorage as getTodo} from '../functions/getLocalStorage'
const FooterTodoList = ({darkMode,todos,setTodo}) => {
    const handleClearComplete = () => {
        const newTodo = todos.filter(item => item.check !== true)
        setTodo(newTodo)
        saveLocalStorage(newTodo)
    }
    const filteredTodo = bool => 
        setTodo(getTodo().filter(item => item.check === bool))
    const all = () => setTodo(getLocalStorage())
    const complete = () => filteredTodo(true)
    const activate = () => filteredTodo(false)
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
