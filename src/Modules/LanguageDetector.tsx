import { ReactNode, useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";

const LanguageDetector = ({ children }: { children: ReactNode }) => {
  const { i18n } = useTranslation();

  useLayoutEffect(() => {
    if (i18n.language === "ar") {
      document.documentElement.setAttribute("lang", "ar");
      document.documentElement.setAttribute("dir", "rtl");
    } else {
      document.documentElement.setAttribute("lang", "en");
      document.documentElement.setAttribute("dir", "ltr");
    }
  }, [i18n.language]);

  return (
    <>
      {children}
    </>
  )
}

export default LanguageDetector