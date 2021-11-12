import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import * as S from "./style"


const Section = () => {
    const data = useStaticQuery(graphql`
    query {
        alldata {
                mains {
                    titlebackground
                    textbackground
                    item1
                    item2
                    item3
                    item4
                    background {
                        url
                    }
                  
                  }
            }
        }
    `
    )

    const{
        titlebackground,
        textbackground,
        item1,
        item2,
        item3,
        item4,
        background
    } = data.alldata.mains[0]

    return ( 
        
 <S.Background back = {background.url}>
     <S.Container>
         <S.Title>
         <h2>{titlebackground}</h2>
         </S.Title>
         <S.Paragraph>
         <ul>
             <li>{item1}</li>
             <li>{item2}</li>
             <li>{item3}</li>
             <li>{item4}</li>
         </ul>
         <p>{textbackground}</p>
         </S.Paragraph>
     
     </S.Container>

</S.Background>
        
       
     );
}
 
export default Section;