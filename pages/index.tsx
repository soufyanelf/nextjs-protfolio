import type { NextPage } from "next";
import Hero from "../components/Hero";
import { HomePageDataType } from "../types"
import { parse_YAML_file } from "../services/parser";


export const getStaticProps = async () => {
  const { data:profile }: any = await parse_YAML_file("profile.yaml");
  return {
    props: {
      profile
    },
  };
};


interface Props {
  profile: HomePageDataType
}

const Home: NextPage <Props> = ({ profile }) => {
  return (
      <>
        <Hero heroData={profile?.heroData} />
      </>
  );
};

export default Home;