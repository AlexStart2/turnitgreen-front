import Layout from "@/components/Layout";
import "@/styles/globals.css";
import Head from "next/head";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/icon_turnitgreen.png" />
        <link rel="apple-touch-icon" href="/icon_turnitgreen.png" />
        <meta name="robots" content="index, follow" />
        <title>Turn it Green</title>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2369548664184683"
          crossorigin="anonymous"
        ></Script>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
