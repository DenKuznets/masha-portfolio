import styled from "styled-components";

const navHide = "1395px";
const HeaderStyled = styled.header`    
    color: ${({ theme }) => theme.colors.creamyWhite};
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 15px;
    max-width: 1434px;
    z-index: 2;

    .logo {
        color: ${({ theme }) => theme.colors.white};
        margin-right: auto;

        @media only screen and (max-width: 500px) {
            margin-right: auto;
            font-size: 1.2rem;
        }
    }

    .burger {
        display: none;
        cursor: pointer;
        transition: all 0.3s ease;

        @media only screen and (max-width: ${navHide}) {
            display: block;
        }

        &--open {
            transform: rotate(-90deg);
        }
    }

    nav {
        margin-right: 35px;

        ul {
            @media (max-width: ${navHide}) {
                position: fixed;
                width: 100%;
                flex-direction: column;
                top: 0;
                left: 0;
                min-height: 0;
                max-height: 0;
                overflow: hidden;
                &.nav__menu--open {
                    min-height: 100vh;
                    padding: 0;
                    background-color: rgba(0, 0, 0, 0.9);
                }
            }
            li {
                color: ${({ theme }) => theme.colors.creamyWhite};
                @media (max-width: ${navHide}) {
                    margin-right: 0;
                    font-size: 1rem;
                }
                a {
                    opacity: 1;
                    &:hover {
                        color: ${({ theme }) => theme.colors.smoothRed};
                    }
                }
            }
        }
    }

    button {
        @media only screen and (max-width: ${navHide}) {
            margin-right: 35px;
        }
        @media only screen and (max-width: 839px) {
            display: none;
        }
    }
`;

export default HeaderStyled;
