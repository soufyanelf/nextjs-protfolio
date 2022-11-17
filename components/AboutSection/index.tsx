import Link from "next/link";
import React, { FunctionComponent } from "react";
import { SiHey } from "react-icons/si";
import { HiOutlineNewspaper } from "react-icons/hi";

const AboutSection: FunctionComponent = () => {
  return (
    <div className="px-1 sm:py-16 py-10 flex flex-col justify-center sm:items-start items-center gap-4">
      <h1 className="flex justify-start items-center font-bold sm:text-2xl text-xl gap-2">
        <span>Yoo</span>
        <SiHey />
      </h1>
      <h2 className="sm:text-3xl text-2xl font-bold">Who am i? 😃</h2>
      <p className="sm:text-left text-justify sm:text-md text-sm leading-8 sm:leading-10">
        I am <b>Ismail Boularbah</b> aka <b>Ismailium</b>, Cuber and Frontend
        JavaScript Developer. I really like writing code and building responsive
        web apps & designs, Especially in Javascript. I enjoy projects that
        require me to use javaScript on the server-side using Next.js, React.js,
        Firebase, Restful APIS... I have been working on the web for around 4
        years building learning/freelancing projects. All i am trying to build
        in the field of the web are responsive interfaces with all devices in
        terms of resolution and size.
      </p>
      <sup className="mt-4 text-xs underline sm:text-left text-center">
        Still writing lines of code while staying hydrated.
      </sup>
      <b>Chabab!!, Drink your water 🥤</b>
      <Link href="/Boularbah-Ismail-Resume.pdf" legacyBehavior>
        <a
          target="_blank"
          className="bg-black text-white dark:text-black dark:bg-white font-semibold py-2 px-4 mt-4 rounded text-sm flex justify-center items-center gap-2 active:scale-95"
          title="Boularbah Ismail Resume"
        >
          <span>View My Resume</span>
          <HiOutlineNewspaper />
        </a>
      </Link>
    </div>
  );
};

export default AboutSection;
