import { useNavigate, useParams } from "react-router-dom";
import ProjectsList from "../ts/projectsList";
import styled from "styled-components";
import { RedButton } from "../ui/Buttons";

const modalContentColumn = "900px";

const ProjectPageStyled = styled.div`
    display: flex;
    gap: 100px;
    padding: 50px;
    height: 100%;
    width: 100%;
    max-width: 1800px;
    margin: 0 auto;
    @media only screen and (max-width: ${modalContentColumn}) {
        flex-direction: column;
        min-height: 100%;
        height: unset;
        gap: 40px;
        align-items: center;
    }
    @media only screen and (max-width: 530px) {
        padding: 50px 10px;
    }

    .project__text {
        h3 {
            margin-bottom: 1em;
            text-transform: capitalize;
        }
        p {
            white-space: pre-line;
            margin-top: 30px;
            min-width: 300px;
            color: inherit;
            margin-bottom: 1em;
        }

        ul {
            margin-bottom: 1em;
            li {
                border: 1px dotted black;
            }
        }
    }

    .project__img {
        flex-basis: 1000px;
        @media only screen and (max-width: ${modalContentColumn}) {
            min-height: 70vh;
            flex-basis: unset;
        }
        img {
            width: 100%;
            height: auto;
            object-fit: cover;
        }
    }
`;

const ProjectPage = () => {
    const id = useParams().id;
    const project = ProjectsList.find(
        (project) => project.id.toString() === id
    );
    const navigate = useNavigate();
    return project ? (
        <ProjectPageStyled>
            <div className="project__text">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <RedButton onClick={() => navigate(-1)}>Back</RedButton>
            </div>
            <div className="project__img">
                <img src={`/images/projects/${project.images[0]}`} alt="" />
            </div>
        </ProjectPageStyled>
    ) : (
        <>
            No such project
            <RedButton onClick={() => navigate("/")} className="btn-back">
                Home
            </RedButton>
        </>
    );
};

export default ProjectPage;
