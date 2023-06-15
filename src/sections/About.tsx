import styled from "styled-components";
import aboutImg from "../../../public/images/about-img.png";
import Slider from "../ui/Slider";

const AboutStyled = styled.section`
    .about {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 64px;
        @media only screen and (max-width: 1350px) {
            flex-direction: column-reverse;
            gap: 0;
        }
        &__image {
            flex-basis: 798px;
            @media only screen and (max-width: 1350px) {
                max-width: 700px;
            }
        }
        &__text {
            max-width: 700px;
            h2 {
                margin-bottom: 10px;
            }

            p {
                line-height: 137%;
                margin-bottom: 15px;
                color: #000;
                text-align: justify;
                letter-spacing: 0.04em;
            }
        }
    }

    .slider {
        margin-bottom: 20px;
    }
`;

const slidersText = ["UX Design", "App Design", "Graphic Design", "Web Design"];
const slidersPosition = [85, 76, 95, 88];

const sliders = slidersText.map((slider, index) => (
    <Slider key={index} header={slider} position={slidersPosition[index]} />
));

const About = () => {
    return (
        <AboutStyled id="about">
            <div className="about">
                <div className="about__image">
                    <img src={aboutImg} alt="" />
                </div>
                <div className="about__text">
                    <h2>About me</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam eu turpis molestie, dictum est a, mattis tellus.
                    </p>
                    <div className="about__presentation">{sliders}</div>
                </div>
            </div>
        </AboutStyled>
    );
};

export default About;
