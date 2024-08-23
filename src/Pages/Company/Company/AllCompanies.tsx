import { useTranslation } from "react-i18next";
import { ActionModal } from "../../../Components"
import { motion } from "framer-motion";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { data } from "../../../Constants";
import { LuEye } from "react-icons/lu";
import { Link } from "react-router-dom";
import { FaPen, FaTrash } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import SelectReact from 'react-select';
import SelectColors from "../../../config/SelectColors";

const AllCompanies = () => {
  const { t } = useTranslation()
  const [name, setName] = useState<string>("");
  const [select, setSelect] = useState<string>("");
  const [openDialog, setOpenDialog] = useState(false);
  const [stateObject, setStateObject] = useState({});

  const handleOpenAction = () => {
    setOpenDialog(true);
  };

  const Option1 = [
    { value: "company1", label: 'company1' },
    { value: "company1", label: 'company1' },
    { value: "company3", label: 'company3' },
    { value: "company4", label: 'company4' },
    { value: "company5", label: 'company5' }
  ]

  return (
    <motion.section
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
      className="content-container p-container">
      <ActionModal open={openDialog} setOpenDialog={setOpenDialog} {...stateObject} own={t("Company")} />
      <section className="flex items-center flex-wrap gap-2 md:gap-3 gap-y-3 mb-6">
        <p className="page-header">{t("All companies")}</p>
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
          <div className="max-sm:w-full sm:flex-1 xl:flex-none xl:w-[230px]">
            <SelectReact
              noOptionsMessage={() => t('No option')}
              loadingMessage={() => t('Loading...')}
              options={Option1}
              styles={SelectColors}
              placeholder={t('Choose company')}
              onChange={(newValue: any) => {
                newValue && setSelect(newValue?.value);
              }}
            />
          </div>
          <Link
            to="/add-company"
            className={`max-xs:w-full custom-button hover-button1 text-sm-base bg-mainColor px-8 md:px-10 py-2`}
          >
            {t("Add company")}
          </Link>
        </div>
      </section>
      <div className="table_responsive">
        <table className="table-fixed">
          <thead>
            <tr className="font-semibold text-base-l border-b-2">
              <td className="w-44 md:w-52 xl:w-60">{t("Name")}</td>
              <td className="w-20 md:w-28 xl:w-36">{t("ID Number")}</td>
              <td className="w-16 md:w-20 xl:w-28">{t("ID Photo")}</td>
              <td className="w-44 md:w-52 xl:w-60">{t("Email")}</td>
              <td className="w-44 md:w-52 xl:w-60">{t("Number of products")}</td>
              <td className="w-20 md:w-28 xl:w-36">{t("Location")}</td>
              <td className="w-20 md:w-28 xl:w-36">{t("CR Number")}</td>
              <td className="w-20 md:w-28 xl:w-36">{t("Mobile WhatsApp")}</td>
              <td className="w-44 md:w-60 xl:w-80">{t("procedures")}</td>
            </tr>
          </thead>
          <tbody>
            {
              data?.Companies?.slice(0, 10)?.map((ele, i: number) => (
                <tr key={i} className="mb-2 last-of-type:border-b-0 border-b-2">
                  <td className="text-sm-base">
                    <div className="flex items-center gap-4">
                      <LazyLoadImage
                        src={ele?.image}
                        alt="product"
                        effect="blur"
                        className="w-10 rounded-full"
                      />
                      <span>{ele?.name_en}</span>
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
                    {ele?.products_num} {t("product")}
                  </td>
                  <td className="text-sm-base">
                    {ele?.location}
                  </td>
                  <td className="text-sm-base">
                    {ele?.cr_number}
                  </td>
                  <td className="text-sm-base">
                    {ele?.whatsAppp}
                  </td>
                  <td>
                    <div className="flex items-center gap-3 md:gap-4">
                      <Link to={`/update-company/${ele?.username}`}
                        className="hvr-icon-pulse-shrink flex_center rounded-full bg-grayColor3 text-goldColor p-3 md:p-4"
                      >
                        <FaPen className='text-l-xl hvr-icon' />
                      </Link>
                      <Link to={`/companies/${ele?.username}`}
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

export default AllCompanies