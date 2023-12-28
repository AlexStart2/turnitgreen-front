import Layout from '@/components/Layout';
import '@/styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href='/icon_turnitgreen.png'/>
        <link rel="apple-touch-icon" href="/icon_turnitgreen.png" />
        <title>Turn it Green</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>

  );
}
