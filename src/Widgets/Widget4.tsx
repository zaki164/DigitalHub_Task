import { LazyLoadImage } from "react-lazy-load-image-component"
import { images } from "../Constants"
import { FaStar } from "react-icons/fa6"
import { useTranslation } from "react-i18next";

const Widget4 = () => {
  const { t } = useTranslation();

  return (
    <article className="content-container p-container">
      <div className="flex gap-4">
        <LazyLoadImage
          src={images?.person}
          alt="address"
          effect="blur"
          className="w-14 rounded-full"
        />
        <div className="flex-1 flex_between gap-4">
          <div className="flex-1">
            <p className="text-sm-base font-bold">Zaki mohsen</p>
            <p className="text-xs-sm font-bold flex"><FaStar className="text-[#F99D0C] text-base-l me-1" /> 4.8, 20 {t("Order")}</p>
          </div>
          <span className={`custom-button text-sm-base bg-mainColor px-4 md:px-6 py-1 md:py-3`}>
            {t("Active")}
          </span>
        </div>
      </div>
      <div className="mt-4 md:mt-6 px-4 md:px-8 flex flex-col gap-4 text-sm-base font-medium text-grayColor2">
        <div className="flex gap-2">
          <p className="flex-1">{t("Date order")}</p>
          <p className="flex-1 text-mainColor">20/10/2022</p>
        </div>
        <div className="flex gap-2">
          <p className="flex-1">{t("Payment Method")}</p>
          <p className="flex-1 text-mainColor">095452165</p>
        </div>
        <div className="flex gap-2">
          <p className="flex-1">{t("Quantity")}</p>
          <p className="flex-1 text-mainColor">20 {t("Piece")}</p>
        </div>
        <div className="flex gap-2">
          <p className="flex-1">{t("Order Value")}</p>
          <p className="flex-1 text-mainColor">20 {t("SAR")}</p>
        </div>
        <div className="flex gap-2">
          <p className="flex-1">{t("Location")}</p>
          <p className="flex-1 text-mainColor">Riyadh</p>
        </div>
      </div>
    </article>
  )
}

export default Widget4