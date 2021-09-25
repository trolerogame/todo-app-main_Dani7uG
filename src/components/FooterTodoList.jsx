import React from 'react'
import { FooterItem,TaskLeft,ClearComplete } from '../styles/styleFooter'
const FooterTodoList = ({darkMode,todos}) => {
    return (
        <FooterItem darkMode={darkMode}>
            <TaskLeft>{todos} items left</TaskLeft>
            <ClearComplete>Clear Completed</ClearComplete>
        </FooterItem>
    )
}

export default FooterTodoList
