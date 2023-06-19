import styled from "styled-components";

const LogoStyled = styled.div`
    font-size: 2.5rem;
    line-height: 1.2;

    @media only screen and (max-width: 500px) {
        font-size: 1.2rem;
    }

    span {
        color: ${({ theme }) => theme.colors.smoothRed};
        font-weight: 800;
    }
`;

const Logo = ({ className }: { className?: string }) => {
    return (
        <LogoStyled className={`logo ${className}`}>
            <span>D</span>avinchushka
        </LogoStyled>
    );
};

export default Logo;
