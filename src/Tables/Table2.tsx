import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import EastIcon from '@mui/icons-material/East';

const Table2 = ({ data }: any) => {
  const { t } = useTranslation();

  return (
    <section className="bg-whiteColor p-4">
      <p className="text-l-xl font-semibold mb-3 md:mb-5">{t("Most requested services")}</p>
      <div className="table_responsive">
        <table className="table-fixed border-spacing-y-4 border-separate -mt-4">
          <tbody>
            {
              data?.slice(0, 5)?.map((ele: any, i: number) => (
                <tr key={i} className="bg-white rounded-lg">
                  <td className="font-bold text-base-l w-10 md:w-12 py-2">{i + 1}.</td>
                  <td className="text-sm-base font-semibold w-24 md:w-32 py-2">{ele?.name}</td>
                  <td className="py-2 w-44 md:w-52 xl:w-60">
                    <div className="flex_center gap-4 text-sm-base font-semibold">
                      <div className="flex gap-2">
                        {
                          ele?.workers?.map((worker: any, i: number) => (
                            <div className='flex_center' key={i}>
                              <LazyLoadImage
                                effect="blur"
                                src={worker?.image}
                                alt="profile"
                                className='w-8 rounded-full'
                              />
                            </div>
                          ))
                        }
                      </div>
                      {
                        ele?.workers?.length === 1 &&
                        <span>
                          {ele?.workers?.[0]?.name}
                        </span>
                      }
                    </div>
                  </td>
                  <td className="w-28 md:w-36 py-2">
                    <div className="custom_widget bg-yellowColor text-sm-base font-semibold">
                      {ele?.type}
                    </div>
                  </td>
                  <td className="w-28 md:w-36 py-2">
                    <div className={`custom_widget ${ele?.status === "Special" ? "bg-blueColor text-white" : "bg-skyColor2"} text-sm-base font-semibold`}>
                      {ele?.status}
                    </div>
                  </td>
                  <td className="w-28 md:w-36 py-2">
                    <div className="custom_widget bg-white text-greenColor gap-1">
                      <span className="text-base-l font-bold">{ele?.value}</span>
                      <span className="text-sm-base font-semibold">{t("SAR")}</span>
                    </div>
                  </td>
                  <td className="w-16 md:w-28 py-2">
                    <div className="flex_center">
                      <Link to={`/workers/${ele?.id}`}
                        className="hvr-icon-pulse-shrink w-14 flex items-center bg-skyColor text-white custom-rounded py-2 px-4 custom_shadow"
                      >
                        <EastIcon className='!text-lg md:!text-xl hvr-icon' />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Table2