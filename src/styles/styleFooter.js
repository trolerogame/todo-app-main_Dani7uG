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
    position:relative;
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
    display:flex;
    justify-content:center;
    align-items:center;
    .filter{
        cursor:pointer;
        background:none;
        border:none;
        outline:none;
        padding:0 20px;
        color:hsl(234,11%,52%);
        font-size: 18px;
        font-weight: 700;
    }
    @media (max-width:700px){
        background:${props => props.darkMode ? 'hsl(235, 24%, 19%)' : 'hsl(236, 33%, 92%)'};
        border-radius:5px;
        position:absolute;
        bottom:-70px;
        left:0;
        right:0;
        height:50px; 
        
        .filter{
            padding:10px;
            margin:0;
        }
    }
`
