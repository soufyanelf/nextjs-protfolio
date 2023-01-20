import { NextPage } from "next";
import Head from "next/head";
import ProjectsSection from "../../components/ProjectsSection";
import { parse_YAML_file } from "../../services/parser";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Projects: NextPage = ({ projects }: any) => {
  return (
    <div className="relative py-4 sm:min-h-screen min-h-screen">
      <Head>
        <title>Ismailium - Things I Built</title>
        <link rel="icon" href="/Fez-Hat.png" />
      </Head>

      <main className="p-4 max-w-6xl w-100 m-auto ">
        <Navbar />
        <ProjectsSection projects={projects} />
      </main>
    </div>
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
