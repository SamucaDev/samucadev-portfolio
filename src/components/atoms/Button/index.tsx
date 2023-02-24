import theme from '@/styles/theme';
import React from 'react';
import * as S from './styles';

interface ButtonParams {
    event?: any,
    label?: string,
    background?: 'black' | 'primary', 
    color?: 'black' | 'primary',
    weight?: number
}

const Button: React.FC<ButtonParams> = ({
    background = 'primary',
    color = 'black',
    label = '',
    weight = 500,
    event = () => {}
}) => {
    return (
        <>
           <S.Box 
                background={theme.colors[background]} 
                color={theme.colors[color]} 
                onClick={event}
            >
                <S.Label weight={weight}>{label}</S.Label>
            </S.Box>
        </>
    ); 
}

export default Button;
