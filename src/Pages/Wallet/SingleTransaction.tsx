import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Widget7 } from "../../Widgets";
import { data } from "../../Constants";

const SingleTransaction = () => {
  const { t } = useTranslation();

  const dataTransaction = data?.Wallet[0]

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1, transition: { delay: 0.2 } }}
      className="content-container p-container">
      <p className="page-header mb-6">{t("View details of a single transaction")}</p>
      <div className="m-auto w-[95%] sm:w-[90%] md:w-[70%] xl:w-[50%]">
        <Widget7 data={dataTransaction} />
      </div>
    </motion.section>
  )
}

export default SingleTransaction