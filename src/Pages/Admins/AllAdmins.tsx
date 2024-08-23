import { useTranslation } from "react-i18next";
import { ActionModal, TablesHeader } from "../../Components"
import { motion } from "framer-motion";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { data } from "../../Constants";
import { LuEye } from "react-icons/lu";
import { Link } from "react-router-dom";
import { FaPen, FaTrash } from "react-icons/fa6";

const AllAdmins = () => {
  const { t } = useTranslation()
  const [name, setName] = useState<string>("");
  const [openDialog, setOpenDialog] = useState(false);
  const [stateObject, setStateObject] = useState({});

  const handleOpenAction = () => {
    setOpenDialog(true);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 100, x: -100 }}
      animate={{ opacity: 1, y: 0, x: 0, transition: { delay: 0.2 } }}
      className="content-container p-container">
      <ActionModal open={openDialog} setOpenDialog={setOpenDialog} {...stateObject} own={t("Admin")} />
      <TablesHeader name={name} setName={setName} title={t("All admins")} link="/add-admin" linkTitle={t("Add admin")} />
      <div className="table_responsive">
        <table className="table-fixed">
          <thead>
            <tr className="font-semibold text-base-l border-b-2">
              <td className="w-44 md:w-52 xl:w-60">{t("Name")}</td>
              <td className="w-28 md:w-36 xl:w-44">{t("ID Number")}</td>
              <td className="w-20 md:w-28 xl:w-36">{t("ID Photo")}</td>
              <td className="w-44 md:w-52 xl:w-60">{t("Email")}</td>
              <td className="w-28 md:w-36 xl:w-44">{t("Mobile WhatsApp")}</td>
              <td className="w-28 md:w-36 xl:w-44">{t("Mobile Tell")}</td>
              <td className="w-44 md:w-60 xl:w-80">{t("procedures")}</td>
            </tr>
          </thead>
          <tbody>
            {
              data?.Users?.slice(0, 10)?.map((ele, i: number) => (
                <tr key={i} className="mb-2 last-of-type:border-b-0 border-b-2">
                  <td className="text-sm-base">
                    <div className="flex items-center gap-4">
                      <LazyLoadImage
                        src={ele?.image}
                        alt="product"
                        effect="blur"
                        className="w-10 rounded-full"
                      />
                      <span>{ele?.name}</span>
                    </div>
                  </td>
                  <td className="text-sm-base">
                    {ele?.idNumber}
                  </td>
                  <td>
                    <LazyLoadImage
                      src={ele?.idPhoto}
                      alt="product"
                      effect="blur"
                      className="w-10 rounded-full"
                    />
                  </td>
                  <td className="text-sm-base">
                    {ele?.email}
                  </td>
                  <td className="text-sm-base">
                    {ele?.whatsAppp}
                  </td>
                  <td className="text-sm-base">
                    {ele?.mobile}
                  </td>
                  <td>
                    <div className="flex items-center gap-3 md:gap-4">
                      <Link to={`/update-admin/${ele?.username}`}
                        className="hvr-icon-pulse-shrink flex_center rounded-full bg-grayColor3 text-goldColor p-3 md:p-4"
                      >
                        <FaPen className='text-l-xl hvr-icon' />
                      </Link>
                      {/* <Link to={`/admins/${ele?.username}`}
                        className="hvr-icon-pulse-shrink flex_center rounded-full bg-grayColor3 p-3 md:p-4"
                      >
                        <LuEye className='text-l-xl hvr-icon' />
                      </Link> */}
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

export default AllAdmins