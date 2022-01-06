import styled from "styled-components";

export const Nav = styled.div`
  max-width: 1333px;
  margin: 0 auto;

  height: 9rem;
  opacity: 0.9;
  box-shadow: rgb(0 0 0 / 10%) 0px 3px 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #cdcdcb;
  font-size: 16px ;

  a {
    color: #000;
    &:hover {
      color: #f8ca11;
      cursor: pointer;
    }
  }
`;
export const Logo = styled.img`
  width: 130px;
  position: relative;
  top: 0.1rem;
`;
