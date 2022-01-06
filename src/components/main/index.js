import React from "react";
import * as S from "./style";
import Card from "./card";
import Section from "./section";
import Container from "./container";
import Home from "./home";

const Main = () => {
  return (
    <S.Main>
       <Home/>
     
     
      <Card />
      <Section />
      {/* <S.Line /> */}
      
      <Container/>
    </S.Main>
  );
};

export default Main;
