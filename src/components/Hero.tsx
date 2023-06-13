import styled from "styled-components";
import { RedButton, WhiteButton } from "./Buttons";
import screen from "../breakpoints";

const HeroStyled = styled.section`
    padding-top: 286px;
    @media only screen and (max-width: 500px) {
        padding-top: 100px;
        text-align: center;
    }
    .hero__content {
        max-width: 840px;
        margin-left: 252px;
        @media only screen and (max-width: 1440px) {
            margin: auto;
        }
        h1 {
            color: ${({ theme }) => theme.colors.smoothRed};
            margin-bottom: 20px;
            
        }
        h2 {
            color: ${({ theme }) => theme.colors.creamyWhite};
            font-style: italic;
            margin-bottom: 20px;
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
        <HeroStyled className="hero">
            <div className="hero__content">
                <h1>Hi, I am Ramisha</h1>
                <h2>Freelane UI/UX Designer</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
                    dignissim, metus nec fringilla accumsan, risus sem
                    sollicitudin lacus, ut interdum tellus elit sed risus.
                </p>
                <div className="hero__content-buttons">
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
