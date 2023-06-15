import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import ProjectsList from "../ts/projectsList";
import { useState } from "react";
import ProjectsPreview from "../components/ProjectsPreview";

const ProjectsStyled = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 14px;
    max-width: 1400px;
    margin: 0 auto;
    h2 {
        margin-bottom: 7px;
    }
    p {
        margin-bottom: 60px;
        max-width: 1164px;
        text-align: center;
        line-height: 1.4;
    }
    .projects__content {
        width: 100%;
        &-filter {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-bottom: 66px;
            flex-wrap: wrap;

            li {
                cursor: pointer;
                text-transform: capitalize;
                background-color: ${({ theme }) => theme.colors.palePink};
                padding: 4px 10px;
                font-weight: 500;
                font-size: 1.5rem;
                line-height: 137%;
                letter-spacing: 0.04em;
                transition: all 0.1s ease;
                display: flex;
                align-items: center;
                &.active {
                    background-color: ${({ theme }) => theme.colors.smoothRed};
                    color: ${({ theme }) => theme.colors.creamyWhite};
                    border-radius: 4px;
                }
            }
        }
        &-cards {
        }
    }
`;

const Projects = () => {
    const filters = new Set(ProjectsList.map((project) => project.type));
    const [selected, setSelected] = useState("");
    
    const filtersList = Array.from(filters).map((filter, index) => (
        <li
            onClick={() => setSelected(filter)}
            key={index}
            className={filter === selected ? "active" : ""}
        >
            {filter} Design
        </li>
    ));

    return (
        <ProjectsStyled>
            <h2>Projects</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus.
            </p>
            <div className="projects__content">
                <ul className="projects__content-filter">
                    <li
                        className={selected ? "" : "active"}
                        onClick={() => setSelected("")}
                    >
                        All
                    </li>
                    {filtersList}
                </ul>
                <ProjectsPreview
                    cards={
                        selected
                            ? ProjectsList.filter(
                                  (project) => project.type === selected
                              )
                            : ProjectsList
                    }
                />
            </div>
        </ProjectsStyled>
    );
};

export default Projects;
