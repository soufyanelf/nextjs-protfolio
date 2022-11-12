import React, { FunctionComponent } from "react";
import Link from 'next/link';
import projects from "./data/index";

import { AiOutlineLink, AiOutlineGithub } from 'react-icons/ai';

const ProjectsSection: FunctionComponent = () => {
  return (
    <div className="sm:py-16 py-10 sm:text-left text-center">
        <h2 className='text-3xl font-bold'>Thing i built 🚀</h2>
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-4">
            {projects.map((project: any, index: number) => (
                <div key={index} className="text-left dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-800  border border-gray-100 bg-gray-50 hover:bg-gray-100 p-4 rounded-md flex flex-col gap-4" title={project.title}>
                    <h3 className="text-xl font-bold">
                        {project.title}
                    </h3>
                    <p className="text-xs dark:text-gray-300 text-black leading-6">
                        {project.description}
                    </p>
                    <span className="text-sm font-bold pb-1">
                        {project.tools}
                    </span>
                    <div className="flex justify-start items-center gap-2">
                        <Link href={project.demo} legacyBehavior>
                            <a title="Website" target="_blank" className="bg-black text-white dark:bg-white dark:text-black rounded px-2 py-1 font-semibold text-xs flex justify-start items-center gap-1 active:scale-95">
                                <AiOutlineLink />
                                <span>Demo</span>
                            </a>
                        </Link>
                        {project.github ? 
                            <Link href={project.github} legacyBehavior>
                                <a title="GitHub Repository" target="_blank" className="bg-black text-white dark:bg-white dark:text-black rounded px-2 py-1 font-semibold text-xs flex justify-start items-center gap-1 active:scale-95">
                                    <AiOutlineGithub />
                                    <span>GitHub</span>
                                </a>
                            </Link> : null}
                        </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default ProjectsSection;
