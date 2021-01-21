import "../styles/globals.css";
import "../components/About/About.css";
import "../components/Header/Header.css";
import "../components/Features/Features.css";
import "../components/Faq/Faq.css";
import "../components/FeaturesOverView/FeaturesOverView.css";
import "../components/Reviews/Reviews.css";
import "../components/Screenshots/Screenshots.css";
import "../components/Download/Download.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
