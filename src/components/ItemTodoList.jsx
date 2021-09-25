import React,{useState} from 'react'
import {Item,ContaintText} from '../styles/styleItem'
import { Chekbox } from '../styles/styleForm'
import { BsCheck } from "react-icons/bs";
const ItemTodoList = ({item,i,deleteItem,darkMode,checkItem}) => {
    const [check,setCheck] = useState(item.check)
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
                <p className="item-text">{item.value}</p>
            </ContaintText>
            <div className="delete" onClick={() => deleteItem(i)}>
                <span className="span one"/>
                <span className="span two"/>
            </div>
        </Item>
    )
}

export default ItemTodoList
