import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projectsDetails = [
    {
      id: 1,
      thumbnail:
        "https://cdn.dribbble.com/userupload/5779728/file/original-02887eee802d54333afb3aab085dcc73.png?compress=1&resize=1024x768",
      title: "Real Estate Website",
      desc: "Lorem ipsum dolor sit amet cHotel Booking Apponsectetur. Cras elementum aliquam sed fusce amet imperdiet amet sodales vel. In commodo nec tellus eget. Massa aliquet purus",
    },
    {
      id: 2,
      thumbnail:
        "https://cdn.dribbble.com/userupload/5760728/file/original-047051d6c28dedc6162786c12bc2c462.jpg?compress=1&resize=1024x768",
      title: "Hotel Booking App",
      desc: "Lorem ipsum dolor sit amet cHotel Booking Apponsectetur. Cras elementum aliquam sed fusce amet imperdiet amet sodales vel. In commodo nec tellus eget. Massa aliquet purus",
    },
    {
      id: 3,
      thumbnail:
        "https://cdn.dribbble.com/userupload/5919110/file/original-4fd69ed014f2e248f331b3ce341bee69.png?compress=1&resize=1024x768",
      title: "Movie Stream Website",
      desc: "Lorem ipsum dolor sit amet cHotel Booking Apponsectetur. Cras elementum aliquam sed fusce amet imperdiet amet sodales vel. In commodo nec tellus eget. Massa aliquet purus",
    },
  ];
  return (
    <div className="w-full px-5 md:px-10 pb-40">
      <h3 className="title">Projects</h3>
      {/* Projects Container */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 md:gap-10 gap-5 relative">
        {projectsDetails.map((project) => (
          <ProjectCard
            key={project.id}
            projectTitle={project.title}
            projectDesc={project.desc}
            projectThumb={project.thumbnail}
          />
        ))}
        <div className="bg-teal-400/40 w-20 h-20 rounded-full absolute right-0 top-0 z-[-1]"></div>
        <div className="bg-teal-400/40 w-20 h-20 rounded-full absolute left-0 bottom-0 z-[-1]"></div>
      </div>
    </div>
  );
};

export default Projects;
