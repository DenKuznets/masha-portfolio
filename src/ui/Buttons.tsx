import styled from "styled-components";

const ButtonStyles = `
    font-weight: 500;
    font-size: 1.3rem;
    line-height: 1.2;
    letter-spacing: 0.02em;
    padding: 18px 19px;
    cursor: pointer;
    transition: all 0.3s ease;
`;

export const RedButton = styled.button`
    ${ButtonStyles};
    color: #fff;
    background: ${({ theme }) => theme.colors.smoothRed};
    &:hover {
        color: ${({ theme }) => theme.colors.smoothRed};
        background-color: white;
    }
`;

export const WhiteButton = styled.button`
    ${ButtonStyles};
    color: #000;
    background: ${({ theme }) => theme.colors.creamyWhite};
    &:hover {
        color: ${({ theme }) => theme.colors.creamyWhite};
        background-color: black;
    }
`;
