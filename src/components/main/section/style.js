import styled from "styled-components";
export const Background = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  align-items: center;
`;
export const Container = styled.div`
  color: #fff;
  max-width: 1333px;
  width: 100%;
  margin: 0 auto;

  height: 50vh;
  display: flex;
  justify-content: center;
  background-color: #353433;
  box-shadow: rgb(0 0 0 / 100%) 0px 3px 10px;
  position: relative;
  @media (max-width: 1300px) {
    justify-content: flex-start;
    padding-left: 4rem;
  }
  @media (max-width: 880px) {
    padding: 0;
  }
`;

export const Title = styled.div`
  width: 100%;
  text-align: center;
  color: yellow;

  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 100px;

    @media (max-width: 1020px) {
      font-size: 70px;
    }
    @media (max-width: 880px) {
      font-size: 50px;
    }
    @media (max-width: 500px) {
      font-size: 20px;
    }
  }
`;
export const Paragraph = styled.div`
  width: 600px;

  display: flex;
  flex-wrap: wrap;
  text-align: center;
  color: gold;  
  padding: 2rem;
  border-radius: 40px;
  color: yellow;

  @media (max-width: 1020px) {
      width:500px;
      height: 80%;

  }
  @media (max-width: 880px) {
      width:350px;
     
      height: 80%;

  }
  @media (max-width: 500px) {
      width:290px;
     
      height: 100%;

  }

 

 
   
   


  ul {
    width: 100%;
    font-size: 30px;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  
    align-items: center;
  @media (max-width: 880px) {
    font-size: 18px;

  }
 
  }
`;

export const Img = styled.figure`
  width: 450px;
  position: absolute;
  right: 1px;
  bottom: -190px;

  @media (max-width: 1020px) {
    right: -20px;
    width: 400px;
    bottom: -150px;
  }
  @media (max-width: 700px) {
    right: -10px;
    width: 200px;
    bottom: 50px;
  }

  img {
    width: 100%;
  }
`;
