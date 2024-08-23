import { useTranslation } from "react-i18next";
import * as Yup from 'yup'
import { useFormik } from "formik";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { motion } from "framer-motion";

const UpdateLinks = ({ data }: any) => {
  const { t } = useTranslation();

  const Schema = Yup.object().shape({
    android: Yup.string(),
    apple: Yup.string(),
  })

  const initialValues: InitialValues = {
    android: data?.android,
    apple: data?.apple,
  }
  type InitialValues = {
    android: string,
    apple: string,
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
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
      className="content-container p-container">
      <p className="page-header">{t("Application download links")}</p>
      <form onSubmit={formik.handleSubmit} className="mt-10 md:mt-12" noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-6">

          <div className="flex flex-col gap-2 md:gap-3 mb-3 md:mb-4">
            <label className="custom-label">{t("Link to download the application (Android)")}</label>
            <input type="text" className="custom-input" placeholder={t("Enter link")} {...formik.getFieldProps('android')} />
            {formik.touched.android && formik.errors.android && (
              <p className="error-text">{formik.errors.android}</p>
            )}
          </div>

          <div className="flex flex-col gap-2 md:gap-3 mb-3 md:mb-4">
            <label className="custom-label">{t("Link to download the application (iPhone)")}</label>
            <input type="text" className="custom-input" placeholder={t("Enter link")} {...formik.getFieldProps('apple')} />
            {formik.touched.apple && formik.errors.apple && (
              <p className="error-text">{formik.errors.apple}</p>
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

export default UpdateLinks