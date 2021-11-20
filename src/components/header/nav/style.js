import styled from "styled-components";

export const Nav = styled.div`
  width: 100%;
  height: 9rem;
  background-color: #000;
  opacity: 0.9;
  box-shadow: rgb(0 0 0 / 10%) 0px 3px 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #cdcdcb;
  font-size: 16px ;

  a {
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
