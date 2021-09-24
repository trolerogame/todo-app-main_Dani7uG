import React from 'react'
import { ContainerDarkMode,Title } from '../styles/styleDarkMode'
import { BsFillBrightnessLowFill,BsMoon } from "react-icons/bs";
const DarkLightMode = React.memo(({darkMode,setDarkMode}) => {
    let Icon = darkMode ? BsFillBrightnessLowFill : BsMoon
    return (
        <ContainerDarkMode>
            <Title>TODO</Title>
            <Icon size='32px' onClick={() => setDarkMode(!darkMode)} className='darkMode'/>
        </ContainerDarkMode>
    )
})

export default DarkLightMode
