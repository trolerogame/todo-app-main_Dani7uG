import styled from 'styled-components';


export const Item = styled.div`
    width:100%;
    height:50px;
    background:${props => props.darkMode ? 'hsl(235, 24%, 19%)' : 'hsl(0, 0%, 98%)'};
    color:${props => 
        props.check 
            ? 
            (props.darkMode ? `#555` : '#bbb') 
            : 
            (props.darkMode ? `hsl(234, 39%, 85%)` : "#555")
    };
    border-bottom:.5px solid ${props => props.darkMode ? '#555' : '#b9b9b9'};
    font-size: 18px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding:10px 0;
    position:relative;
    .span{
        width:20px;
        height: 1px;
        background-color:${props => props.darkMode ? 'hsl(0, 0%, 98%)' : 'hsl(235, 24%, 19%)'};
        position: absolute;
        right: 0;
        margin:0 10px;
    }
    .one{
        transform: rotate(45deg);
        
    }
    .two{
        transform: rotate(-45deg);
    }
    .item-text{
        text-decoration: ${props => props.check ? 'line-through' : 'none'};
    }
    .delete{
        padding:10px;
        margin:10px;
        opacity: 0;
        cursor: pointer;
    }
    &:first-child{
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }  
    &:hover > .delete{
        opacity: 1;
    } 
`

export const ContaintText = styled.div`
    display:flex;
    align-items: center;
`