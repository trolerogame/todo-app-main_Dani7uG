import React from 'react'
import {Item} from '../styles/styleItem'
const ItemTodoList = ({item,i,deleteItem}) => {
    return (
        <Item>
            <p className="item-text">{item}</p>
            <div className="delete" onClick={() => deleteItem(i)}>
                <span className="span one"/>
                <span className="span two"/>
            </div>
        </Item>
    )
}

export default ItemTodoList
