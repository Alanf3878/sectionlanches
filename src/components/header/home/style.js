import styled from "styled-components";

export const Background = styled.div`
  background-image: url(${(props) => props.back});
  background-size: cover;
  background-size: 100%;
  background-repeat: no-repeat;
  height: 500px;
  background-position-y: center;
  box-shadow: rgb(0 0 0 / 80%) 0px 3px 10px;
`;
export const Title = styled.h1`
  color: #fff;
  font-size: 120px;
`;
export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  padding-top: 4rem;
`;
export const Text = styled.p`
  color: #fff;
`;
export const BoxParaghp = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const BoxTtitle = styled.div`
  width: 500px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const Btn = styled.button`
  width: 150px;
  height: 55px;
  background-color: #353433;
  border: none;
  color: #fff;
  &:hover {
    background-color: #f8ca11;
    cursor: pointer;
  }
`;
