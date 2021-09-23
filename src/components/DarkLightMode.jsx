import React from 'react'
import { ContainerDarkMode } from '../styles/styleDarkMode'
import { BsFillBrightnessLowFill,BsMoon } from "react-icons/bs";
const DarkLightMode = ({darkMode,setDarkMode}) => {
    let Icon = darkMode ? BsFillBrightnessLowFill : BsMoon
    return (
        <ContainerDarkMode>
            <h1>TODO</h1>
            <Icon size='32px' onClick={() => setDarkMode(!darkMode)} className='darkMode'/>
        </ContainerDarkMode>
    )
}

export default DarkLightMode
