import styled from 'styled-components';

export const FooterItem = styled.div`
    width:100%;
    height:50px;
    border-bottom-right-radius:5px;
    border-bottom-left-radius:5px;
    background:${props => props.darkMode ? 'hsl(235, 24%, 19%)' : 'hsl(236, 33%, 92%)'};
    padding:10px 0;
    display: flex;
    align-items: center;
    justify-content:space-between;
    position:relativo;
`

export const TaskLeft = styled.p`
    color:hsl(234, 11%, 52%);
    padding:0 15px; 
`
export const ClearComplete = styled.button`
    background:none;
    border:none;
    outline:none;
    cursor: pointer;
    color:hsl(234, 11%, 52%);
    padding:15px 15px;
`

export const BarFilter = styled.div`
    color:hsl(234,11%,52%);
    .filter{
        padding:0 10px;
    }
    @media (max-width:700px){
        position:absoluto;
        bottom:-40px;
        left:0;
        right:0;
        width:100%;
        display:flex;
        justify-content:space-around;
        height:50px; 
    }
`
