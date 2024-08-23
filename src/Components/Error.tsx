import { useTranslation } from "react-i18next";
import ErrorAnime from "./error.json";
import Lottie from "lottie-react";

const Error = () => {
  const { t } = useTranslation()
  return (
    <section className="loader_cont">
      <div className="max-w-[450px]">
        <Lottie animationData={ErrorAnime} loop={true} />
      </div>
      <div className="text-blueColor font-semibold text-3xl-4xl text-center mt-6">
        {t("Something went wrong")}
      </div>
    </section>
  );
};

export default Error;
