import styled from "styled-components";
import { RedButton, WhiteButton } from "./Buttons";
import screen from "../breakpoints";

const HeroStyled = styled.section`
    padding-top: 286px;
    @media only screen and (max-width: 500px) {
        padding-top: 100px;
        text-align: center;
    }
    .hero {
        max-width: 840px;
        margin-left: 252px;
        @media only screen and (max-width: 1440px) {
            margin: auto;
        }
        h1 {
            color: ${({ theme }) => theme.colors.smoothRed};
            margin-bottom: 20px;
        }
        &__em {
            --fontSize: 3rem;
            font-family: "Montserrat";
            font-weight: 700;
            font-size: var(--fontSize);
            line-height: 1.21;
            letter-spacing: 0.035em;
            color: ${({ theme }) => theme.colors.creamyWhite};
            font-style: italic;
            margin-bottom: 20px;
            @media only screen and (max-width: ${screen.laptop}) {
                font-size: calc(var(--fontSize) * 0.7);
            }
            @media only screen and (max-width: ${screen.mobileL}) {
                font-size: calc(var(--fontSize) * 0.5);
            }
        }
        p {
            color: ${({ theme }) => theme.colors.creamyWhite};
            text-align: justify;
            margin-bottom: 20px;
        }
        &-buttons {
            display: flex;
            gap: 42px;
            @media only screen and (max-width: 500px) {
                flex-direction: column;
                align-items: center;
            }
            a,
            button {
                text-align: center;
                width: 189px;
            }
        }
    }
`;

const Hero = () => {
    return (
        <HeroStyled id="hero">
            <div className="hero">
                <h1>Hi, I am Ramisha</h1>
                <div className="hero__em" >Freelane UI/UX Designer</div >
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
                    dignissim, metus nec fringilla accumsan, risus sem
                    sollicitudin lacus, ut interdum tellus elit sed risus.
                </p>
                <div className="hero__buttons">
                    <RedButton as="a" href="https://t.me/davinchushka">
                        Hire me
                    </RedButton>
                    <WhiteButton>Contact me</WhiteButton>
                </div>
            </div>
        </HeroStyled>
    );
};

export default Hero;
