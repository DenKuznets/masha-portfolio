import React from "react";
import { useParams } from "react-router-dom";
import ProjectsList from "../ts/projectsList";

const ProjectPage = () => {
    const id = useParams().id;
    const project = ProjectsList.find(
        (project) => project.id.toString() === id
    );
    console.log(project);
    // console.log(params);
    return <div>ProjectPage</div>;
};

export default ProjectPage;
