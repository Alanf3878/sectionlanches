import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import * as S from "./style";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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
          backgroundcard {
            url
          }
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
    backgroundcard,
  } = data.alldata.mains[0];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    
         <div>
       
        <Slider {...settings}>
          <div>
            
            <S.SectionBox>
            <S.Foodbox>
          <S.Figure>
            <S.Img src={img1.url} />
          </S.Figure>
          <p>{title1}</p>
          <S.Btn>{btn1}</S.Btn>
        </S.Foodbox>
        <S.Foodbox>
          <S.Figure>
            <S.Img src={img1.url} />
          </S.Figure>
          <p>{title1}</p>
          <S.Btn>{btn1}</S.Btn>
        </S.Foodbox>
        <S.Foodbox>
          <S.Figure>
            <S.Img src={img1.url} />
          </S.Figure>
          <p>{title1}</p>
          <S.Btn>{btn1}</S.Btn>
        </S.Foodbox>
        <S.Foodbox>
          <S.Figure>
            <S.Img src={img1.url} />
          </S.Figure>
          <p>{title1}</p>
          <S.Btn>{btn1}</S.Btn>
        </S.Foodbox>
        </S.SectionBox>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          
        </Slider>
      </div>
     
    
  );
};

export default Card;

 {/* <S.SectionBox>
        
        <S.Foodbox>
          <S.Figure>
            <S.Img src={img2.url} />
          </S.Figure>
          <p>{title2}</p>
          <S.Btn>{btn2}</S.Btn>
        </S.Foodbox>
        
      </S.SectionBox>
      <S.SectionBox>
        <S.Foodbox>
          <S.Figure>
            <S.Img src={img3.url} />
          </S.Figure>

          <p>{title3}</p>
          <S.Btn>{btn3}</S.Btn>
        </S.Foodbox>
        <S.Foodbox>
          <S.Figure>
            <S.Img src={img4.url} />
          </S.Figure>

          <p>{title4}</p>
          <S.Btn>{btn4}</S.Btn>
        </S.Foodbox>
      </S.SectionBox> */}