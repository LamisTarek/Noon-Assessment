import "../styles/globals.css";
import Navbar from "../components/Navbar";
import "@fortawesome/fontawesome-svg-core/styles.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
