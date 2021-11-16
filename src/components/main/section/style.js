import styled from "styled-components";

export const Background = styled.div`
  background-image: url(${(props) => props.back});
  background-size: 100%;
  width: 100%;
  height: 50vh;
  background-position-y: center;
  box-shadow: rgb(0 0 0 / 100%) 0px 3px 10px;
`;
export const Container = styled.div`
  color: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 4rem;
`;

export const Title = styled.div`
  font-size: 60px;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
`;
export const Paragraph = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;

  ul {
    width: 100%;
    list-style: none;
    font-size: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;
