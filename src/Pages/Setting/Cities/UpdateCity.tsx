import { useTranslation } from "react-i18next";
import * as Yup from 'yup'
import { useFormik } from "formik";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { motion } from "framer-motion";

const UpdateCity = ({ data }: any) => {
  const { t } = useTranslation();

  const Schema = Yup.object().shape({
    name: Yup.string().required(t("Name is required")),
  })

  const initialValues: InitialValues = {
    name: data?.name,
  }
  type InitialValues = {
    name: string,
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
      initial={{ opacity: 0, x: -100, y: -100 }}
      animate={{ opacity: 1, x: 0, y: 0, transition: { delay: 0.2 } }}
      className="content-container p-container">
      <p className="page-header">{t("Edit city")}</p>
      <form onSubmit={formik.handleSubmit} className="mt-5 md:mt-8" noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-6">

          <div className="flex flex-col gap-2 md:gap-3 mb-3 md:mb-4">
            <label className="custom-label">{t("City name")}</label>
            <input type="text" className="custom-input" placeholder={t("Enter city name")} {...formik.getFieldProps('name')} />
            {formik.touched.name && formik.errors.name && (
              <p className="error-text">{formik.errors.name}</p>
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
              t("Update")
            )}
          </button>
        </div>
      </form>
    </motion.section>
  )
}

export default UpdateCity