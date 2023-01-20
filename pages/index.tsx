import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { HomePageDataType } from "../types"
import { parse_YAML_file } from "../services/parser";

interface Props {
  profile: HomePageDataType
}

const Home: NextPage <Props> = ({ profile }) => {
  return (
    <div className="relative py-4 sm:min-h-screen">
      <Head>
        <title>{profile?.title}</title>
        <link rel="icon" href="/Fez-Hat.png" />
      </Head>

      <main className="p-4 max-w-6xl w-100 m-auto">
        <Navbar />
        <Hero heroData={profile?.heroData} />
      </main>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const { data:profile }: any = await parse_YAML_file("profile.yaml");
  return {
    props: {
      profile
    },
  };
};