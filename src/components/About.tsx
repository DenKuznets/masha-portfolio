import styled from "styled-components";
import aboutImg from "../../public/images/about-img.png";

const AboutStyled = styled.section`
    .about {
    }
    .slider {
        &__graphics {
            position: relative;
            width: 700px;
            height: 20px;
            .greyline {
                height: inherit;
                position: absolute;
                width: 100%;
                background-color: #d9d9d9;
            }
            .redline {
                background-color: #dc3635;
                width: 85%;
                height: inherit;
                position: absolute;
                top: 0;
                left: 0;
            }
            .handle {
                width: 25px;
                height: 25px;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                left: calc(85% - 12px);
                border-radius: 50%;
                background: #ebebeb;
                border: 2px solid #dc3635;
                box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.29);
            }
        }
    }
`;

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
                    <div className="about__presentation">
                        <div className="slider">
                            <div className="slider__header">UX Design</div>
                            <div className="slider__graphics">
                                <span className="greyline"></span>
                                <span className="redline"></span>
                                <span className="handle"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AboutStyled>
    );
};

export default About;
