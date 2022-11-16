import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageNotFound from '../components/PageNotFound';

const Home: NextPage = () => {
  return (
    <div className='relative py-4 sm:min-h-screen min-h-screen'>
      <Head>
        <title>Page Not Found - Ismailium</title>
        <link rel="icon" href="/Fez-Hat.png" />
      </Head>

      <main className='p-4 max-w-6xl w-100 m-auto '>
        <Navbar />
        <PageNotFound />
        <Footer />
      </main>
    </div>
  )
}

export default Home;
