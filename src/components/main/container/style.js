import styled from "styled-components";

export const Container = styled.div`
background-image: url(${props => props.back});
background-repeat: repeat;
  background-size: 20%;
width: 100% ;
height: 60vh;
display: flex;
align-items: center;
justify-content: space-EVENLY;
flex-wrap: wrap;


`
export const Img = styled.img`
width: 320px;
height: 200px;
`

export const Boxcontainer = styled.div`
width: 35%;
height: 80%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
background-color: #EEAD2D;
padding: 10px 0.2em 0 0.6em;
  border-radius: 10px;
box-shadow: rgb(0 0 0 / 30%) 0px 20px 10px;

p {
  color: #fff;
  text-align: center;
}



`
export const Btn = styled.button`
  width: 300px;
  height: 55px;
  background-color: #353433;
  border: none;
  color: #fff;
  padding: 10px 0.2em 0 0.6em;
  border-radius: 50px;
  
 
  transition: 5s;
  &:hover {
    background-color:  #EEAD2D;
    cursor: pointer;
    transition: 5s;
  }
`;

export const Title = styled.div`
width: 100%;
height: 10vh;
display: flex;
justify-content: center;
align-items: center;
background-image: linear-gradient( #000000, #353433);

h2{
    color:#EEAD2D;
    font-size: 50px;
   
}

`