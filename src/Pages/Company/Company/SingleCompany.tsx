import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { data } from "../../../Constants";
import { Widget5, Widget6 } from "../../../Widgets";
import { Table4 } from "../../../Tables";

const SingleCompany = () => {
  const { t } = useTranslation();

  const UserData = data?.Companies[0]

  return (
    <motion.section
      initial={{ opacity: 0, y: 100, x: 100 }}
      animate={{ opacity: 1, y: 0, x: 0, transition: { delay: 0.2 } }}
      className="content-container p-container">
      <p className="page-header mb-6">{UserData?.name_en}</p>
      <section className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
        <Widget5 data={UserData} />
        <Widget6 data={UserData} />
      </section>
      <section>
        <p className="text-base-l font-semibold mt-8 mb-4">{t("Recently order")}</p>
        <Table4 />
      </section>
    </motion.section>
  )
}

export default SingleCompany