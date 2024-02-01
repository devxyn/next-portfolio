"use client";
import Image from "next/image";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";
import { experienceData, iconData } from "../utils/aboutSectionData";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="flex flex-row flex-wrap justify-center">
        {iconData.map((icon, index) => (
          <div className="flex flex-col justify-center items-center w-1/4 md:w-1/5 mb-4" key={index}>
            <Image src={icon.image} alt={icon.title} width={50} height={50} />
            <h5 className="text-sm font-semibold text-white text-center">{icon.title}</h5>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul>
        {experienceData.map((exp, index) => (
          <li key={index} className="mb-2">
            <h5 className="text-lg text-[#ADB7BE]">
              <span className="font-bold text-white">{exp.title}</span> | {exp.company}
            </h5>
            <p className="text-sm text-white">{exp.date}</p>
          </li>
        ))}
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white md:pt-10 md:mb-2">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base md:text-lg ">
            Lorem ipsum dolor sit amet cons ectetur adipisicing elit. Quam, itaque! Quidem libero laborum aspernatur
            voluptas tenetur veniam necessitatibus laudantium commodi quisquam debitis voluptate. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Quam, itaque! Quidem libero laborum aspernatur voluptas tenetur veniam
            necessitatibus laudantium commodi quisquam debitis voluptate. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quam, itaque! Quidem libero laborum aspernatur voluptas tenetur veniam necessitatibus
            laudantium commodi quisquam debitis voluptate.
          </p>
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <div className="flex flex-row justify-start mt-8">
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
              {" "}
              Tech Skills{" "}
            </TabButton>
            <TabButton selectTab={() => handleTabChange("experience")} active={tab === "experience"}>
              {" "}
              Experience{" "}
            </TabButton>
          </div>
          <div className="mt-8">{TAB_DATA.find((data) => data.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
