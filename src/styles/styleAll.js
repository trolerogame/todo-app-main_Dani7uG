import styled,{createGlobalStyle} from 'styled-components';
import bgDesktopDarkMode from '../../public/bg-desktop-dark.jpg'
import bgMovileDarkMode from '../../public/bg-mobile-dark.jpg'
import bgDesktopLightMode from '../../public/bg-desktop-light.jpg'
import bgMovileLightMode from '../../public/bg-mobile-light.jpg'
export const Body = styled.main`
    background:
        url(${props => props.darkMode ? bgDesktopDarkMode : bgDesktopLightMode}) no-repeat;
    background-size: 100% 40%;
    background-position: cover;
    height: 100vh;
    display: flex;
    justify-content:center;
    @media(max-width:780px){
        background-image:url(${props => props.darkMode ? bgMovileDarkMode : bgMovileLightMode});
        background-size: 100% 35%;
    }
    padding:0 35px 20px 35px;
`
export const ContainerTodo = styled.div`
    width:100%;
    max-width:750px;
    margin-top:80px;
`

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        height: 100vh;
        background-color:${props => props.darkMode ? `hsl(235, 21%, 11%)` : `hsl(0, 0%, 98%)`};
        box-sizing: border-box;
        font-family: 'Josefin Sans', sans-serif;
    }
`;