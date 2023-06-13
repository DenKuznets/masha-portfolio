import styled from "styled-components";
import { RedButton, WhiteButton } from "./Buttons";

const HeroStyled = styled.section`
    
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
