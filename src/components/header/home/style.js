import styled from "styled-components";

export const Background = styled.div`
  background-color: #000;
  height: 85vh;
`;

export const Img = styled.figure`
  width: 50%;
  box-shadow: rgb(0 0 0 / 80%) 0px 3px 10px;

  img {
    width: auto;
    height: auto;
  }
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 120px;
`;
export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
`;
export const Text = styled.p`
  color: #fff;
`;
export const BoxParaghp = styled.div`

`;

export const BoxTtitle = styled.div`
  width: 40%;
  height: 75%;
  display: flex;
  align-content: space-around;
  text-align: center;
  flex-wrap: wrap;
  padding: 1rem;
`;

export const Btn = styled.button`
  width: 100%;
  height: 55px;
  background-color: #353433;
  border: none;
  color: #fff;
  transition: 2s;
  &:hover {
    background-color: #f8ca11;
    cursor: pointer;
    transition: 4s;
  }
`;
