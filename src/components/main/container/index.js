import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import * as S from "./style";

const Container = () => {
  const data = useStaticQuery(graphql`
    query {
      alldata {
        mains {
          background {
            url
          }
          titlebackground
          textbackground
          imgbox1 {
            url
          }
          imgbox2 {
            url
          }
          backgroundcard {
            url
          }
        }
      }
    }
  `);

  const { titlebackground, textbackground, imgbox1, imgbox2,  backgroundcard } =
    data.alldata.mains[0];

  return (
    <div>
        
      <S.Container back = {backgroundcard.url}>
    
          <S.Boxcontainer>
              <S.Img src = {imgbox1.url}/>
              <S.Btn>Buy it now</S.Btn>
              <p>{textbackground}</p>
          </S.Boxcontainer>
          <S.Boxcontainer>
              <S.Img src = {imgbox2.url}/>
              <S.Btn>Buy it now</S.Btn>
              <p>{textbackground}</p>
          </S.Boxcontainer>
      
      </S.Container>
    </div>
  );
};

export default Container;
