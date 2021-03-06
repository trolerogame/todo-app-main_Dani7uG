import React,{useState,useRef} from 'react'
import {Body,GlobalStyle,ContainerTodo,ContainerList} from './styles/styleAll'
import DarkLightMode from './components/DarkLightMode'
import FormTodo from './components/FormTodo'
import TodoList from './components/TodoList'
import FooterTodoList from './components/FooterTodoList'

function App() {
  const [darkMode,setDarkMode] = useState(true)
  const [todo,setTodo] = useState(JSON.parse(window.localStorage.getItem('todo')) || [])
  const ref = useRef(null)
  return (
    <Body darkMode={darkMode}>
      <GlobalStyle darkMode={darkMode}/>
      <ContainerTodo>
        <DarkLightMode darkMode={darkMode} setDarkMode={setDarkMode}/>
        <FormTodo darkMode={darkMode} reference={ref} todo={todo} setTodo={setTodo}/>
        <ContainerList>
          <TodoList darkMode={darkMode} todo={todo} setTodo={setTodo}/>
          <FooterTodoList darkMode={darkMode} todos={todo} setTodo={setTodo}/>
        </ContainerList>
      </ContainerTodo>
    </Body>
  )
}

export default App
