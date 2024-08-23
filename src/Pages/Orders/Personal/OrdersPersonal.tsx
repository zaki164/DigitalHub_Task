import { useTranslation } from "react-i18next";
import { useState } from "react";
import SelectReact from 'react-select';
import { Link } from "react-router-dom";
import { LuEye } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { FaTrash } from "react-icons/fa";
import SelectColors from "../../../config/SelectColors";
import { data } from "../../../Constants";
import { ActionModal } from "../../../Components";
import { motion } from "framer-motion";

const OrdersPersonal = () => {
  const { t } = useTranslation();
  const [name, setName] = useState<string>("");
  const [select, setSelect] = useState<string>("");
  const [openDialog, setOpenDialog] = useState(false);
  const [stateObject, setStateObject] = useState({});

  const handleOpenAction = () => {
    setOpenDialog(true);
  };

  const Option1 = [
    { value: "request1", label: 'request1' },
    { value: "request2", label: 'request2' }
  ]

  return (
    <motion.section
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
      className="content-container p-container">
      <ActionModal open={openDialog} setOpenDialog={setOpenDialog} {...stateObject} own={t("Order")} />
      <section className="flex items-center flex-wrap gap-2 md:gap-3 gap-y-3 mb-6">
        <p className="page-header">{t("Current orders")} ({t("Personal")})</p>
        <div className="w-full md:flex-1 justify-end flex flex-wrap gap-6 md:gap-8">
          <div className="max-sm:w-full sm:flex-1 xl:flex-none xl:w-[300px] relative  flex_center rounded-xl border border-grayColor4 ps-12 pe-6 py-2">
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
          <div className="max-sm:w-full sm:flex-1 xl:flex-none xl:w-[230px]">
            <SelectReact
              noOptionsMessage={() => t('No option')}
              loadingMessage={() => t('Loading...')}
              options={Option1}
              styles={SelectColors}
              placeholder={t('Type of Request')}
              onChange={(newValue: any) => {
                newValue && setSelect(newValue?.value);
              }}
            />
          </div>
        </div>
      </section>
      <div className="table_responsive">
        <table className="table-fixed">
          <thead>
            <tr className="font-semibold text-base-l border-b-2">
              <td className="w-28 md:w-36 xl:w-44">{t("Services ID")}</td>
              <td className="w-28 md:w-36 xl:w-44">{t("Post Name")}</td>
              <td className="w-28 md:w-36 xl:w-44">{t("Tasker Name")}</td>
              <td className="w-28 md:w-36 xl:w-44">{t("Services")}</td>
              <td className="w-44 md:w-52 xl:w-60">{t("Post Date & Time")}</td>
              <td className="w-28 md:w-36 xl:w-44">{t("Location")}</td>
              <td className="w-28 md:w-36 xl:w-44 text-center">{t("Status")}</td>
              <td className="w-44 md:w-60 xl:w-80">{t("procedures")}</td>
            </tr>
          </thead>
          <tbody>
            {
              data?.Orders?.Personal?.slice(0, 10)?.map((ele: any, i: number) => (
                <tr key={i} className="mb-2 last-of-type:border-b-0 border-b-2">
                  <td className="text-sm-base">
                    #{ele?.id}
                  </td>
                  <td className="text-sm-base">
                    {ele?.postName}
                  </td>
                  <td className="text-sm-base">
                    {ele?.taskerName}
                  </td>
                  <td className="text-sm-base">
                    {ele?.services}
                  </td>
                  <td className="text-sm-base">
                    {ele?.date}
                  </td>
                  <td className="text-sm-base">
                    {ele?.location}
                  </td>
                  <td>
                    <div className={`max-w-[150px] custom_widget bg-[#FAFF0A]/10 text-yellowColor text-sm-base`}>
                      {ele?.status}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center gap-3 md:gap-4">
                      <button
                        onClick={() => {
                          handleOpenAction()
                          setStateObject({
                            actionAPi: () => console.log(ele?.username),
                            act: "Accept"
                          })
                        }}
                        className="custom-button2 hvr-grow px-4 md:px-5 py-2 md:py-3 text-sm-base custom_shadow"
                      >
                        {t("Accept")}
                      </button>
                      <Link to={`/orders-personal/${ele?.username}`}
                        className="hvr-icon-pulse-shrink flex_center rounded-full bg-grayColor3 p-3 md:p-4"
                      >
                        <LuEye className='text-l-xl hvr-icon' />
                      </Link>
                      <button
                        onClick={() => {
                          handleOpenAction()
                          setStateObject({
                            actionAPi: () => console.log(ele?.username),
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

export default OrdersPersonal