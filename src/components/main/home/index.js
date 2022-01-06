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
      <S.Img>
          <img src ={imghome.url}/>
        </S.Img>
        <S.BoxTtitle>
          <h1>{titlehome}</h1>
          <p>{texthome}</p>
        <button>{btnreserve}</button>
        </S.BoxTtitle>
      
      </S.Container>
      <S.Section>
        <h3>Favoritos da Galera</h3>
      </S.Section>
      
    </S.Background>
  );
};

export default Home;
