import Image from "next/image";
import React from "react";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="w-full">
      <div
        className="h-52 w-full rounded-t-xl relative"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}>
        <Link href={gitUrl} className="cursor-pointer">
          <Image
            className="absolute top-2 right-3 bg-black/50 rounded-full"
            src="/github-icon.svg"
            alt="github-icon"
            width={50}
            height={50}
          />
        </Link>
      </div>
      <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
