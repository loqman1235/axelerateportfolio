import React from "react";
import { TbExternalLink, TbCode } from "react-icons/tb";
const ProjectCard = ({ projectTitle, projectDesc, projectThumb }) => {
  return (
    <div className="bg-gradient-to-br from-white/10 to-white/5 p-6 rounded-2xl backdrop-blur-xl border border-white/10 relative shadow-2xl">
      {/* Project Thumbnail */}
      <div className="w-full rounded-2xl h-[270px] bg-gray-500 overflow-hidden mb-4">
        <img
          src={projectThumb}
          alt={projectTitle}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Project Title */}
      <h4 className="text-lg font-semibold tracking-tight mb-4">
        {projectTitle}
      </h4>
      {/* Project Description */}
      <p className="text-sm text-[#B3C7D6] leading-[26px] text-left mb-4">
        {projectDesc}
      </p>
      {/* Project Buttons */}
      <div className="flex items-center gap-3">
        <a
          href="#"
          className="py-3 w-1/2 px-8 bg-gradient-to-r from-teal-400 to-blue-500 rounded-2xl text-sm font-semibold hover:from-blue-500 hover:to-teal-400 transition duration-700 shadow-sm flex items-center justify-center gap-1"
        >
          <TbExternalLink size={20} /> Preview
        </a>
        <a
          href="#"
          className="py-3 w-1/2 px-8 bg-white/5 text-sm font-semibold rounded-2xl border border-white/10 backdrop-blur-xl hover:bg-white/10 transition duration-700 shadow-sm  flex items-center justify-center gap-1"
        >
          <TbCode size={20} /> Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
