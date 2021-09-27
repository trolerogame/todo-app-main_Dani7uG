var e=Object.defineProperty,t=Object.defineProperties,o=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,i=(t,o,r)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r;import{s as d,W as l,R as s,B as c,a as p,r as m,b as u,c as g}from"./vendor.d56fc526.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const x=d.main`
    background:
        url(${e=>e.darkMode?"/todo-app-main_Dani7uG/assets/bg-desktop-dark.cf72eaad.jpg":"/todo-app-main_Dani7uG/assets/bg-desktop-light.c99caf89.jpg"}) no-repeat;
    background-size: 100% 40%;
    background-position: cover;
    height: 100vh;
    display: flex;
    justify-content:center;
    @media(max-width:780px){
        background-image:url(${e=>e.darkMode?"/todo-app-main_Dani7uG/assets/bg-mobile-dark.0b3e4071.jpg":"/todo-app-main_Dani7uG/assets/bg-mobile-light.df636158.jpg"});
        background-size: 100% 35%;
    }
    padding:0 35px 20px 35px;
`,h=d.div`
    width:100%;
    max-width:750px;
    margin-top:80px;
`,b=d.div`
    box-shadow: 1px 2px 24px -1px rgba(60,60,60,0.75);
    -webkit-box-shadow: 1px 2px 24px -1px rgba(60,60,60,0.75);
    -moz-box-shadow: 1px 2px 24px -1px rgba(60,60,60,0.75);
`,f=l`
    body {
        margin: 0;
        padding: 0;
        height: 100vh;
        background-color:${e=>e.darkMode?"hsl(235, 21%, 11%)":"hsl(0, 0%, 98%)"};
        box-sizing: border-box;
        font-family: 'Josefin Sans', sans-serif;
    }
`,k=d.div`
    display:flex;
    justify-content:space-between;
    align-items: center;
    margin-bottom:20px;
    height:50px;
    .darkMode{
        color:#fff;
        cursor:pointer;
        padding:5px;
    }
`,y=d.h1`
    color:#fff;
    letter-spacing: 10px;
`,E=s.memo((({darkMode:e,setDarkMode:t})=>{let o=e?c:p;return s.createElement(k,null,s.createElement(y,null,"TODO"),s.createElement(o,{size:"32px",onClick:()=>t(!e),className:"darkMode"}))})),M=d.form`
    width:100%;
    height:50px;
    border-radius:5px;
    background:${e=>e.darkMode?"hsl(235, 24%, 19%)":"hsl(236, 33%, 92%)"};
    margin-bottom:20px;
    padding:10px 0;
    display: flex;
    align-items: center;
`,w=d.input`
    border:none;
    outline:none;
    width: 100%;
    height:50px;
    background:none;
    color:${e=>e.darkMode?"hsl(234, 39%, 85%)":"#555"};
    font-weight: 700;
    font-size:18px;
`,v=d.button`
    width:25px;
    height: 25px;
    border-radius:50%;
    outline: none;
    background:${e=>e.check?"linear-gradient(hsl(192, 100%, 67%) , hsl(280, 87%, 65%))":"none"};
    border:1px solid #444;
    margin:0 10px;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;
    transition:all 4s ease;
    .check{
        opacity:${e=>e.check?1:0};
        color:#fef;
    }
