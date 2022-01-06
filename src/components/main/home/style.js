import styled from "styled-components";

export const Background = styled.div`
padding-top: 4rem;
  height: 100%;
`;

export const Img = styled.div`
  width: 500px;
  position: absolute;
  left: 90px;
  @media (max-width: 1333px) {
    left: 25px;
  }
  
  @media (max-width: 1000px) {
    width: 450px;
    left: -35px;
  }
  @media (max-width: 700px) {
    width: 350px;
    
  }
 
  img {
    width: 100%;
  }
`;

export const Container = styled.div`
  max-width: 1333px;
  margin: 0 auto;
  margin-bottom: 1.5rem;
  height: 50vh;
  display: flex;
  background-color: #353433;
  align-items: center;
  justify-content: right;
  padding-right: 3rem;

  box-shadow: rgb(0 0 0 / 100%) 0px 3px 10px;
  position: relative;
  @media (max-width: 900px) {
    padding: 0;
  }
`;

export const BoxTtitle = styled.div`
  width: 600px;
  padding: 5px;
  
  text-align: center;

  @media (max-width: 1060px) {
    width: 450px;

  }
  @media (max-width: 800px) {
    width: 350px;

  }
  

  p {
    height: 100%;
    color: yellow;
    @media (max-width: 1150px) {
    font-size: 13px;
    padding: 30px;

  }
    
  }

  h1 {
    font-size: 120px;
    color: yellow;
    @media (max-width: 1150px) {
      font-size: 90px;

  }
  @media (max-width: 800px) {
    font-size: 50px;

  }
  }

  button {
    width: 80%;
    height: 55px;
    background-color: #353433;
    border: none;
    color: #fff;
    transition: 2s;
    &:hover {
      background-color: #f8ca11;
      cursor: pointer;
      transition: 4s;
      width: 100%;
    }

    @media (max-width: 1060px) {
      width:50%;

  }
  }
 
`;
export const Section = styled.div` 
width: 100%;
height: 120px;
display: flex;


justify-content: center;
align-items: center;
background-color: #EEAD2D;
max-width: 1333px;

  margin: 0 auto;
h3{
  color:  #fff;
  font-size: 50px;
}
  
`
