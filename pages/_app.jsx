import "../style/css/normalize.css";
import "../style/css/style.css";
import "../style/css/mouseAnimation.css";
import Head from "next/head";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Pacific Surfacing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
