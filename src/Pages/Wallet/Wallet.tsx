import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { StepperCustom, TabFilters } from "../../Components";
import { data } from "../../Constants";
import { Widget7 } from "../../Widgets";
import { Table5 } from "../../Tables";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Wallet = () => {
  const { t } = useTranslation();
  const [ownData, setOwnData] = useState("requests");

  return (
    <motion.section
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
      className="content-container p-container">
      <p className="page-header mb-6">{t("Wallet")}</p>
      <TabFilters
        titles={[t("Transfer requests"), t("Conversion")]}
        filters={["requests", "conversion"]}
        ownData={ownData}
        setOwnData={setOwnData}
      />
      <motion.section
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
        key={ownData}
      >
        {
          ownData === "requests" ?
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Widget7 data={data?.Wallet[0]} />
                <article className="content-container p-container">
                  <p className="font-semibold text-base-l mb-6">{t("Order status")}</p>
                  <StepperCustom />
                </article>
              </div>
              <div className="flex justify-end mt-8 ">
                <button
                  type="button"
                  aria-label="Transformation button"
                  className={`custom-button hvr-float-shadow bg-mainColor px-6 md:px-8 py-2 md:py-4`}
                >
                  {1 !== 1 ? (
                    <AiOutlineLoading3Quarters className="animate-spin text-2xl" />
                  ) : (
                    t("Transformation")
                  )}
                </button>
              </div>
            </>
            :
            <Table5 />
        }
      </motion.section>
    </motion.section>
  )
}

export default Wallet