import React from 'react'
import {Form,Input,Chekbox} from '../styles/styleForm'
const FormTodo = ({reference,todo,setTodo}) => {
    const handleSubmitForm = e => {
        e.preventDefault();
        let text = reference.current.value
        if(text){
            let newTodo = [...todo,text.trim()]
            setTodo(newTodo)
            window.localStorage.setItem('todo', JSON.stringify(newTodo))
            reference.current.value = ''
        }
    }
    return (
        <Form onSubmit={handleSubmitForm}>
            <Input type="text" placeholder="Create a new todo..." ref={reference}/>
            {/* <Chekbox type='submit'/> */}
        </Form>
    )
}

export default FormTodo
