import { useTranslation } from "react-i18next";
import * as Yup from 'yup'
import { useFormik } from "formik";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { motion } from "framer-motion";
import SelectReact from 'react-select';
import SelectColors2 from "../../config/SelectColors2";

const UpdateNotification = ({ data }: any) => {
  const { t } = useTranslation();

  const Schema = Yup.object().shape({
    user: Yup.string().required(t("User is required")),
    city: Yup.string().required(t("City is required")),
    english_title: Yup.string().required(t("English title is required")),
    arabic_title: Yup.string().required(t("Arabic title is required")),
    english_body: Yup.string().required(t("English body is required")),
    arabic_body: Yup.string().required(t("Arabic body is required")),
  })

  const initialValues: InitialValues = {
    user: data?.user,
    city: data?.city,
    english_title: data?.english_title,
    arabic_title: data?.arabic_title,
    english_body: data?.english_body,
    arabic_body: data?.arabic_body,
  }
  type InitialValues = {
    user: string,
    city: string,
    english_title: string,
    arabic_title: string,
    english_body: string,
    arabic_body: string,
  }

  const formik = useFormik({
    initialValues,
    validationSchema: Schema,
    onSubmit: async (values) => {
      console.log(values)
    }
  })

  const Option1 = [
    { value: "city1", label: 'city1' },
    { value: "city2", label: 'city2' },
    { value: "city3", label: 'city3' },
  ]

  const Option2 = [
    { value: "user1", label: 'user1' },
    { value: "user2", label: 'user2' },
    { value: "all", label: 'All' },
  ]

  return (
    <motion.section
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
      className="content-container p-container">
      <p className="page-header">{t("Edit notification")}</p>
      <form onSubmit={formik.handleSubmit} className="mt-5 md:mt-8" noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-6">

          <div className="flex flex-col gap-2 md:gap-3 mb-3 md:mb-4">
            <label className="custom-label">{t("User")}</label>
            <SelectReact
              noOptionsMessage={() => t('No option')}
              loadingMessage={() => t('Loading...')}
              options={Option2}
              styles={SelectColors2}
              placeholder={t('Choose user')}
              defaultValue={Option2.find(option => option.value.toLowerCase() === data?.user.toLowerCase())}
              onChange={(newValue: any) => {
                newValue && formik.setFieldValue("user", newValue?.value);
              }}
            />
            {formik.touched.user && formik.errors.user && (
              <p className="error-text">{formik.errors.user}</p>
            )}
          </div>

          <div className="flex flex-col gap-2 md:gap-3 mb-3 md:mb-4">
            <label className="custom-label">{t("City")}</label>
            <SelectReact
              noOptionsMessage={() => t('No option')}
              loadingMessage={() => t('Loading...')}
              options={Option1}
              styles={SelectColors2}
              placeholder={t('Choose city')}
              defaultValue={Option1.find(option => option.value.toLowerCase() === data?.city)}
              onChange={(newValue: any) => {
                newValue && formik.setFieldValue("city", newValue?.value);
              }}
            />
            {formik.touched.city && formik.errors.city && (
              <p className="error-text">{formik.errors.city}</p>
            )}
          </div>

          <div className="flex flex-col gap-2 md:gap-3 mb-3 md:mb-4">
            <label className="custom-label">{t("English title")}</label>
            <input type="text" className="custom-input" placeholder={t("Enter english title")} {...formik.getFieldProps('english_title')} />
            {formik.touched.english_title && formik.errors.english_title && (
              <p className="error-text">{formik.errors.english_title}</p>
            )}
          </div>

          <div className="flex flex-col gap-2 md:gap-3 mb-3 md:mb-4">
            <label className="custom-label">{t("Arabic title")}</label>
            <input type="text" className="custom-input font-Cairo" placeholder={t("Enter arabic title")} {...formik.getFieldProps('arabic_title')} />
            {formik.touched.arabic_title && formik.errors.arabic_title && (
              <p className="error-text">{formik.errors.arabic_title}</p>
            )}
          </div>

          <div className="flex flex-col gap-2 md:gap-3 mb-3 md:mb-4">
            <label className="custom-label">{t("English body")}</label>
            <input type="text" className="custom-input" placeholder={t("Enter english body")} {...formik.getFieldProps('english_body')} />
            {formik.touched.english_body && formik.errors.english_body && (
              <p className="error-text">{formik.errors.english_body}</p>
            )}
          </div>

          <div className="flex flex-col gap-2 md:gap-3 mb-3 md:mb-4">
            <label className="custom-label">{t("Arabic body")}</label>
            <input type="text" className="custom-input font-Cairo" placeholder={t("Enter arabic body")} {...formik.getFieldProps('arabic_body')} />
            {formik.touched.arabic_body && formik.errors.arabic_body && (
              <p className="error-text">{formik.errors.arabic_body}</p>
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

export default UpdateNotification