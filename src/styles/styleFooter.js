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