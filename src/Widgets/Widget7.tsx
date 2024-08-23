import { LazyLoadImage } from "react-lazy-load-image-component"
import { images } from "../Constants"
import { FaStar } from "react-icons/fa6"
import { useTranslation } from "react-i18next";

const Widget7 = ({ data }: any) => {
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
            {t("Done")}
          </span>
        </div>
      </div>
      <div className="mt-4 md:mt-6 px-2 flex flex-col gap-5 md:gap-7 text-sm-base font-medium text-grayColor2">
        <div className="flex_between gap-2">
          <p>{t("Date order")}</p>
          <p className="text-mainColor">{data?.day}</p>
        </div>
        <div className="flex_between gap-2">
          <p>{t("Payment Method")}</p>
          <p className="text-mainColor">{data?.payment_method}</p>
        </div>
        <div className="flex_between gap-2">
          <p>{t("Time")}</p>
          <p className="text-mainColor">{data?.time}</p>
        </div>
        <div className="flex_between gap-2">
          <p>{t("Services ID")}</p>
          <p className="text-mainColor">#{data?.id}</p>
        </div>
        <div className="flex_between gap-2">
          <p>{t("Quantity")}</p>
          <p className="text-mainColor">{data?.quantity}</p>
        </div>
        <div className="flex_between gap-2">
          <p>{t("Order Value")}</p>
          <p className="text-mainColor">{data?.value} {t("SAR")}</p>
        </div>
        <div className="flex_between gap-2">
          <p>{t("Location")}</p>
          <p className="text-mainColor">{data?.location}</p>
        </div>
      </div>
    </article>
  )
}

export default Widget7