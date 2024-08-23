import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { images } from "../Constants";
import { FaPen, FaStar, FaTrash } from "react-icons/fa6";

const Widget3 = () => {
  const { t } = useTranslation();

  return (
    <article className="content-container p-container">
      <p className="text-base-l font-semibold mb-3">{t("Address delivered")}</p>
      <div className="flex gap-4 px-2 md:px-4 py-1 md:py-2 border-2 rounded-2xl border-grayColor3/50">
        <LazyLoadImage
          src={images?.compass}
          alt="address"
          effect="blur"
          className="w-14"
        />
        <div className="flex-1 flex_between gap-4">
          <div className="flex-1">
            <p className="text-sm-base font-bold">{t("Home")}</p>
            <p className="text-sm-base text-grayColor">160 Talaat Harb Street, Toril, MansouraTalaat Harb Street, Toril</p>
          </div>
          <button className="text-mainColor">
            <FaPen className='text-base-l hvr-pulse-grow' />
          </button>
        </div>
      </div>
      <p className="text-base-l font-semibold mb-3 mt-5">{t("Order list")}</p>
      <div className="flex gap-4 px-2 md:px-4 py-1 md:py-2 border-2 rounded-2xl border-grayColor3/50 mb-1">
        <LazyLoadImage
          src={images?.chair}
          alt="address"
          effect="blur"
          className="w-14"
        />
        <div className="flex-1 flex_between gap-4">
          <div className="flex-1">
            <p className="text-sm-base font-bold flex">Soft chair <FaStar className="text-[#F99D0C] text-base-l ms-2 me-1" /> 4.3</p>
            <p className="text-sm-base text-grayColor">Chair</p>
            <p className="text-sm-base font-bold">180.00 SAR | QTY : 2</p>
          </div>
          <button className="text-mainColor">
            <FaTrash className='text-base-l hvr-pulse-grow' />
          </button>
        </div>
      </div>
    </article>
  )
}

export default Widget3