import { useTranslation } from "react-i18next";
import * as Yup from 'yup'
import { useFormik } from "formik";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useDropzone } from "react-dropzone";
import { motion } from "framer-motion";
import { ImUpload3 } from "react-icons/im";
import { FaPen } from "react-icons/fa6";
import SelectReact from 'react-select';
import SelectColors2 from "../../config/SelectColors2";

const AddPayment = () => {
  const { t } = useTranslation();

  const Schema = Yup.object().shape({
    image: Yup.mixed().required("Image is required"),
    name: Yup.string().required(t("Name is required")),
    city: Yup.string().required(t("City is required")),
  })

  const initialValues: InitialValues = {
    image: undefined,
    name: '',
    city: '',
  }
  type InitialValues = {
    image: File | undefined,
    name: string,
    city: string,
  }

  const formik = useFormik({
    initialValues,
    validationSchema: Schema,
    onSubmit: async (values) => {
      console.log(values)
    }
  })

  const onDrop = (fieldName: string, acceptedFiles: File[]) => {
    formik.setFieldValue(fieldName, acceptedFiles[0]);
  };

  const { getRootProps: getRootPropsImage, getInputProps: getInputPropsImage } = useDropzone({
    onDrop: (acceptedFiles) => onDrop('image', acceptedFiles),
    accept: {
      'image/*': ['.svg', '.webp', '.png', '.jpg', '.jpeg', '.gif']
    },
  });

  const Option1 = [
    { value: "city1", label: 'city1' },
    { value: "city2", label: 'city2' },
    { value: "city3", label: 'city3' },
  ]


  return (
    <motion.section
      initial={{ opacity: 0, x: -100, y: -100 }}
      animate={{ opacity: 1, x: 0, y: 0, transition: { delay: 0.2 } }}
      className="content-container p-container">
      <p className="page-header">{t("Add payment")}</p>
      <form onSubmit={formik.handleSubmit} className="mt-5 md:mt-8" noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-6">

          <div className="flex_center flex-col gap-1 md:col-span-2 mb-1">
            <input {...getInputPropsImage()} />
            {!formik.values.image ?
              <button
                type="button"
                {...getRootPropsImage()}
                className="custom-button2 px-10 md:px-14 py-2 md:py-3 text-base-l flex_center gap-3 hvr-float-shadow">
                {t("Upload a photo")}
                <ImUpload3 className="text-mainColor text-xl-2xl" />
              </button> :
              <div className="cursor-pointer relative"
                {...getRootPropsImage()}
              >
                <span className="absolute end-0 top-0 bg-grayColor3 p-2 rounded-full translate-x-[2px] -translate-y-[2px]">
                  <FaPen className="text-base-l text-mainColor" />
                </span>
                <img className='object-contain w-[200px] rounded-xl' src={URL.createObjectURL(formik.values.image)} alt="Image" />
              </div>
            }
            {formik.touched.image && formik.errors.image && (
              <p className="error-text">{formik.errors.image}</p>
            )}
          </div>

          <div className="flex flex-col gap-2 md:gap-3 mb-3 md:mb-4">
            <label className="custom-label">{t("Name payment")}</label>
            <input type="text" className="custom-input" placeholder={t("Enter name payment")} {...formik.getFieldProps('name')} />
            {formik.touched.name && formik.errors.name && (
              <p className="error-text">{formik.errors.name}</p>
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
              onChange={(newValue: any) => {
                newValue && formik.setFieldValue("city", newValue?.value);
              }}
            />
            {formik.touched.city && formik.errors.city && (
              <p className="error-text">{formik.errors.city}</p>
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
              t("Add")
            )}
          </button>
        </div>
      </form>
    </motion.section>
  )
}

export default AddPayment