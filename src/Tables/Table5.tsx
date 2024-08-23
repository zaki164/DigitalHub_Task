import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Link } from "react-router-dom";
import { LuEye } from "react-icons/lu";
import { FaTrash } from "react-icons/fa";
import { data } from "../Constants";
import { ActionModal } from "../Components";

const Table5 = () => {
  const { t } = useTranslation();
  const [openDialog, setOpenDialog] = useState(false);
  const [stateObject, setStateObject] = useState({});

  const handleOpenAction = () => {
    setOpenDialog(true);
  };

  return (
    <div className="table_responsive">
      <ActionModal open={openDialog} setOpenDialog={setOpenDialog} {...stateObject} own={t("Transfered")} />
      <table className="table-fixed">
        <thead>
          <tr className="font-semibold text-base-l border-b-2">
            <td className="w-28 md:w-36 xl:w-44">{t("Services ID")}</td>
            <td className="w-44 md:w-52 xl:w-60">{t("Post Date & Time")}</td>
            <td className="w-28 md:w-36 xl:w-44">{t("Order value")}</td>
            <td className="w-28 md:w-36 xl:w-44">{t("Account number")}</td>
            <td className="w-28 md:w-36 xl:w-44">{t("Location")}</td>
            <td className="w-28 md:w-36 xl:w-44 text-center">{t("Status")}</td>
            <td className="w-44 md:w-60 xl:w-80">{t("procedures")}</td>
          </tr>
        </thead>
        <tbody>
          {
            data?.Wallet?.slice(0, 10)?.map((ele, i: number) => (
              <tr key={i} className="mb-2 last-of-type:border-b-0 border-b-2">
                <td className="text-sm-base">
                  #{ele?.id}
                </td>
                <td className="text-sm-base">
                  {ele?.date}
                </td>
                <td className="text-sm-base">
                  {ele?.value} {t("SAR")}
                </td>
                <td className="text-sm-base">
                  {ele?.account_number}
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
                    <Link to={`/transactions/${ele?.id}`}
                      className="hvr-icon-pulse-shrink flex_center rounded-full bg-grayColor3 p-3 md:p-4"
                    >
                      <LuEye className='text-l-xl hvr-icon' />
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
  )
}

export default Table5