import styled from "styled-components";

export const Line = styled.div`
width: 10px;
height: 5px;
background-color: gold;
@keyframes line {
    0% {
      transform: translateX(10%);
      width: 500px;
    }
    50% {
        transform: translateX(50%);
        width: 850px;
    }
    100% {
      transform: translateX(100%);
      
    }
  }
 
 animation: line 2s linear 1s infinite normal both;
`

export const Main = styled.div`
height: 45vh;
width: 100%;

`