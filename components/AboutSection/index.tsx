import Link from "next/link";
import React, { FunctionComponent } from "react";
import { SiHey } from "react-icons/si";
import { AboutDataType } from "../../types"

interface Props {
  aboutData: AboutDataType
}

const AboutSection: FunctionComponent <Props>= ({ aboutData }) => {
  return (
    <div className="px-1 sm:py-16 py-10 flex flex-col justify-center sm:items-start items-center gap-4">
      <h1 className="flex justify-start items-center font-bold sm:text-2xl text-xl gap-2">
        <span>Yoo</span>
        <SiHey />
      </h1>
      <h2 className="sm:text-3xl text-2xl font-bold">Who am i? 😃</h2>
      <p className="sm:text-left text-justify sm:text-md text-sm leading-8 sm:leading-10"
          dangerouslySetInnerHTML={{ __html: aboutData.description }}  />
      {/* <sup className="mt-4 text-xs  underline sm:text-left text-center">
        Still writing lines of code while staying hydrated.
      </sup> */}
    </div>
  );
};

export default AboutSection;
