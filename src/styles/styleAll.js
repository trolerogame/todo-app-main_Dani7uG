import styled,{createGlobalStyle,css} from 'styled-components';
import bgDesktopDarkMode from '../../public/bg-desktop-dark.jpg'
import bgMovileDarkMode from '../../public/bg-mobile-dark.jpg'
import bgDesktopLightMode from '../../public/bg-desktop-light.jpg'
import bgMovileLightMode from '../../public/bg-mobile-light.jpg'
export const Body = styled.main`
    background:
        ${props => props.darkMode ? `hsl(235, 21%, 11%) url(${bgDesktopDarkMode})` : `hsl(0, 0%, 3%) url(${bgDesktopLightMode})`} no-repeat;
    background-size: 100% 40%;
    background-position: cover;
    height: 100vh;
    display: grid;
    place-items: center center;

    @media(max-width:780px){
        background-image:url(${props => props.darkMode ? bgMovileDarkMode : bgMovileLightMode});
        background-size: 100% 35%;
    }
    padding:0 35px;
`
export const ContainerTodo = styled.div`
    width:100%;
    max-width:750px;
`

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap');
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Josefin Sans', sans-serif;
    }
`;