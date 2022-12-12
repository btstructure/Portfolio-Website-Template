import React from "react";
import my_projects from "./my_projects";

function Projects() {
  return (
    <div
      id="projects"
      className="w-full h-screen bg-gradient-to-b from-purple-500 to-gray-300 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <h1 className="text-white text-center text-5xl p-5 font-bold inline pb-6">
          Projects
        </h1>
        <div className="grid grid-cols-2 gap-10 flex-wrap rounded-md px-7">
          {my_projects.map(({ id, name, img, github, demo }) => (
            <div
              className="rounded-md justify-center hover:scale-110 px-4"
              key={id}
            >
              <div className="shadow-md rounded-lg shadow-white-700">
                <p className="text-center">{name}</p>
                <img className="rounded-md py-1" alt="project" src={img} />
                <div className="flex items-center justify-center overflow-hidden flex-wrap">
                  <a
                    className="w-1/2 text-center hover:text-cyan-200"
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                  <a
                    className="w-1/2 text-center hover:text-cyan-200"
                    href={demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;

// {name}
// <a href={github} target="_blank">
//   Code
// </a>
