import styled from "styled-components";

const ButtonStyles = `
    font-weight: 500;
    font-size: 1.3rem;
    line-height: 1.2;
    letter-spacing: 0.02em;
    padding: 18px 19px;
    cursor: pointer;
`;

export const RedButton = styled.button`
    ${ButtonStyles};
    color: #fff;
    background: ${({ theme }) => theme.colors.smoothRed};
`;

export const WhiteButton = styled.button`
    ${ButtonStyles};
    color: #000;
    background: ${({ theme }) => theme.colors.creamyWhite};
`;
