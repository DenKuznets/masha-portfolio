import styled from "styled-components";
import { RedButton, WhiteButton } from "../ui/Buttons";
import screen from "../ts/breakpoints";

const HeroStyled = styled.section`
    background-image: url(/images/hero-mask.svg), url(/images/hero-img.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    /* background-origin: ; */
    /* width: 100%; */
    min-height: 1000px;
    display: flex;
    align-items: center;
    @media only screen and (max-width: 500px) {
        text-align: center;
        background-position: 75% center;
    }
    .hero {
        width: 100%;
        max-width: 1404px;
        margin: 0 auto;
        /* outline: 1px solid green; */
        /* margin-left: 252px; */
        @media only screen and (max-width: 1440px) {
            margin: auto;
        }
        &__text{
            max-width: 840px;
            /* outline: 1px solid red; */
        }
        h1 {
            color: ${({ theme }) => theme.colors.smoothRed};
            margin-bottom: 18px;
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
            margin-bottom: 25px;
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
            margin-bottom: 30px;
            @media only screen and (max-width: 831px) {
                text-align: left;
            }
            @media only screen and (max-width: 500px) {
                text-align: center;
            }
        }
        &__buttons {
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
                <div className="hero__text">
                    <h1>Hi, I am Ramisha</h1>
                    <div className="hero__em">Freelane UI/UX Designer</div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam eu turpis molestie, dictum est a, mattis tellus.
                        Sed dignissim, metus nec fringilla accumsan, risus sem
                        sollicitudin lacus, ut interdum tellus elit sed risus.
                    </p>
                    <div className="hero__buttons">
                        <RedButton as="a" href="https://t.me/davinchushka">
                            Hire me
                        </RedButton>
                        <WhiteButton>Contact me</WhiteButton>
                    </div>
                </div>
            </div>
        </HeroStyled>
    );
};

export default Hero;
