import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { data } from "../../Constants";
import { ActionModal, TablesHeader } from "../../Components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import { FaPen } from "react-icons/fa6";

const AllPayments = () => {
  const { t } = useTranslation();
  const [name, setName] = useState<string>("");
  const [openDialog, setOpenDialog] = useState(false);
  const [stateObject, setStateObject] = useState({});

  const handleOpenAction = () => {
    setOpenDialog(true);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
      className="content-container p-container">
      <ActionModal open={openDialog} setOpenDialog={setOpenDialog} {...stateObject} own={t("payment")} />
      <TablesHeader name={name} setName={setName} title={t("All payment")} link="/add-payment" linkTitle={t("Add payment")} />
      <div className="table_responsive">
        <table className="table-fixed">
          <thead>
            <tr className="font-semibold text-base-l border-b-2">
              <td className="w-44 md:w-52 xl:w-60 text-center">{t("Name")}</td>
              <td className="w-44 md:w-52 xl:w-60 text-center">{t("Users number")}</td>
              <td className="w-44 md:w-52 xl:w-60 text-center">{t("City")}</td>
              <td className="w-44 md:w-60 xl:w-80 text-center">{t("procedures")}</td>
            </tr>
          </thead>
          <tbody>
            {
              data?.Payments?.slice(0, 10)?.map((ele: any, i: number) => (
                <tr key={i} className="mb-2 last-of-type:border-b-0 border-b-2 ">
                  <td className="text-sm-base text-center">
                    <div className="flex_center gap-4">
                      <LazyLoadImage
                        src={ele?.image}
                        alt="product"
                        effect="blur"
                        className="w-10 rounded-full"
                      />
                      <span>{ele?.name}</span>
                    </div>
                  </td>
                  <td className="text-sm-base text-center">
                    {ele?.users_number}
                  </td>
                  <td className="text-sm-base text-center">
                    {ele?.city}
                  </td>
                  <td>
                    <div className="flex_center gap-3 md:gap-4">
                      <Link to={`/update-payment/${ele?.id}`}
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

export default AllPayments