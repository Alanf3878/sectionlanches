import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 80vh;
  background-color: #EEAD2D;
  box-shadow: rgb(0 0 0 / 10%) 0px 3px 10px;
  display: flex;
  align-items: center;
`;
export const Container = styled.div`
  color: #fff;
  width: 100%;
  height: 60%;
  display: flex;
  background-color: red;
  box-shadow: rgb(0 0 0 / 100%) 0px 3px 10px;
  justify-content: center;
  padding: 4rem;
`;

export const Title = styled.div`
  font-size: 50px;
  width: 100%;
  text-align: center;
  
`;
export const Paragraph = styled.div`
  max-width: 800px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content:space-around;
  justify-content: center;
  text-align: center;
  color: gold;  
  border-radius: 40px;
  padding: 1rem;
  color: #fff;

  ul {
    width: 100%;
    list-style: none;
    font-size: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    font-size: 40px;
  }
`;

export const Img = styled.figure`


img {
  width: 450px;
  max-height: 1000px;
  
  position: relative;
  bottom: 250px;
}
`