import React from 'react';
import * as S from "./style"
import Card from './card';
import Section from "./section"

const Main = () => {
    return ( 
        <S.Main>
            <S.Line/>
            <Card/>
            <Section/> 
        </S.Main>
     );
}
 
export default Main;