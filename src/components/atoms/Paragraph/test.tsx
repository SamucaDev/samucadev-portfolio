import React from 'react'
import { render } from '@testing-library/react';
import theme from '@/styles/theme';
import { Chance } from 'chance';
import Paragraph from '.';

const chance = new Chance(); 

describe('Test Paragraph Component', () => {
    test('Should to render Paragraph component', () => {
        const text = chance.name(); 
        const { getByText } = render(
            <Paragraph color='black'>{text}</Paragraph>
        );
        expect(getByText(text)).toBeInTheDocument();
        expect(getByText(text)).toHaveAttribute('color');
        expect(getByText(text)).toHaveStyle(`color: ${theme.colors.black}`);
    });
});
