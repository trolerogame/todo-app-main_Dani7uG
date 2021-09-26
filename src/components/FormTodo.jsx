import React,{useState} from 'react'
import {Form,Input,Chekbox} from '../styles/styleForm'
import { BsCheck } from "react-icons/bs";
const FormTodo = ({reference,todo,setTodo,darkMode}) => {
    const [check,setCheck] = useState(false)
    const handleSubmitForm = e => {
        e.preventDefault();
        let text = reference.current.value
        if(!text) return;
        let newTodo = [...todo,{check:false,value:text.trim()}]
        setTodo(newTodo)
        window.localStorage.setItem('todo', JSON.stringify(newTodo))
        reference.current.value = ''
    }
    return (
        <Form darkMode={darkMode} onSubmit={handleSubmitForm}>
            <Chekbox check={check} onClick={() => setCheck(!check)}>
                <BsCheck size='20px' className='check'/>
            </Chekbox>
            <Input type="text" placeholder="Create a new todo..." darkMode={darkMode} ref={reference}/>
            
        </Form>
    )
}

export default FormTodo
