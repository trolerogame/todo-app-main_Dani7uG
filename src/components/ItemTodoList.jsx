import React from 'react'
import {Item} from '../styles/styleItem'
const ItemTodoList = ({item,i}) => {
    return (
        <Item>
            {item}
            <button className="delete">
                <span className="span 1"/>
                <span className="span 2"/>
            </button>
        </Item>
    )
}

export default ItemTodoList
