import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="w-full">
      <div
        className="h-52 w-full rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 group-hover:items-center group-hover:justify-center">
          <Link
            href="/"
            className="h-14 w-14 mr-2 flex items-center justify-center relative rounded-full border border-[#ADB7BE] hover:border-white">
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] cursor-pointer hover:text-white" />
          </Link>
          <Link
            href="/"
            className="h-14 w-14 flex items-center justify-center relative rounded-full border border-[#ADB7BE] hover:border-white">
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] m-2  cursor-pointer hover:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
