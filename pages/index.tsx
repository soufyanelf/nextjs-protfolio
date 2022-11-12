import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Ismailium - Layhdi Chabab</title>
        <link rel="icon" href="/Fez-Hat.png" />
      </Head>

      <main className='-4 flex justify-center items-center min-h-screen'>
        <h1 className='text-xl font-bold'>
          Ismailium - Layhdi Chabab
        </h1>
      </main>
    </div>
  )
}

export default Home;
