import { useTranslation } from "react-i18next";
import * as Yup from 'yup'
import { useFormik } from "formik";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useDropzone } from "react-dropzone";
import { motion } from "framer-motion";
import { ImUpload3 } from "react-icons/im";
import { FaPen } from "react-icons/fa6";


const AddPoster = () => {
  const { t } = useTranslation();
  const Schema = Yup.object().shape({
    image: Yup.mixed().required("Image is required"),
  })

  const initialValues: InitialValues = {
    image: undefined,
  }
  type InitialValues = {
    image: File | undefined,
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

  return (
    <motion.section
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
      className="content-container p-container">
      <h2 className="page-header">{t("Add new poster")}</h2>
      <form onSubmit={formik.handleSubmit} className="mt-5 md:mt-8" noValidate>

        <div className="flex_center">
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
              <img className='object-contain w-[400px] rounded-xl' src={URL.createObjectURL(formik.values.image)} alt="Image" />
            </div>
          }
        </div>

        <div className="flex justify-end mt-8">
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

export default AddPoster