import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import { ActionModal } from "../../Components";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { images } from "../../Constants";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const AllPosters = () => {
  const { t } = useTranslation();
  const [openDialog, setOpenDialog] = useState(false);
  const [stateObject, setStateObject] = useState({});

  const handleOpenAction = () => {
    setOpenDialog(true);
  };

  const data = [
    {
      image: images?.poster,
      id: 1212
    },
    {
      image: images?.poster,
      id: 1212
    },
    {
      image: images?.poster,
      id: 1212
    },
    {
      image: images?.poster,
      id: 1212
    },
    {
      image: images?.poster,
      id: 1212
    },
    {
      image: images?.poster,
      id: 1212
    },
    {
      image: images?.poster,
      id: 1212
    },
  ]

  return (
    <motion.section
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
      className="content-container p-container">
      <ActionModal open={openDialog} setOpenDialog={setOpenDialog} {...stateObject} own={t("Poster")} />
      <section className="flex items-center justify-between flex-wrap gap-3 md:gap-5 gap-y-3 mb-6">
        <p className="page-header">{t("All posters")}</p>
        <Link
          to="/add-poster"
          className={`custom-button hover-button1 text-sm-base bg-mainColor px-8 md:px-10 py-2 md:py-4`}
        >
          {t("Add Poster")}
        </Link>
      </section>
      <section className="flex flex-col">
        {
          data?.map((ele: any, i: number) => (
            <figure className="p-6 flex items-center justify-evenly last-of-type:border-b-0 border-b-2 gap-4 md:gap-6 flex-wrap" key={i}>
              <LazyLoadImage
                src={ele?.image}
                alt="poster"
                effect="blur"
                className="w-[400px] rounded-xl"
              />
              <figcaption className="flex items-end gap-4 md:gap-6">
                <button
                  className="custom-button hover-button1 text-sm-base px-6 md:px-7 py-2 md:py-3"
                >
                  {t("Edit")}
                </button>
                <button
                  onClick={() => {
                    handleOpenAction()
                    setStateObject({
                      actionAPi: () => console.log(ele?.id),
                    })
                  }}
                  className="custom-button2 hover-button2 text-sm-base px-6 md:px-7 py-2 md:py-3"
                >
                  {t("Delete")}
                </button>
              </figcaption>
            </figure>
          ))
        }
      </section>

      <div className="flex justify-end mt-8 ">
        <button
          className={`custom-button hvr-float-shadow bg-mainColor px-10 md:px-14 py-2 md:py-4`}
        >
          {1 !== 1 ? (
            <AiOutlineLoading3Quarters className="animate-spin text-2xl" />
          ) : (
            t("Save")
          )}
        </button>
      </div>
    </motion.section>
  )
}

export default AllPosters