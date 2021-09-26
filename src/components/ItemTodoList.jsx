import React,{useState} from 'react'
import {Item,ContaintText} from '../styles/styleItem'
import { Chekbox } from '../styles/styleForm'
import { BsCheck } from "react-icons/bs";
const ItemTodoList = ({item,i,deleteItem,darkMode,checkItem,nextItem}) => {
    const [check,setCheck] = useState(item.check)
    const handleDelete = () => {
        // setCheck(nextItem.check)
        deleteItem(i)
    }
    const handleChecked = () => {
        setCheck(!check)
        checkItem(!check,i)
    }
    return (
        <Item check={check} darkMode={darkMode}>
            <ContaintText>
                <Chekbox check={check} onClick={handleChecked}>
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
