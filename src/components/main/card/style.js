import styled from "styled-components";

export const Img = styled.img`
  width: 200px;
  height: 150px;
  box-shadow: rgb(0 0 0 / 50%) 0px 3px 10px;
`;
export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  flex-wrap: wrap;
  background-color: #cdcdcb;
`;

export const Foodbox = styled.div`
  width: 20%;
  font-size: 25px;
  height: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  box-shadow: rgb(0 0 0 / 30%) 0px 20px 10px;
`;

export const Btn = styled.button`
  width: 150px;
  height: 50px;
  background-color: #f8ca11;
  box-shadow: rgb(0 0 0 / 10%) 0px 3px 5px;
  border: none;
  color: #fff;
  &:hover {
    background-color: #353433;
    cursor: pointer;
  }
`;
