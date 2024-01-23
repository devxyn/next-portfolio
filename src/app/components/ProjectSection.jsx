import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "React Website 1",
    description: "Description 1",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "React Website 2",
    description: "Description 2",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
  },
  {
    id: 3,
    title: "React Website 3",
    description: "Description 3",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
  },
];

const ProjectSection = () => {
  return (
    <>
      <h2>My Projects</h2>
      <div>
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectSection;
