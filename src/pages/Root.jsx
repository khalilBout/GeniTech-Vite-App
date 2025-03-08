import { Outlet } from "react-router-dom";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/Footer/Footer";

// import { useState } from "react";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: "fr",
    detection: {
      order: [
        "cookie",
        "htmlTag",
        "localStorage",
        "sessionStorage",
        "navigator",
        "path",
        "subdomain",
      ],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/locale/{{lng}}/{{ns}}.json",
    },
  });
import bg from "../assets/bg.svg";

const bgImage = {
  backgroundImage: `url(${bg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};
export default function Root() {
  // const [orderPopup, setOrderPopup] = useState(false);

  return (
    <div style={bgImage} className="overflow-hidden ">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
