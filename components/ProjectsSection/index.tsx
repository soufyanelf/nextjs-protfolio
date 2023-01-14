import React, { useState } from "react";
import Link from "next/link";

import { FiLoader } from "react-icons/fi";

import { AiOutlineLink, AiOutlineGithub } from "react-icons/ai";
const ProjectsSection = ({ projects }: any) => {
  const [projectsLength, setProjectsLength] = useState(3);
  const [loading, setLoading] = useState(false);

  return (
    <div className="sm:py-16 py-10 sm:text-left text-center">
      <h2 className="sm:text-3xl text-2xl font-bold">Thing i built 🚀</h2>
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-4">
        {projects.map(
          (project: any, index: number) =>
            project.id <= projectsLength && (
              <div
                key={index}
                className="h-max text-left dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-800 border border-gray-150 bg-gray-100 hover:bg-gray-50 p-4 rounded-md flex flex-col gap-4"
                title={project.title}
              >
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-xs dark:text-gray-300 text-black leading-6 font-semibold">
                  {project.description}
                </p>
                <div className="flex justify-start items-center gap-2 flex-wrap">
                  {project.tools.map((tool: any, index: number) => (
                    <span className="text-sm font-bold pb-1" key={index}>
                      • {tool}
                    </span>
                  ))}
                </div>
                <div className="flex justify-start items-center gap-2">
                  <Link href={`${project.demo}`} legacyBehavior>
                    <a
                      title="Website"
                      target="_blank"
                      className="bg-black text-white dark:bg-white dark:text-black rounded px-2 py-1 font-semibold text-xs flex justify-start items-center gap-1 active:scale-95"
                    >
                      <AiOutlineLink />
                      <span>Demo</span>
                    </a>
                  </Link>
                  {project.github ? (
                    <Link href={`${project.github}`} legacyBehavior>
                      <a
                        title="GitHub Repository"
                        target="_blank"
                        className="bg-black text-white dark:bg-white dark:text-black rounded px-2 py-1 font-semibold text-xs flex justify-start items-center gap-1 active:scale-95"
                      >
                        <AiOutlineGithub />
                        <span>GitHub</span>
                      </a>
                    </Link>
                  ) : null}
                </div>
              </div>
            )
        )}
      </div>
      {projectsLength <= 7 && (
        <div className="mt-10 flex justify-center items-center w-100">
          <button
            className="flex justify-center items-center gap-2 py-2 px-4 rounded font-semibold text-sm dark:bg-white dark:text-black text-white bg-black active:scale-95"
            onClick={() => {
              setLoading(true);
              setTimeout(() => {
                setProjectsLength(projectsLength * 2);
                setLoading(false);
              }, 1000);
            }}
            title="Load more projects"
          >
            <FiLoader
              className={`text-md ${loading == true ? "spin" : null}`}
            />
            <span>Load more projects</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectsSection;
