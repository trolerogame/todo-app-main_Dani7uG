import styled from 'styled-components';


export const Item = styled.div`
    width:100%;
    height:50px;
    background:hsl(235, 24%, 19%);
    color:hsl(234, 39%, 85%);
    border-bottom:.5px solid #999;
    font-size: 18px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding:10px 0;
    position:relative;
    .span{
        width:20px;
        height: 2px;
        background-color:hsl(234, 39%, 85%);
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
    .delete{
        padding:10px;
        margin:10px;
        opacity: 0;
        cursor: pointer;
    }
    .item-text{
        padding:0 20px;
    }
    &:first-child{
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }  
    &:hover > .delete{
        opacity: 1;
    } 
`