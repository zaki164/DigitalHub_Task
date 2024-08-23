import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useTranslation } from "react-i18next";
import Router from "./Router/Router";
import "aos/dist/aos.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-toastify/dist/ReactToastify.css";
import "hover.css/css/hover-min.css";
import "animate.css/animate.css";

function App() {
  const { i18n } = useTranslation();

  return (
    <BrowserRouter>
      <Router />
      <ToastContainer rtl={i18n.language !== "en"} />
    </BrowserRouter>
  );
}

export default App;
