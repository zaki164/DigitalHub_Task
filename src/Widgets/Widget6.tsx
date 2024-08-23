import { LazyLoadImage } from "react-lazy-load-image-component"
import { images } from "../Constants"
import { useTranslation } from "react-i18next"

const Widget6 = ({ data }: any) => {
  const { t } = useTranslation();

  return (
    <article className="content-container p-container">
      <p className="text-base-l font-semibold mb-3">{t("Latest activity")}</p>
      <div className="flex gap-4 py-1 md:py-2">
        <LazyLoadImage
          src={images?.person}
          alt="image"
          effect="blur"
          className="w-14 rounded-full"
        />
        <div className="flex-1">
          <p className="text-sm-base font-bold">Mohamed Accepted Ahmer Request</p>
          <p className="text-sm-base text-grayColor">2 min ago</p>
        </div>
      </div>
      <div className="flex gap-4 py-1 md:py-2">
        <LazyLoadImage
          src={images?.person}
          alt="image"
          effect="blur"
          className="w-14 rounded-full"
        />
        <div className="flex-1">
          <p className="text-sm-base font-bold">Mohamed Accepted Ahmer Request</p>
          <p className="text-sm-base text-grayColor">2 min ago</p>
        </div>
      </div>
      <div className="flex gap-4 py-1 md:py-2">
        <LazyLoadImage
          src={images?.person}
          alt="image"
          effect="blur"
          className="w-14 rounded-full"
        />
        <div className="flex-1">
          <p className="text-sm-base font-bold">Mohamed Accepted Ahmer Request</p>
          <p className="text-sm-base text-grayColor">2 min ago</p>
        </div>
      </div>
      <div className="flex gap-4 py-1 md:py-2">
        <LazyLoadImage
          src={images?.person}
          alt="image"
          effect="blur"
          className="w-14 rounded-full"
        />
        <div className="flex-1">
          <p className="text-sm-base font-bold">Mohamed Accepted Ahmer Request</p>
          <p className="text-sm-base text-grayColor">2 min ago</p>
        </div>
      </div>
    </article>
  )
}

export default Widget6