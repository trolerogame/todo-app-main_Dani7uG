import styled,{createGlobalStyle} from 'styled-components';
import bgDesktopDarkMode from '../../public/bg-desktop-dark.jpg'
import bgMovileDarkMode from '../../public/bg-mobile-dark.jpg'
export const Body = styled.main`
    background:hsl(235, 21%, 11%) url(${bgDesktopDarkMode}) no-repeat;
    background-size: 100% 40%;
    background-position: cover;
    height: 100vh;
    display: grid;
    place-items: center center;
    @media(max-width:780px){
        background-image:url(${bgMovileDarkMode});
        background-size: 100% 35%;
    }
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