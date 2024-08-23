import { useTranslation } from "react-i18next";
import * as Yup from 'yup'
import { useFormik } from "formik";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useDropzone } from "react-dropzone";
import { motion } from "framer-motion";
import { images } from "../../../Constants";
import { FaPen } from "react-icons/fa6";

const UpdateProduct = ({ data }: any) => {
  const { t } = useTranslation();
  const Schema = Yup.object().shape({
    image: Yup.mixed().required("Image is required"),
    name: Yup.string().required(t("Name is required")),
    price: Yup.string().required(t("Price is required")),
    product_section: Yup.string().required(t("Product section is required")),
    quantity: Yup.string().required(t("Quantity is required")),
    description: Yup.string().required(t("Description is required")),
  })

  const initialValues: InitialValues = {
    image: undefined,
    name: data?.name,
    price: data?.price,
    product_section: data?.product_section,
    quantity: data?.quantity,
    description: data?.description,
  }
  type InitialValues = {
    image: File | undefined,
    name: string,
    price: string,
    product_section: string,
    quantity: string,
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

  return (
    <motion.section
      initial={{ opacity: 0, x: 100, y: 100 }}
      animate={{ opacity: 1, x: 0, y: 0, transition: { delay: 0.2 } }}
      className="content-container p-container">
      <p className="page-header">{t("Edit product")}</p>
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
              {!formik.values.image ? !data?.photo_product
                ?
                <img className='object-contain w-full rounded-xl' src={images?.blank_image} alt="Image" />
                :
                <img className='object-contain w-full rounded-xl' src={data?.photo_product} alt="Image" />
                :
                <img className='object-contain w-full rounded-xl' src={URL.createObjectURL(formik.values.image)} alt="Image" />
              }
            </div>
            {formik.touched.image && formik.errors.image && (
              <p className="error-text">{formik.errors.image}</p>
            )}
          </div>

          <div className="flex flex-col gap-2 md:gap-3 mb-3 md:mb-4">
            <label className="custom-label">{t("Name")}</label>
            <input type="text" className="custom-input" placeholder={t("Enter name")} {...formik.getFieldProps('name')} />
            {formik.touched.name && formik.errors.name && (
              <p className="error-text">{formik.errors.name}</p>
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
            <label className="custom-label">{t("Product section")}</label>
            <input type="text" className="custom-input" placeholder={t("Enter product section")} {...formik.getFieldProps('product_section')} />
            {formik.touched.product_section && formik.errors.product_section && (
              <p className="error-text">{formik.errors.product_section}</p>
            )}
          </div>

          <div className="flex flex-col gap-2 md:gap-3 mb-3 md:mb-4">
            <label className="custom-label">{t("Quantity")}</label>
            <input type="text" className="custom-input" placeholder={t("Enter quantity")} {...formik.getFieldProps('quantity')} />
            {formik.touched.quantity && formik.errors.quantity && (
              <p className="error-text">{formik.errors.quantity}</p>
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
              t("Update")
            )}
          </button>
        </div>
      </form>
    </motion.section>
  )
}

export default UpdateProduct