import styled from "styled-components";

export const Img = styled.img`
  width: 100%;
`;
export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  flex-wrap: wrap;
  background-image: url(${(props) => props.back});
  background-repeat: repeat;
  background-size: 15%;
`;

export const Foodbox = styled.div`
  width: 240px;
  font-size: 25px;
  height: 370px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  background-image: linear-gradient( #000000, #353433);
  border-radius: 40px;
  padding: 60px 0px 40px 0px;
  box-shadow: rgb(0 0 0 / 65%) 0px 20px 10px;
  margin-bottom: 1rem;
  p{
    color: #fff;
  }
`;

export const Btn = styled.button`
  width: 150px;
  height: 20px;
  background-color:#EEAD2D;
  box-shadow: rgb(0 0 0 / 10%) 0px 3px 5px;
  border: none;
  color: #fff;
  padding: 10px 0.2em 2em;
  border-radius: 50px;
  transition: 2s;
  &:hover {
    background-color: #353433;
    cursor: pointer;
    transition: 1s;
  }
 
  transition: 2s;
  &:hover {
    background-color: #353433;
    cursor: pointer;
    transition: 1s;
  }
`;

export const Figure = styled.figure`
width: 50%;
`

