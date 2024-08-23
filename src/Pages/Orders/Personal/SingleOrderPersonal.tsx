import { useTranslation } from "react-i18next";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { motion } from "framer-motion";
import { data } from "../../../Constants";

const SingleOrderPersonal = () => {
  const { t } = useTranslation();

  const SingleData = data?.Orders?.Personal[0]

  return (
    <motion.section
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
      className="content-container p-container">
      <div className="mt-5 md:mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-6">

          <div className="flex flex-col gap-2 md:gap-3 mb-3 md:mb-4">
            <label className="custom-label">{t("Services ID")}</label>
            <input type="text" className="custom-input" placeholder={t("Enter Services ID")} defaultValue={`#${SingleData?.id}`} />
          </div>

          <div className="flex flex-col gap-2 md:gap-3 mb-3 md:mb-4">
            <label className="custom-label">{t("Post Name")}</label>
            <input type="text" className="custom-input" placeholder={t("Enter Post Name")} defaultValue={SingleData?.postName} />
          </div>

          <div className="flex flex-col gap-2 md:gap-3 mb-3 md:mb-4">
            <label className="custom-label">{t("Tasker Name")}</label>
            <input type="text" className="custom-input" placeholder={t("Enter Tasker Name")} defaultValue={SingleData?.taskerName} />
          </div>

          <div className="flex flex-col gap-2 md:gap-3 mb-3 md:mb-4">
            <label className="custom-label">{t("Services")}</label>
            <input type="text" className="custom-input" placeholder={t("Enter Services")} defaultValue={SingleData?.services} />
          </div>

          <div className="flex flex-col gap-2 md:gap-3 mb-3 md:mb-4">
            <label className="custom-label">{t("Location")}</label>
            <input type="text" className="custom-input" placeholder={t("Enter Location")} defaultValue={SingleData?.location} />
          </div>

          <div className="grid grid-cols-2 gap-3">

            <div className="flex flex-col gap-2 md:gap-3 mb-3 md:mb-4">
              <label className="custom-label">{t("Post Date")}</label>
              <input type="text" className="custom-input" placeholder={t("Enter Post Date")} defaultValue={SingleData?.day} />
            </div>

            <div className="flex flex-col gap-2 md:gap-3 mb-3 md:mb-4">
              <label className="custom-label">{t("Time")}</label>
              <input type="text" className="custom-input" placeholder={t("Enter Time")} defaultValue={SingleData?.time} />
            </div>

          </div>

          <div className="flex flex-col gap-2 md:gap-3 mb-3 md:mb-4">
            <label className="custom-label">{t("Receiving location")}</label>
            <input type="text" className="custom-input" placeholder={t("Enter Receiving location")} defaultValue={SingleData?.receiving_location} />
          </div>

          <div className="flex flex-col gap-2 md:gap-3 mb-3 md:mb-4">
            <label className="custom-label">{t("Delivery location")}</label>
            <input type="text" className="custom-input" placeholder={t("Enter Delivery location")} defaultValue={SingleData?.delivery_location} />
          </div>


        </div>
        <div className="flex justify-end mt-8 ">
          <button
            className={`custom-button hvr-float-shadow bg-mainColor px-10 md:px-14 py-2 md:py-4`}
          >
            {1 !== 1 ? (
              <AiOutlineLoading3Quarters className="animate-spin text-2xl" />
            ) : (
              t("Accept")
            )}
          </button>
        </div>
      </div>
    </motion.section>
  )
}

export default SingleOrderPersonal