import styled from "styled-components";

const navHide = "1395px";
const HeaderStyled = styled.header`
    position: sticky;
    top: 20px;
    margin: 0 auto;
    color: ${({ theme }) => theme.colors.creamyWhite};
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1404px;

    .logo {
        font-size: 2.5rem;
        line-height: 1.2;
        color: ${({ theme }) => theme.colors.white};
        margin-right: auto;

        @media only screen and (max-width: 500px) {
            margin-right: auto;
            font-size: 1.2rem;
        }

        span {
            color: ${({ theme }) => theme.colors.smoothRed};
            font-weight: 800;
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
        display: flex;
        align-items: center;
        margin-right: 35px;

        ul {
            gap: 35px;
            transition: all 0.4s;
            margin: 0;
            display: flex;
            align-items: center;
            justify-content: center;
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
                a {
                    opacity: 1;
                }
            }
            li {
                font-weight: 500;
                font-size: 1.5rem;
                line-height: 29px;
                color: ${({ theme }) => theme.colors.creamyWhite};
                @media (max-width: ${navHide}) {
                    margin-right: 0;
                    /* margin-bottom: 1em; */
                    font-size: 1rem;
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

export default HeaderStyled