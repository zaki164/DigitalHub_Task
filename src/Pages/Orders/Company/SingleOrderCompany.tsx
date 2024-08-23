import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { LiveLocationMap, StepperCustom } from "../../../Components";
import { Widget3, Widget4 } from "../../../Widgets";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const SingleOrderCompany = () => {
  const { t } = useTranslation();
  return (
    <motion.section
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
      className="content-container p-container">
      <p className="page-header mb-6">{t("View order details")}</p>
      <section className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
        <Widget3 />
        <Widget4 />
      </section>
      <section className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <article className="p-2 md:p-4">
          <p className="text-base-l font-semibold mb-3">{t("Order status")}</p>
          <StepperCustom />
        </article>
        <article className="p-2 md:p-4">
          <p className="text-base-l font-semibold mb-3">{t("Live location")}</p>
          <LiveLocationMap />
        </article>
      </section>
      <div className="flex justify-end mt-4">
        <button
          className={`custom-button hvr-float-shadow bg-mainColor px-6 md:px-10 py-2 md:py-4`}
        >
          {1 !== 1 ? (
            <AiOutlineLoading3Quarters className="animate-spin text-2xl" />
          ) : (
            t("Send Code")
          )}
        </button>
      </div>
    </motion.section>
  )
}

export default SingleOrderCompany