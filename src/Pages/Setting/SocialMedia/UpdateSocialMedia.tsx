import { useTranslation } from "react-i18next";
import * as Yup from 'yup'
import { useFormik } from "formik";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { images } from "../../../Constants";

const UpdateSocialMedia = ({ data }: any) => {
  const { t } = useTranslation();

  const Schema = Yup.object().shape({
    whatsApp: Yup.string(),
    facebook: Yup.string(),
    youtube: Yup.string(),
    telegram: Yup.string(),
    twitter: Yup.string(),
    instagram: Yup.string(),
  })

  const initialValues: InitialValues = {
    whatsApp: data?.whatsApp,
    facebook: data?.facebook,
    youtube: data?.youtube,
    telegram: data?.telegram,
    twitter: data?.twitter,
    instagram: data?.instagram,
  }
  type InitialValues = {
    whatsApp: string,
    facebook: string,
    youtube: string,
    telegram: string,
    twitter: string,
    instagram: string,
  }

  const formik = useFormik({
    initialValues,
    validationSchema: Schema,
    onSubmit: async (values) => {
      console.log(values)
    }
  })

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
      className="content-container p-container">
      <p className="page-header">{t("Social media")}</p>
      <form onSubmit={formik.handleSubmit} className="mt-10 md:mt-12" noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-6">

          <div className="flex flex-col gap-2 md:gap-3 mb-3 md:mb-4">
            <label className="custom-label flex items-center gap-3">
              <LazyLoadImage
                src={images?.whatsapp}
                alt="social media"
                effect="blur"
                className="w-7"
              />
              {t("WhatsApp")}
            </label>
            <input type="text" className="custom-input" placeholder={t("Enter link")} {...formik.getFieldProps('whatsApp')} />
            {formik.touched.whatsApp && formik.errors.whatsApp && (
              <p className="error-text">{formik.errors.whatsApp}</p>
            )}
          </div>

          <div className="flex flex-col gap-2 md:gap-3 mb-3 md:mb-4">
            <label className="custom-label flex items-center gap-3">
              <LazyLoadImage
                src={images?.facebook}
                alt="social media"
                effect="blur"
                className="w-7"
              />
              {t("Facebook")}
            </label>
            <input type="text" className="custom-input" placeholder={t("Enter link")} {...formik.getFieldProps('facebook')} />
            {formik.touched.facebook && formik.errors.facebook && (
              <p className="error-text">{formik.errors.facebook}</p>
            )}
          </div>

          <div className="flex flex-col gap-2 md:gap-3 mb-3 md:mb-4">
            <label className="custom-label flex items-center gap-3">
              <LazyLoadImage
                src={images?.youtube}
                alt="social media"
                effect="blur"
                className="w-7"
              />
              {t("Youtube")}
            </label>
            <input type="text" className="custom-input" placeholder={t("Enter link")} {...formik.getFieldProps('youtube')} />
            {formik.touched.youtube && formik.errors.youtube && (
              <p className="error-text">{formik.errors.youtube}</p>
            )}
          </div>

          <div className="flex flex-col gap-2 md:gap-3 mb-3 md:mb-4">
            <label className="custom-label flex items-center gap-3">
              <LazyLoadImage
                src={images?.telegram}
                alt="social media"
                effect="blur"
                className="w-7"
              />
              {t("Telegram")}
            </label>
            <input type="text" className="custom-input" placeholder={t("Enter link")} {...formik.getFieldProps('telegram')} />
            {formik.touched.telegram && formik.errors.telegram && (
              <p className="error-text">{formik.errors.telegram}</p>
            )}
          </div>

          <div className="flex flex-col gap-2 md:gap-3 mb-3 md:mb-4">
            <label className="custom-label flex items-center gap-3">
              <LazyLoadImage
                src={images?.twitter}
                alt="social media"
                effect="blur"
                className="w-7"
              />
              {t("Twitter")}
            </label>
            <input type="text" className="custom-input" placeholder={t("Enter link")} {...formik.getFieldProps('twitter')} />
            {formik.touched.twitter && formik.errors.twitter && (
              <p className="error-text">{formik.errors.twitter}</p>
            )}
          </div>

          <div className="flex flex-col gap-2 md:gap-3 mb-3 md:mb-4">
            <label className="custom-label flex items-center gap-3">
              <LazyLoadImage
                src={images?.instagram}
                alt="social media"
                effect="blur"
                className="w-7"
              />
              {t("Instagram")}
            </label>
            <input type="text" className="custom-input" placeholder={t("Enter link")} {...formik.getFieldProps('instagram')} />
            {formik.touched.instagram && formik.errors.instagram && (
              <p className="error-text">{formik.errors.instagram}</p>
            )}
          </div>

        </div>

        <div className="flex justify-end mt-8 ">
          <button
            type="submit"
            aria-label="Submit Form"
            disabled={
              formik?.isSubmitting || !formik?.dirty
            }
            className={`custom-button ${formik?.isSubmitting || !formik?.dirty ? "cursor-not-allowed opacity-70" : ""} hvr-float-shadow bg-mainColor px-10 md:px-14 py-2 md:py-4`}
          >
            {formik?.isSubmitting ? (
              <AiOutlineLoading3Quarters className="animate-spin text-2xl" />
            ) : (
              t("Save")
            )}
          </button>
        </div>
      </form>
    </motion.section>
  )
}

export default UpdateSocialMedia