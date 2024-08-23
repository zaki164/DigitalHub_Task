import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

const language = localStorage.getItem("language") || "en";

(i18n as any)
  .on("languageChanged", (lang: string) => {
    localStorage.setItem("language", lang);
  })
  .use(LanguageDetector)
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: language,
    fallbackLng: language,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
