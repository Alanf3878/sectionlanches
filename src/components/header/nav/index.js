import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import * as S from "./style";

const Nav = () => {
  const data = useStaticQuery(graphql`
    query {
      alldata {
        headers {
          telph
          services
          contact
          about
          home
          reservation
          logo {
            url
          }
        }
      }
    }
  `);

  const { logo, home, telph, services, contact, about, reservation } =
    data.alldata.headers[0];

  return (
    <div>
      <S.Nav>
        <S.Logo src={logo.url} />
        <a>{home}</a>
        <a>{about}</a>
        <a>{services}</a>
        <a>{reservation}</a>
        <a>{contact}</a>
        <a>{telph}</a>
      </S.Nav>
    </div>
  );
};

export default Nav;
