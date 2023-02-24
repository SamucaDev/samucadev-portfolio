import styled from 'styled-components'

export const Box = styled.button<{background: string}>`
    width: 143px;
    height: 49px;
    display: block;
    border: none;
    border-radius: 8px;
    background: ${(props) => props.background};
    color: ${(props) => props.color};

    &:hover {
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }
    
    &:active {
        border: 1px solid #4285f4;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 15px;
    }
`;

export const Label = styled.span<{weight: number}>`
    font-weight: ${(props) => props?.weight};
`;
