import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaTrash } from "react-icons/fa";
import { data } from "../../Constants";
import { ActionModal } from "../../Components";
import { motion } from "framer-motion";
import { FaPen } from "react-icons/fa6";

const AllNotifications = () => {
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
      <ActionModal open={openDialog} setOpenDialog={setOpenDialog} {...stateObject} own={t("Notification")} />
      <section className="flex items-center flex-wrap gap-3 md:gap-5 gap-y-3 mb-6">
        <p className="page-header">{t("View Notification")}</p>
        <div className="w-full md:flex-1 justify-end flex flex-wrap gap-6 md:gap-8">
          <div className="max-sm:w-full sm:flex-1 xl:flex-none xl:w-[300px] relative flex_center rounded-xl border border-grayColor4 ps-12 pe-6 py-2">
            <input
              type="text"
              placeholder={t("Search")}
              value={name}
              className="outline-none caret-grayColor4 placeholder:text-grayColor4 bg-transparent w-full"
              onChange={(e) => setName(e.target.value)}
            />
            <span className="absolute start-4 top-1/2 -translate-y-1/2 text-l-xl text-[#AEAEAE]">
              <CiSearch />
            </span>
          </div>
        </div>
      </section>
      <div className="table_responsive">
        <table className="table-fixed">
          <thead>
            <tr className="font-semibold text-base-l border-b-2">
              <td className="w-28 md:w-36 xl:w-44">{t("User")}</td>
              <td className="w-28 md:w-36 xl:w-44">{t("City")}</td>
              <td className="w-28 md:w-36 xl:w-44">{t("English title")}</td>
              <td className="w-28 md:w-36 xl:w-44">{t("Arabic title")}</td>
              <td className="w-44 md:w-52 xl:w-60">{t("English body")}</td>
              <td className="w-44 md:w-52 xl:w-60">{t("Arabic body")}</td>
              <td className="w-44 md:w-60 xl:w-80">{t("procedures")}</td>
            </tr>
          </thead>
          <tbody>
            {
              data?.Notifications?.slice(0, 10)?.map((ele: any, i: number) => (
                <tr key={i} className="mb-2 last-of-type:border-b-0 border-b-2">
                  <td className="text-sm-base">
                    {ele?.user}
                  </td>
                  <td className="text-sm-base">
                    {ele?.city}
                  </td>
                  <td className="text-sm-base">
                    {ele?.english_title}
                  </td>
                  <td className="text-sm-base font-Cairo">
                    {ele?.arabic_title}
                  </td>
                  <td className="text-sm-base text-pretty">
                    {ele?.english_body}
                  </td>
                  <td className="text-sm-base text-pretty font-Cairo">
                    {ele?.arabic_body}
                  </td>
                  <td>
                    <div className="flex items-center gap-3 md:gap-4">
                      <Link to={`/update-notification/${ele?.id}`}
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

export default AllNotifications