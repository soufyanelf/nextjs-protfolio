import { NextPage } from "next";
import Head from "next/head";
import ProjectsSection from "../../components/ProjectsSection";
import { parse_YAML_file } from "../../services/parser";
import Navbar from "../../components/Navbar";

const Projects: NextPage = ({ projects }: any) => {
  return (
      <>
        <ProjectsSection projects={projects} />
      </>
  );
};

export default Projects;

export const getStaticProps = async () => {
  const { data:projects }: any = await parse_YAML_file("projects.yaml");
  return {
    props: {
      projects
    },
  };
};
