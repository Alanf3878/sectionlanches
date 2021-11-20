import React from "react";
import * as S from "./style";
import Card from "./card";
import Section from "./section";
import Container from "./container";

const Main = () => {
  return (
    <S.Main>
      <S.Line />
      <Card />
      <S.Line />
      <Section />
      <Container/>
    </S.Main>
  );
};

export default Main;
