import styled from "styled-components";
import aboutImg from "../../../public/images/about-img.png";

const AboutStyled = styled.section`
    .about {
    }
`;

const SliderStyled = styled.div`
    .slider__graphics {
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
            width: ${({position})=> position}%;
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
            left: calc(${({position})=>position}% - 12px);
            border-radius: 50%;
            background: #ebebeb;
            border: 2px solid #dc3635;
            box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.29);
        }
    }
`;

interface SliderProps {
    header: string;
    position: number;
}

function Slider({ header, position }: SliderProps) {
    return (
        <SliderStyled className="slider" position={position}>
            <div className="slider__header">{header}</div>
            <div className="slider__graphics">
                <span className="greyline"></span>
                <span className="redline"></span>
                <span className="handle"></span>
            </div>
        </SliderStyled>
    );
}

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
                        <Slider header="UX Design" position={85} />
                    </div>
                </div>
            </div>
        </AboutStyled>
    );
};

export default About;
