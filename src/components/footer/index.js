import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import * as S from "./style";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      alldata {
        footers {
          logofooter {
            url
          }
          wpp
          face
          instagram

          iconface {
            url
          }
          iconinsta {
            url
          }
        }
      }
    }
  `);

  const { logofooter, wpp, face, instagram, icon, iconface, iconinsta } =
    data.alldata.footers[0];

  return (
    <div>
      <S.Footer>
        <S.Logo>
          <S.Soci>
            <p>{wpp}</p>
           
          </S.Soci>
          <S.Soci>
          <img src = {iconface.url}/>
            <p>{face}</p>
            
          </S.Soci>
          <S.Soci>
          <img src = {iconinsta.url}/>
            <p>{instagram}</p>
           
          </S.Soci>
        </S.Logo>
      </S.Footer>
    </div>
  );
};

export default Footer;