`,j=({reference:e,todo:t,setTodo:o,darkMode:r})=>{const[n,a]=m.exports.useState(!1);return s.createElement(M,{darkMode:r,onSubmit:r=>{r.preventDefault();let n=e.current.value;if(!n)return;let a=[...t,{check:!1,value:n.trim()}];o(a),window.localStorage.setItem("todo",JSON.stringify(a)),e.current.value=""}},s.createElement(v,{check:n,onClick:()=>a(!n)},s.createElement(u,{size:"20px",className:"check"})),s.createElement(w,{type:"text",placeholder:"Create a new todo...",darkMode:r,ref:e}))},N=d.div`
    width:100%;
    height:50px;
    background:${e=>e.darkMode?"hsl(235, 24%, 19%)":"hsl(0, 0%, 98%)"};
    color:${e=>e.check?e.darkMode?"#555":"#bbb":e.darkMode?"hsl(234, 39%, 85%)":"#555"};
    border-bottom:.5px solid ${e=>e.darkMode?"#555":"#b9b9b9"};
    font-size: 18px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding:10px 0;
    position:relative;
    .span{
        width:20px;
        height: 1px;
        background-color:${e=>e.darkMode?"hsl(0, 0%, 98%)":"hsl(235, 24%, 19%)"};
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
        text-decoration: ${e=>e.check?"line-through":"none"};
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
`,S=d.div`
    display:flex;
    align-items: center;
`,O=({item:e,i:t,deleteItem:o,darkMode:r,checkItem:n})=>{const[a,i]=m.exports.useState(e.check);return s.createElement(N,{check:a,darkMode:r},s.createElement(S,null,s.createElement(v,{check:a,onClick:()=>{i(!a),n(!a,t,e)}},s.createElement(u,{size:"20px",className:"check"})),s.createElement("p",{title:e.value,className:"item-text"},e.value.length<40?e.value:`${e.value.slice(0,50)}...`)),s.createElement("div",{className:"delete",onClick:()=>o(t)},s.createElement("span",{className:"span one"}),s.createElement("span",{className:"span two"})))},$=e=>localStorage.setItem("todo",JSON.stringify(e)),C=({todo:e,setTodo:d,darkMode:l})=>{const c=t=>{const o=e.filter(((e,o)=>o!==t));d(o),$(o)},p=(d,l,s)=>{var c;e[l]=(c=((e,t)=>{for(var o in t||(t={}))n.call(t,o)&&i(e,o,t[o]);if(r)for(var o of r(t))a.call(t,o)&&i(e,o,t[o]);return e})({},e[l]),t(c,o({check:d}))),$(e)};return s.createElement("div",null,e.map(((t,o)=>s.createElement(O,{key:o,darkMode:l,item:t,i:o,deleteItem:c,checkItem:p,nextItem:e[o+1]||!1}))))},I=d.div`
    width:100%;
    height:50px;
    border-bottom-right-radius:5px;
    border-bottom-left-radius:5px;
    background:${e=>e.darkMode?"hsl(235, 24%, 19%)":"hsl(0, 0%, 98%)"};
    padding:10px 0;
    display: flex;
    align-items: center;
    justify-content:space-between;
    position:relative;
`,z=d.p`
    color:hsl(234, 11%, 52%);
    padding:0 15px; 
`,D=d.button`
    background:none;
    border:none;
    outline:none;
    cursor: pointer;
    color:hsl(234, 11%, 52%);
    padding:15px 15px;
`,T=d.div`
    display:flex;
    justify-content:center;
    align-items:center;
    box-shadow: 1px 1px 14px -1px rgba(60,60,60,0.75);
    -webkit-box-shadow: 1px 1px 14px -1px rgba(60,60,60,0.75);
    -moz-box-shadow: 1px 1px 14px -1px rgba(60,60,60,0.75);
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
        background:${e=>e.darkMode?"hsl(235, 24%, 19%)":"hsl(0, 0, 92%)"};
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
`,P=()=>JSON.parse(localStorage.getItem("todo")),J=({darkMode:e,todos:t,setTodo:o})=>{const r=e=>o(P().filter((t=>t.check===e)));return s.createElement(I,{darkMode:e},s.createElement(z,{darkMode:e},t.length," items left"),s.createElement(T,{darkMode:e},s.createElement("button",{className:"filter",onClick:()=>o(P())},"All"),s.createElement("button",{className:"filter",onClick:()=>r(!1)},"Activate"),s.createElement("button",{className:"filter",onClick:()=>r(!0)},"Completed")),s.createElement(D,{onClick:()=>{const e=P().filter((e=>!0!==e.check));o(t.filter((e=>!0!==e.check))),$(e)}},"Clear Completed"))};function G(){const[e,t]=m.exports.useState(!0),[o,r]=m.exports.useState(JSON.parse(window.localStorage.getItem("todo"))||[]),n=m.exports.useRef(null);return s.createElement(x,{darkMode:e},s.createElement(f,{darkMode:e}),s.createElement(h,null,s.createElement(E,{darkMode:e,setDarkMode:t}),s.createElement(j,{darkMode:e,reference:n,todo:o,setTodo:r}),s.createElement(b,null,s.createElement(C,{darkMode:e,todo:o,setTodo:r}),s.createElement(J,{darkMode:e,todos:o,setTodo:r}))))}g.render(s.createElement(s.StrictMode,null,s.createElement(G,null)),document.getElementById("root"));