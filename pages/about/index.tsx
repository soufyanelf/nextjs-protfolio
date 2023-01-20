import type { NextPage } from "next";
import AboutSection from "../../components/AboutSection";
import { parse_YAML_file } from "../../services/parser";
import { AboutPageDataType } from "../../types"


export const getStaticProps = async () => {
  const { data: about }: any = await parse_YAML_file("about.yaml");

  return {
    props: {
      about
    },
  };
};

interface Props {
  about: AboutPageDataType
}

const About: NextPage<Props> = ({ about }) => {
  return (
    <>
      <AboutSection aboutData={about?.aboutData} />
    </>
  );
};

export default About;
