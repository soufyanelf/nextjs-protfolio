import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { Analytics } from '@vercel/analytics/react';
import Head from "next/head";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={false} attribute="class">
      <div className="relative py-4 sm:min-h-screen min-h-screen">
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/Fez-Hat.png" />
      </Head>
      <main className="p-4 max-w-6xl w-100 m-auto ">
        <Navbar />
        <Component {...pageProps} />
      </main>
    </div>
      <Analytics />
    </ThemeProvider>
  )
}

export default MyApp
