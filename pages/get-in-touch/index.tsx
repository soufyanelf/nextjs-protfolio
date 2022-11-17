import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import GetInTouchSection from "../../components/GetInTouchSection";

const GetInTouch: NextPage = () => {
  return (
    <div className="relative py-4 sm:min-h-screen min-h-screen">
      <Head>
        <title>Ismailium - Connect With Me</title>
        <link rel="icon" href="/Fez-Hat.png" />
      </Head>

      <main className="p-4 max-w-6xl w-100 m-auto ">
        <Navbar />
        <GetInTouchSection />
        <Footer />
      </main>
    </div>
  );
};

export default GetInTouch;
