import styled,{css} from 'styled-components';


export const Form = styled.form`
    width:100%;
    height:50px;
    border-radius:5px;
    background:${props => props.darkMode ? 'hsl(235, 24%, 19%)' : 'hsl(236, 33%, 92%)'};
    margin-bottom:20px;
    padding:10px 0;
    display: flex;
    align-items: center;
`

export const Input = styled.input`
    border:none;
    outline:none;
    width: 100%;
    height:50px;
    background:none;
    color:${props => props.darkMode ? 'hsl(234, 39%, 85%)' : '#555'};
    font-weight: 700;
    font-size:18px;
`

export const Chekbox = styled.button`
    width:25px;
    height: 25px;
    border-radius:50%;
    outline: none;
    background:${props => props.check ? `linear-gradient(hsl(192, 100%, 67%) , hsl(280, 87%, 65%))` : 'none'};
    border:1px solid #444;
    margin:0 10px;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;
    transition:all 4s ease;
    .check{
        opacity:${props => props.check ? 1 : 0};
        color:#fef;
    }
`