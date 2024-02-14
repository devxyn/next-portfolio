"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Medyo Netflix",
    description: "A netflix clone integrated with TMDB API.",
    image: "/images/projects/medyonetflix.png",
    previewUrl: "https://medyonetflix.vercel.app/",
    gitUrl: "https://github.com/devxyn/medyonetflix",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "Medyo Pkmn",
    description: "A javascript game inspired from Pokemon",
    image: "/images/projects/medyopokemon.png",
    previewUrl: "https://medyopokemon.netlify.app/",
    gitUrl: "https://github.com/devxyn/medyopkmn",
    tag: ["All", "Web"],
  },
  {
    id: 3,
    title: "Jammming",
    description: "A web app integrated with Spotify API",
    image: "/images/projects/jammming.png",
    previewUrl: "https://devxyn-jammming.netlify.app/",
    gitUrl: "https://github.com/devxyn/jammming",
    tag: ["All", "Web"],
  },
  {
    id: 4,
    title: "Pokedex",
    description: "A web app integrated with PokeAPI",
    image: "/images/projects/pokedex.png",
    previewUrl: "https://devxyn-pokedex.vercel.app/",
    gitUrl: "https://github.com/devxyn/pokedex",
    tag: ["All", "Web"],
  },
  {
    id: 5,
    title: "Weather App",
    description: "A web app integrated with Open Weather API",
    image: "/images/projects/weatherapp.png",
    previewUrl: "https://devxyn-weatherapp.vercel.app/",
    gitUrl: "https://github.com/devxyn/weatherapp",
    tag: ["All", "Web"],
  },
  {
    id: 6,
    title: "Nordic Lifting",
    description: "An ecommerce site",
    image: "/images/projects/nordiclifting.png",
    previewUrl: "https://nordiclifting.com/",
    gitUrl: "",
    disabled: true,
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
      <h2 className="text-4xl font-bold mb-4 text-white">My Projects</h2>
      <ul ref={ref} className="flex flex-col md:flex-row md:flex-wrap w-full gap-4 justify-center items-center">
        {projectsData.map((project, index) => (
          <motion.li
            className="w-full md:w-[30%]"
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: (index + 1) * 0.4 }}>
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              disabled={project.disabled}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
