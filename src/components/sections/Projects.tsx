import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import ProjectsList from "../../projectsList";
import { useState } from "react";

const ProjectsStyled = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 14px;
    h2 {
        margin-bottom: 7px;
    }
    p {
        margin-bottom: 60px;
        max-width: 1164px;
        text-align: center;
        line-height: 1.4;
    }
    ul {
        display: flex;
        gap: 20px;
        li {
            cursor: pointer;
        }
    }
`;

const Projects = () => {
    const filters = new Set(ProjectsList.map((project) => project.type));
    const filtersList = Array.from(filters).map((filter, index) => (
        <li onClick={() => setSelected(filter)} key={index}>
            {filter}
        </li>
    ));
    const [selected, setSelected] = useState("");
    const cardsListFiltered = ProjectsList.filter(
        (project) => project.type === selected
    );

    const cards = selected ? cardsListFiltered : ProjectsList;
    const cardsList = cards.map((card, index) => (
        <li key={index} className="card">
            <Link to={`projects/${index + 1}`}>
                <img
                    className="over"
                    src={`/images/projects/${card.images[0]}`}
                    alt=""
                />
                <img
                    className="under"
                    src={`/images/projects/${card.images[1]}`}
                    alt=""
                />
            </Link>
        </li>
    ));
    console.log(selected);
    return (
        <ProjectsStyled>
            <h2>Projects</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus.
            </p>
            <div className="projects__content">
                <ul className="projects__content-filter">
                    <li onClick={() => setSelected("")}>All</li>
                    {filtersList}
                </ul>
                <div className="projects__content-cards">{cardsList}</div>
            </div>
        </ProjectsStyled>
    );
};

export default Projects;
