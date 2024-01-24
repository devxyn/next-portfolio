"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="md:pt-40">
      <h2>My Projects</h2>
      <ul ref={ref} className="flex flex-col md:flex-row gap-4 md:gap-10">
        {projectsData.map((project, index) => (
          <motion.li
            className="w-full"
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: (index + 1) * 0.4 }}>
            <ProjectCard title={project.title} description={project.description} imgUrl={project.image} />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
