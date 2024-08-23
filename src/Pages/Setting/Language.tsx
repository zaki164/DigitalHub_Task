import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SelectReact from 'react-select';
import SelectColors2 from "../../config/SelectColors2";
import { useState } from "react";

const Language = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language)

  const Option1 = [
    { value: "en", label: 'English' },
    { value: "ar", label: 'Arabic' },
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.2 } }}
      className="content-container p-container">
      <p className="page-header">{t("Language")}</p>

      <div className="mt-5 md:mt-8">

        <div className="flex flex-col gap-2 md:gap-3 mb-3 md:mb-4 md:w-1/2">
          <label className="custom-label">{t("Choose language")}</label>
          <SelectReact
            noOptionsMessage={() => t('No option')}
            loadingMessage={() => t('Loading...')}
            options={Option1}
            styles={SelectColors2}
            placeholder={t('Choose language')}
            defaultValue={Option1.find(option => option.value === i18n.language)}
            onChange={(newValue: any) => {
              newValue && setLanguage(newValue?.value);
            }}
          />
        </div>

        <div className="flex justify-end mt-8 ">
          <button
            onClick={() => i18n.changeLanguage(language)}
            type="button"
            aria-label="change language"
            disabled={
              language === i18n.language
            }
            className={`custom-button ${language === i18n.language ? "cursor-not-allowed opacity-70" : ""} hvr-float-shadow bg-mainColor px-10 md:px-14 py-2 md:py-4`}
          >
            {t("Save")}
          </button>
        </div>
      </div>
    </motion.section>
  )
}

export default Language