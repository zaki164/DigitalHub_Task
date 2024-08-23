import { useTranslation } from "react-i18next";
import * as Yup from 'yup'
import { useFormik } from "formik";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useDropzone } from "react-dropzone";
import { FiUpload } from "react-icons/fi";
import { motion } from "framer-motion";
import { images } from "../../../Constants";
import { FaPen } from "react-icons/fa6";

const UpdateCompany = ({ data }: any) => {
  const { t } = useTranslation();
  const Schema = Yup.object().shape({
    image: Yup.mixed().required("Image is required"),
    name_en: Yup.string().required(t("English name is required")),
    name_ar: Yup.string().required(t("Arabic name is required")),
    email: Yup.string().required(t("Email is required"))
      .email("Wrong email format")
      .matches(
        /^[\w.!#$%&'*+/=?^_`{|}~-]+@([\w-]+\.)+[\w-]{2,4}$/,
        t("Wrong email format")
      ),
    ID_Number: Yup.string().required(t("ID Number is required")),
    ID_Photo: Yup.mixed().required("ID Photo is required"),
    mobile_whatsApp: Yup.string().required(t('WhatsApp is required'))
      .matches(
        /^(5)([0-9]{8})$/,
        t('Wrong Phone format')),
    location: Yup.string().required(t("Location is required")),
  })

  const initialValues: InitialValues = {
    image: undefined,
    name_en: data?.name_en,
    name_ar: data?.name_ar,
    email: data?.email,
    ID_Number: data?.ID_Number,
    ID_Photo: undefined,
    mobile_whatsApp: data?.mobile_whatsApp,
    location: data?.location,
  }
  type InitialValues = {
    image: File | undefined,
    name_en: string,
    name_ar: string,
    email: string,
    ID_Number: string,
    ID_Photo: File | undefined,
    mobile_whatsApp: string,
    location: string,
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

  const { getRootProps: getRootPropsIDPhoto, getInputProps: getInputPropsIDPhoto } = useDropzone({
    onDrop: (acceptedFiles) => onDrop('ID_Photo', acceptedFiles),
    accept: {
      'image/*': ['.svg', '.webp', '.png', '.jpg', '.jpeg', '.gif']
    },
  });

  return (
    <motion.section
      initial={{ opacity: 0, x: -100, y: -100 }}
      animate={{ opacity: 1, x: 0, y: 0, transition: { delay: 0.2 } }}
      className="content-container p-container">
      <p className="page-header">{t("Edit company")}</p>
      <form onSubmit={formik.handleSubmit} className="mt-5 md:mt-8" noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-6">

          <div className="flex_center flex-col gap-1 md:col-span-2 mb-1">
            <input {...getInputPropsImage()} />
            <div
              className="cursor-pointer w-[200px] relative"
              {...getRootPropsImage()}
            >
              <span className="absolute end-0 top-0 bg-grayColor3 p-2 rounded-full translate-x-[2px] -translate-y-[2px]">
                <FaPen className="text-base-l text-mainColor" />
              </span>
              {!formik.values.image ? !data?.image
                ?
                <img className='object-contain w-full rounded-xl' src={images?.blank_image} alt="Image" />
                :
                <img className='object-contain w-full rounded-xl' src={data?.image} alt="Image" />
                :
                <img className='object-contain w-full rounded-xl' src={URL.createObjectURL(formik.values.image)} alt="Image" />
              }
            </div>
            {formik.touched.image && formik.errors.image && (
              <p className="error-text">{formik.errors.image}</p>
            )}
          </div>

          <div className="flex flex-col gap-2 md:gap-3 mb-3 md:mb-4">
            <label className="custom-label">{t("English name")}</label>
            <input type="text" className="custom-input" placeholder={t("Enter english name")} {...formik.getFieldProps('name_en')} />
            {formik.touched.name_en && formik.errors.name_en && (
              <p className="error-text">{formik.errors.name_en}</p>
            )}
          </div>

          <div className="flex flex-col gap-2 md:gap-3 mb-3 md:mb-4">
            <label className="custom-label">{t("Arabic name")}</label>
            <input type="text" className="custom-input font-Cairo" placeholder={t("Enter arabic name")} {...formik.getFieldProps('name_ar')} />
            {formik.touched.name_ar && formik.errors.name_ar && (
              <p className="error-text">{formik.errors.name_ar}</p>
            )}
          </div>

          <div className="flex flex-col gap-2 md:gap-3 mb-3 md:mb-4">
            <label className="custom-label">{t("Email")}</label>
            <input type="text" className="custom-input" placeholder={t("Enter Email")} {...formik.getFieldProps('email')} />
            {formik.touched.email && formik.errors.email && (
              <p className="error-text">{formik.errors.email}</p>
            )}
          </div>

          <div className="flex flex-col gap-2 md:gap-3 mb-3 md:mb-4">
            <label className="custom-label">{t("ID Number")}</label>
            <input type="text" className="custom-input" placeholder={t("Enter ID Number")} {...formik.getFieldProps('ID_Number')} />
            {formik.touched.ID_Number && formik.errors.ID_Number && (
              <p className="error-text">{formik.errors.ID_Number}</p>
            )}
          </div>

          <div className="flex flex-col gap-2 md:gap-3 mb-3 md:mb-4">
            <label className="custom-label">{t("ID Photo")}</label>
            <div className="bg-whiteColor text-grayColor custom-rounded ps-4 flex items-center justify-between flex-wrap text-base-l">
              <input {...getInputPropsIDPhoto()} />
              <div className="py-4 px-3">
                <div className="w-36">
                  {!formik.values.ID_Photo ? !data?.idPhoto
                    ?
                    <img className='object-contain w-full rounded-xl' src={images?.blank_image} alt="ID Photo" />
                    :
                    <img className='object-contain w-full rounded-xl' src={data?.idPhoto} alt="ID Photo" />
                    :
                    <img className='object-contain w-full rounded-xl' src={URL.createObjectURL(formik.values.ID_Photo)} alt="ID Photo" />
                  }
                </div>
              </div>
              <button
                className="bg-mainColor rounded-full py-3 md:py-4 px-4 md:px-7 text-white flex_center gap-2 text-l-xl"
                aria-label="upload image"
                type="button"
                {...getRootPropsIDPhoto()}
              >
                <FiUpload />
              </button>
            </div>
            {formik.touched.ID_Photo && formik.errors.ID_Photo && (
              <p className="error-text">{formik.errors.ID_Photo}</p>
            )}
          </div>

          <div className="flex flex-col gap-2 md:gap-3 mb-3 md:mb-4">
            <label className="custom-label">{t("Mobile whatsApp")}</label>
            <input type="text" className="custom-input" maxLength={9} placeholder={t("Enter whatsApp")} {...formik.getFieldProps('mobile_whatsApp')} />
            {formik.touched.mobile_whatsApp && formik.errors.mobile_whatsApp && (
              <p className="error-text">{formik.errors.mobile_whatsApp}</p>
            )}
          </div>

          <div className="flex flex-col gap-2 md:gap-3 mb-3 md:mb-4">
            <label className="custom-label">{t("Location")}</label>
            <input type="text" className="custom-input" placeholder={t("Enter location")} {...formik.getFieldProps('location')} />
            {formik.touched.location && formik.errors.location && (
              <p className="error-text">{formik.errors.location}</p>
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

export default UpdateCompany