import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ActionModal } from "../../../Components";
import { data } from "../../../Constants";
import { FaPen, FaTrash } from "react-icons/fa6";

const IntroductionPages = () => {
  const { t } = useTranslation();
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
      <ActionModal open={openDialog} setOpenDialog={setOpenDialog} {...stateObject} own={t("Page")} />
      <section className="flex items-center justify-between flex-wrap gap-3 md:gap-5 gap-y-3 mb-6">
        <p className="page-header">{t("Introduction pages")}</p>
        <Link
          to="/add-introduction-page"
          className={`custom-button hover-button1 text-sm-base bg-mainColor px-8 md:px-10 py-2 md:py-4`}
        >
          {t("Add page")}
        </Link>
      </section>
      <section className="flex flex-col gap-6 px-3 md:px-6">
        {
          data?.IntroductionPages?.map((ele, i: number) => (
            <article className="p-6 bg-grayColor3/20 rounded-xl" key={i}>
              <div className="flex items-center justify-between flex-wrap gap-3 md:gap-5 gap-y-3 mb-4">
                <p className="text-base-l font-semibold">{t("Page")} {ele?.num}</p>
                <div className="flex_center gap-3 md:gap-4">
                  <Link to={`/update-introduction-page/${ele?.id}`}
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
              </div>
              <div className="text-base-l font-semibold border-b-2 p-4 text-center">{ele?.address}</div>
              <div className="text-base-l p-4 text-center">{ele?.text}</div>
            </article>
          ))
        }
      </section>
    </motion.section>
  )
}

export default IntroductionPages