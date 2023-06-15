import { Link } from "react-router-dom";
import styled from "styled-components";

const ProjectsPreviewStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    @media only screen and (max-width: 800px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (max-width: 500px) {
        grid-template-columns: repeat(1, 1fr);
    }
    .card {
        /* outline: 1px solid red; */
        position: relative;
        height: 550px;
        background-color: ${({ theme }) => theme.colors.palePink};
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        cursor: pointer;
        .over {
            position: absolute;
            top: 0;
            left: 0;
            height: 305px;
            width: 70%;
            /* outline: 1px solid black; */
            filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
        }
        .under {
            /* outline: 1px solid green; */
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 350px;
        }
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`;

type CardType = {
    type: string;
    name: string;
    description: string;
    images: string[];
}[]

const ProjectsPreview = ({ cards } : {cards : CardType}) => {
    const randomHeight = () => Math.floor(Math.random() * (500 - 300) + 300);
    const randomWidth = () => Math.floor(Math.random() * (90 - 50) + 50);

    const cardsList = cards.map((card, index) => (
        <div key={index} className="card">
            <Link to={`projects/${index + 1}`}>
                <div
                    style={{
                        height: randomHeight() + "px",
                    }}
                    className="under"
                >
                    <img src={`/images/projects/${card.images[1]}`} alt="" />
                </div>
                <div
                    style={{
                        height: randomHeight() + "px",
                        width: randomWidth() + "%",
                    }}
                    className="over"
                >
                    <img src={`/images/projects/${card.images[0]}`} alt="" />
                </div>
            </Link>
        </div>
    ));
    return (
        <ProjectsPreviewStyled className="projects__content-cards">
            {cardsList}
        </ProjectsPreviewStyled>
    );
};

export default ProjectsPreview;
