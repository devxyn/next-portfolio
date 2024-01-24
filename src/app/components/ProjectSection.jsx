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
    <section id="projects" className="md:pt-40">
      <h2>My Projects</h2>
      <div className="flex flex-col md:flex-row gap-4 md:gap-10">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
