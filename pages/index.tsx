import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <div className="relative py-4 sm:min-h-screen">
      <Head>
        <title>Ismailium - Layhdi Chabab</title>
        <link rel="icon" href="/Fez-Hat.png" />
        <meta type="description" content="Frontend Developer Intern @Yutapp, Cuber, Chess, And Formula 1🏎️ Lover <3." />
      </Head>

      <main className="p-4 max-w-6xl w-100 m-auto ">
        <Navbar />
        <Hero />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
