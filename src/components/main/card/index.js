import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import * as S from "./style";

const Card = () => {
  const data = useStaticQuery(graphql`
    query {
      alldata {
        mains {
          img1 {
            url
          }
          img2 {
            url
          }
          img3 {
            url
          }
          img4 {
            url
          }
          btn1
          btn2
          btn3
          btn4
          title1
          title2
          title3
          title4
        }
      }
    }
  `);

  const {
    btn1,
    btn2,
    btn3,
    btn4,
    title1,
    title2,
    title3,
    title4,
    img1,
    img2,
    img3,
    img4,
  } = data.alldata.mains[0];

  return (
    <S.Container>
      <S.Foodbox>
        <S.Img src={img1.url} />
        <p>{title1}</p>
        <S.Btn>{btn1}</S.Btn>
      </S.Foodbox>
      <S.Foodbox>
        <S.Img src={img2.url} />
        <p>{title2}</p>
        <S.Btn>{btn2}</S.Btn>
      </S.Foodbox>
      <S.Foodbox>
        <S.Img src={img3.url} />
        <p>{title3}</p>
        <S.Btn>{btn3}</S.Btn>
      </S.Foodbox>
      <S.Foodbox>
        <S.Img src={img4.url} />
        <p>{title4}</p>
        <S.Btn>{btn4}</S.Btn>
      </S.Foodbox>
    </S.Container>
  );
};

export default Card;
