import React,{useState,useRef} from 'react'
import {Body,GlobalStyle,ContainerTodo} from './styles/styleAll'
import DarkLightMode from './components/DarkLightMode'
import FormTodo from './components/FormTodo'
import TodoList from './components/TodoList'
function App() {
  const [darkMode,setDarkMode] = useState(true)
  const [todo,setTodo] = useState(JSON.parse(window.localStorage.getItem('todo')) || [])
  const ref = useRef(null)
  return (
    <Body darkMode={darkMode}>
      <GlobalStyle darkMode={darkMode}/>
      <ContainerTodo>
        <DarkLightMode darkMode={darkMode} setDarkMode={setDarkMode}/>
        <FormTodo reference={ref} todo={todo} setTodo={setTodo}/>
        <TodoList todo={todo} setTodo={setTodo}/>
      </ContainerTodo>
    </Body>
  )
}

export default App
