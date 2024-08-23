import CountUp from 'react-countup';
import { useTranslation } from 'react-i18next';
import { PiTrendUp, PiTrendDown } from "react-icons/pi";


const Shape1 = ({ number, title, icon, percentage, up }: { number: number, title: string, icon: any, percentage: number, up: boolean }) => {
  const { t, i18n } = useTranslation()

  return (
    <div className='content-container'>
      <div className='flex flex-wrap gap-2 border-b-2 p-3 md:p-4'>
        <div className='flex-1'>
          <p className='text-base-l font-medium'>{title}</p>
          <p className='text-l-xl font-bold'><CountUp end={number} key={i18n.language} /></p>
        </div>
        <div className='text-l-xl'>
          <div className='bg-grayColor3 p-4 rounded-xl text-xl-2xl'>
            {icon}
          </div>
        </div>
      </div>
      <div className='text-sm-base font-semibold p-3 md:p-4 flex'>
        <div className={`${up ? "text-[#75F94C]" : "text-redColor"}`}>
          {percentage}%
          <span className='inline-flex mx-2'>
            {up ? <PiTrendUp /> : <PiTrendDown />}
          </span>
        </div>
        {t("Up from past week")}
      </div>
    </div>
  )
}

export default Shape1