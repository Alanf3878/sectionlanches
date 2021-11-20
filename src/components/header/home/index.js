import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import * as S from "./style";

const Home = () => {
  const data = useStaticQuery(graphql`
    query {
      alldata {
        headers {
          imghome {
            url
          }
          titlehome
          btnreserve
          texthome
        }
      }
    }
  `);
  const { imghome, btnreserve, titlehome, texthome } = data.alldata.headers[0];

  return (
    <S.Background >
      <S.Container>
        <S.BoxTtitle>
          <S.Title>{titlehome}</S.Title>
          <S.Text>{texthome}</S.Text>
          <S.Btn>{btnreserve}</S.Btn>
        </S.BoxTtitle>
        <S.Img>
          <img src ={imghome.url}/>
        </S.Img>
      </S.Container>
    </S.Background>
  );
};

export default Home;
