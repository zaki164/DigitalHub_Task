import { useTranslation } from "react-i18next";
import { Shape1 } from "../Components"

const Widget1 = ({ data }: any) => {
  const { t } = useTranslation();
  return (
    <section
      className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-6 xl:gap-3 2xl:gap-6"
    >
      <Shape1 number={data?.users?.number} title={t("Users Number")} icon={data?.users?.icon} percentage={data?.users?.percentage} up={data?.users?.up} />
      <Shape1 number={data?.company?.number} title={t("Company Number")} icon={data?.company?.icon} percentage={data?.company?.percentage} up={data?.company?.up} />
      <Shape1 number={data?.order?.number} title={t("Orders number")} icon={data?.order?.icon} percentage={data?.order?.percentage} up={data?.order?.up} />
      <Shape1 number={data?.delivered?.number} title={t("Order Deliverd")} icon={data?.delivered?.icon} percentage={data?.delivered?.percentage} up={data?.delivered?.up} />
    </section>
  )
}

export default Widget1