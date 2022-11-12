import type { NextPage } from 'next';
import Head from 'next/head';

import Navbar from '../components/Navbar';

const Home: NextPage = () => {
  return (
    <div className='max-w-6xl w-100 m-auto mt-4'>
      <Head>
        <title>Ismailium - Layhdi Chabab</title>
        <link rel="icon" href="/Fez-Hat.png" />
      </Head>

      <main className='p-4'>
        <Navbar />
      </main>
    </div>
  )
}

export default Home;
