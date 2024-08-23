import { LazyLoadImage } from "react-lazy-load-image-component"
import CountUp from 'react-countup';
import { FaStar } from "react-icons/fa6"
import { useTranslation } from "react-i18next";

const Widget5 = ({ data }: any) => {
  const { t, i18n } = useTranslation();

  return (
    <article className="content-container p-container">
      <div className="flex gap-4">
        <LazyLoadImage
          src={data?.image}
          alt="address"
          effect="blur"
          className="w-14 rounded-full"
        />
        <div className="flex-1 flex_between gap-4">
          <div className="flex-1">
            <p className="text-sm-base font-bold">{data?.name}</p>
            <p className="text-xs-sm font-bold flex"><FaStar className="text-[#F99D0C] text-base-l me-1" /> 4.8, 20 {t("Order")}</p>
          </div>
          <span className={`custom-button text-sm-base bg-mainColor px-4 md:px-6 py-1 md:py-3`}>
            {t("Active")}
          </span>
        </div>
      </div>
      <div className="flex justify-between max-sm:flex-col gap-4 md:gap-6 my-6 md:my-8 text-sm-base font-medium">
        <div className="p-2 md:p-4 border-2 rounded-2xl border-grayColor3/50 w-full sm:flex-1 flex justify-between items-center flex-col gap-2 md:gap-4">
          <p className="text-grayColor2">{t("Total Earnnigs")}</p>
          <p><CountUp end={data?.totalEarning} key={i18n.language} /> {t("SAR")}</p>
        </div>
        <div className="p-2 md:p-4 border-2 rounded-2xl border-grayColor3/50 w-full sm:flex-1 flex justify-between items-center flex-col gap-2 md:gap-4">
          <p className="text-grayColor2">{t("Wallet")}</p>
          <p><CountUp end={data?.wallet} key={i18n.language} /> {t("SAR")}</p>
        </div>
        <div className="p-2 md:p-4 border-2 rounded-2xl border-grayColor3/50 w-full sm:flex-1 flex justify-between items-center flex-col gap-2 md:gap-4">
          <p className="text-grayColor2">{t("Working Houres")}</p>
          <p><CountUp end={data?.workingHours} key={i18n.language} /> {t("SAR")}</p>
        </div>
      </div>
      <div className="px-4 md:px-8 flex flex-col gap-4 text-sm-base font-medium text-grayColor2">
        <div className="flex gap-2">
          <p className="flex-1">{t("Email")}</p>
          <p className="flex-1 text-mainColor">{data?.email}</p>
        </div>
        <div className="flex gap-2">
          <p className="flex-1">{t("Phone number")}</p>
          <p className="flex-1 text-mainColor">{data?.mobile}</p>
        </div>
        <div className="flex gap-2">
          <p className="flex-1">{t("Location")}</p>
          <p className="flex-1 text-mainColor">{data?.location}</p>
        </div>
      </div>
    </article>
  )
}

export default Widget5