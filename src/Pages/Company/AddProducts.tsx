import { useTranslation } from "react-i18next";
import * as Yup from 'yup'
import { useFormik } from "formik";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useDropzone } from "react-dropzone";
import { FiUpload } from "react-icons/fi";
import { motion } from "framer-motion";
import { ImUpload3 } from "react-icons/im";
import { FaPen } from "react-icons/fa6";
import SelectColors2 from "../../config/SelectColors2";
import SelectReact from 'react-select';

const AddProducts = () => {
  const { t } = useTranslation();
  const Schema = Yup.object().shape({
    image: Yup.mixed().required("Image is required"),
    name: Yup.string().required(t("Name is required")),
    section: Yup.mixed().required("Product section is required"),
    price: Yup.string().required(t("Price is required")),
    description: Yup.string().required(t("Description is required")),
  })

  const initialValues: InitialValues = {
    image: undefined,
    name: '',
    section: '',
    price: '',
    description: '',
  }
  type InitialValues = {
    image: File | undefined,
    name: string,
    section: string,
    price: string,
    description: string,
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
    { value: "section1", label: 'section1' },
    { value: "section2", label: 'section2' },
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
      className="content-container p-container">
      <p className="page-header">{t("Add product")}</p>
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
            <label className="custom-label">{t("Name products")}</label>
            <input type="text" className="custom-input" placeholder={t("Enter name products")} {...formik.getFieldProps('name')} />
            {formik.touched.name && formik.errors.name && (
              <p className="error-text">{formik.errors.name}</p>
            )}
          </div>

          <div className="flex flex-col gap-2 md:gap-3 mb-3 md:mb-4">
            <label className="custom-label">{t("Product section")}</label>
            <SelectReact
              noOptionsMessage={() => t('No option')}
              loadingMessage={() => t('Loading...')}
              options={Option1}
              styles={SelectColors2}
              placeholder={t('Choose product section')}
              onChange={(newValue: any) => {
                newValue && formik.setFieldValue("section", newValue?.value);
              }}
            />
            {formik.touched.section && formik.errors.section && (
              <p className="error-text">{formik.errors.section}</p>
            )}
          </div>

          <div className="flex flex-col gap-2 md:gap-3 mb-3 md:mb-4">
            <label className="custom-label">{t("Price")}</label>
            <input type="text" className="custom-input" placeholder={t("Enter price")} {...formik.getFieldProps('price')} />
            {formik.touched.price && formik.errors.price && (
              <p className="error-text">{formik.errors.price}</p>
            )}
          </div>

          <div className="flex flex-col gap-2 md:gap-3 mb-3 md:mb-4">
            <label className="custom-label">{t("Description")}</label>
            <input type="text" className="custom-input" placeholder={t("Enter description")} {...formik.getFieldProps('description')} />
            {formik.touched.description && formik.errors.description && (
              <p className="error-text">{formik.errors.description}</p>
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

export default AddProducts