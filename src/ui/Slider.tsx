import styled from "styled-components";

interface SliderProps {
    header: string;
    position: number;
}

interface StyledSliderProps {
    handlePos: number;
}

const SliderStyled = styled.div<StyledSliderProps>`
    .slider__header {
        font-weight: 600;
        font-size: 1.5rem;
        line-height: 1.3;
        margin-bottom: 20px;
    }

    .slider__graphics {
        position: relative;
        width: 100%;
        height: 20px;
        .greyline {
            height: inherit;
            position: absolute;
            width: 100%;
            background-color: #d9d9d9;
        }
        .redline {
            background-color: #dc3635;
            width: ${({ handlePos }) => handlePos}%;
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
            left: calc(${({ handlePos }) => handlePos}% - 12px);
            border-radius: 50%;
            background: #ebebeb;
            border: 2px solid #dc3635;
            box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.29);
        }
    }
`;

function Slider({ header, position }: SliderProps) {
    return (
        <SliderStyled className="slider" handlePos={position}>
            <div className="slider__header">{header}</div>
            <div className="slider__graphics">
                <span className="greyline"></span>
                <span className="redline"></span>
                <span className="handle"></span>
            </div>
        </SliderStyled>
    );
}

export default Slider;
