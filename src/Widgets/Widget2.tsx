import { useTranslation } from "react-i18next";
import Chart1 from "../Charts/Chart1";
import Chart2 from "../Charts/Chart2";

const Widget2 = ({ data }: any) => {
  const { t } = useTranslation();
  return (
    <section className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-6 xl:gap-3 2xl:gap-6">
      <div className="xl:col-span-2">
        <div className="content-container p-container">
          <p className="text-base-l font-bold">{t("Order status")}</p>
          <Chart1 data={data?.chart1} />
        </div>
      </div>
      <div className="xl:col-span-1">
        <div className="content-container p-container">
          <p className="text-base-l font-bold">{t("Scalability")}</p>
          <Chart2 data={data?.chart2} />
        </div>
      </div>
    </section>
  )
}

export default Widget2