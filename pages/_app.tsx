import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { Analytics } from '@vercel/analytics/react';
import { homePageData } from "../content/portfolioData";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={false} attribute="class">
      <Component {...pageProps} homePageData={homePageData} />
      <Analytics />
    </ThemeProvider>
  )
}

export default MyApp
