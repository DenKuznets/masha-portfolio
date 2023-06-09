import styled from "styled-components";

const HeaderStyled = styled.header``;

const Logo = styled.div`
    span {
        color: ${({ theme }) => theme.colors.smoothRed};
        font-weight: 800;
    }
`;

const Nav = styled.nav``;

const Button = styled.button``;

const Header = () => {
    return (
        <HeaderStyled>
            <Logo>
                <span>D</span>avinchushka
            </Logo>
            <Nav></Nav>
            <Button></Button>
        </HeaderStyled>
    );
};

export default Header;
