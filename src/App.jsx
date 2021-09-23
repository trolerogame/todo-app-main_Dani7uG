import React,{useState} from 'react'
import {Body,GlobalStyle,ContainerTodo} from './styles/styleAll'
import DarkLightMode from './components/DarkLightMode'
function App() {
  const [darkMode,setDarkMode] = useState(true)
  const [todo,setTodo] = useState(JSON.parse(window.localStorage.getItem('todo')) || [])
  return (
    <Body darkMode={darkMode}>
      <ContainerTodo>
        <GlobalStyle/>
        <DarkLightMode darkMode={darkMode} setDarkMode={setDarkMode}/>
      </ContainerTodo>
    </Body>
  )
}

export default App
