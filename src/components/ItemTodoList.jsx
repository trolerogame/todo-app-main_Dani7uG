import React from 'react'
import {Item,ContaintText} from '../styles/styleItem'
import { Chekbox } from '../styles/styleForm'
import { BsCheck } from "react-icons/bs";
const ItemTodoList = ({item,i,deleteItem,darkMode,checkItem}) => {
    const handleDelete = () => 
        deleteItem(i)

    const handleChecked = () => 
        checkItem(!item.check,i)
    
    return (
        <Item check={item.check} darkMode={darkMode}>
            <ContaintText>
                <Chekbox check={item.check} onClick={handleChecked}>
                    <BsCheck size='20px' className='check'/>
                </Chekbox>
                <p title={item.value} className="item-text">
                    {item.value.length < 40 ? item.value : `${item.value.slice(0,50)}...` }
                </p>
            </ContaintText>
            <div className="delete" onClick={handleDelete}>
                <span className="span one"/>
                <span className="span two"/>
            </div>
        </Item>
    )
}

export default ItemTodoList
