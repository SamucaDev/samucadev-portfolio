import React from 'react';
import * as S from './styles';
import theme from '@/styles/theme';

interface ParagraphParams { 
    color: 'black' | 'primary',
    children: React.ReactNode
}

const Paragraph: React.FC<ParagraphParams> = ({ color = 'primary', children }) => {
    return (
        <>
            <S.Paragraph color={theme.colors[color]}>{children}</S.Paragraph>
        </>
    )
}

export default Paragraph;