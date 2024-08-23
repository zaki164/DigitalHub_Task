import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { data } from "../../../Constants";
import { ActionModal, TablesHeader } from "../../../Components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import { FaPen } from "react-icons/fa6";

const SupportedCities = () => {
  const { t } = useTranslation();
  const [name, setName] = useState<string>("");
  const [openDialog, setOpenDialog] = useState(false);
  const [stateObject, setStateObject] = useState({});

  const handleOpenAction = () => {
    setOpenDialog(true);
  };

  return (
    <motion.section
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
      className="content-container p-container">
      <ActionModal open={openDialog} setOpenDialog={setOpenDialog} {...stateObject} own={t("City")} />
      <TablesHeader name={name} setName={setName} title={t("Supported cities")} link="/add-city" linkTitle={t("Add city")} />
      <div className="table_responsive">
        <table className="table-fixed">
          <thead>
            <tr className="font-semibold text-base-l border-b-2">
              <td className="w-44 md:w-52 xl:w-60">{t("City name")}</td>
              <td className="w-44 md:w-52 xl:w-60">{t("Users number")}</td>
              <td className="w-44 md:w-60 xl:w-80 text-center">{t("procedures")}</td>
            </tr>
          </thead>
          <tbody>
            {
              data?.Cities?.slice(0, 10)?.map((ele, i: number) => (
                <tr key={i} className="mb-2 last-of-type:border-b-0 border-b-2 ">
                  <td className="text-sm-base">
                    {ele?.name}
                  </td>
                  <td className="text-sm-base">
                    {ele?.users_number} {t("Products")}
                  </td>
                  <td>
                    <div className="flex_center gap-3 md:gap-4">
                      <Link to={`/update-city/${ele?.id}`}
                        className="hvr-icon-pulse-shrink flex_center rounded-full bg-grayColor3 text-goldColor p-3 md:p-4"
                      >
                        <FaPen className='text-l-xl hvr-icon' />
                      </Link>
                      <button
                        onClick={() => {
                          handleOpenAction()
                          setStateObject({
                            actionAPi: () => console.log(ele?.id),
                          })
                        }}
                        className="hvr-icon-pulse-shrink flex_center rounded-full bg-grayColor3 text-redColor p-3 md:p-4"
                      >
                        <FaTrash className='text-l-xl hvr-icon' />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </motion.section>
  )
}

export default SupportedCities