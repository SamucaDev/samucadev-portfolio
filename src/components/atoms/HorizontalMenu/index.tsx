import React from "react";
import * as S from './styles';

interface HorizontalMenuParams {
    
}

const HorizontalMenu : React.FC<HorizontalMenuParams> = ({ }) => {
    return(
        <>
            <S.Line>
                <S.Column>Title1</S.Column>
                <S.Column>Title1</S.Column>
                <S.Column>Title1</S.Column>
            </S.Line>
        </>
    );
};

export default HorizontalMenu;