import { useTranslation } from "react-i18next";
import { useState } from "react";
import SelectReact from 'react-select';
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaTrash } from "react-icons/fa";
import SelectColors from "../../../config/SelectColors";
import { data } from "../../../Constants";
import { ActionModal } from "../../../Components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import { FaPen } from "react-icons/fa6";

const CorporateProducts = () => {
  const { t } = useTranslation();
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
      <ActionModal open={openDialog} setOpenDialog={setOpenDialog} {...stateObject} own={t("Product")} />
      <section className="flex items-center flex-wrap gap-3 md:gap-5 gap-y-3 mb-6">
        <p className="page-header">{t("Corporate products")}</p>
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
        </div>
      </section>
      <div className="table_responsive">
        <table className="table-fixed">
          <thead>
            <tr className="font-semibold text-base-l border-b-2">
              <td className="w-28 md:w-36 xl:w-44">{t("Name product")}</td>
              <td className="w-28 md:w-36 xl:w-44">{t("Photo product")}</td>
              <td className="w-28 md:w-36 xl:w-44">{t("Product section")}</td>
              <td className="w-28 md:w-36 xl:w-44">{t("Quantity")}</td>
              <td className="w-28 md:w-36 xl:w-44">{t("Price")}</td>
              <td className="w-44 md:w-52 xl:w-60">{t("Description")}</td>
              <td className="w-44 md:w-60 xl:w-80 text-center">{t("procedures")}</td>
            </tr>
          </thead>
          <tbody>
            {
              data?.CorporateProducts?.slice(0, 10)?.map((ele, i: number) => (
                <tr key={i} className="mb-2 last-of-type:border-b-0 border-b-2">
                  <td className="text-sm-base">
                    {ele?.name}
                  </td>
                  <td className="text-sm-base">
                    <LazyLoadImage
                      src={ele?.photo_product}
                      alt="product"
                      effect="blur"
                      className="w-10"
                    />
                  </td>
                  <td className="text-sm-base">
                    {ele?.product_section}
                  </td>
                  <td className="text-sm-base">
                    {ele?.quantity}
                  </td>
                  <td className="text-sm-base">
                    {ele?.price} {t("SAR")}
                  </td>
                  <td className="text-sm-base">
                    {ele?.description}
                  </td>
                  <td>
                    <div className="flex_center gap-3 md:gap-4">
                      <Link to={`/corporate-products/${ele?.id}`}
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

export default CorporateProducts