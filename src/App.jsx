import React,{useState} from 'react'
import {Body,GlobalStyle} from './styles/styleAll'
import DarkLightMode from './components/DarkLightMode'
function App() {
  const [darkMode,setDarkMode] = useState(true)
  const [todo,setTodo] = useState(JSON.parse(window.localStorage.getItem('todo')) || [])
  return (
    <Body>
      <GlobalStyle/>
      <DarkLightMode darkMode={darkMode} setDarkMode={setDarkMode}/>
    </Body>
  )
}

export default App
