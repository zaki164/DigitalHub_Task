import { useTranslation } from "react-i18next";
import * as Yup from 'yup'
import { useFormik } from "formik";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { motion } from "framer-motion";
import { ChangeEvent, Fragment, useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa6";
import { MdOutlineAddCircle } from "react-icons/md";

const AddTerm = () => {
  const { t } = useTranslation();

  const [inputValues, setInputValues] = useState<string[]>([""]);

  // Handle input change
  const handleInputChange = (index: number, event: ChangeEvent<HTMLInputElement>) => {
    const newValues = [...inputValues];
    newValues[index] = event.target.value;
    setInputValues(newValues);
  };

  // Add a new input
  const addInput = () => {
    setInputValues([...inputValues, ""]);
  };

  // Remove an input
  const removeInput = (index: number) => {
    const newValues = inputValues.filter((_, i) => i !== index);
    setInputValues(newValues);
  };


  const Schema = Yup.object().shape({
    title: Yup.string().required(t("Title is required")),
    conditions: Yup.array().of(Yup.string()),
  })

  const initialValues: InitialValues = {
    title: '',
    conditions: [""],
  }
  type InitialValues = {
    title: string,
    conditions: string[],
  }

  const formik = useFormik({
    initialValues,
    validationSchema: Schema,
    onSubmit: async (values) => {
      console.log("values", values)
    }
  })

  useEffect(() => {
    formik?.setFieldValue("conditions", inputValues?.filter(value => value !== ''))
  }, [inputValues])


  return (
    <motion.section
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
      className="content-container p-container">
      <p className="page-header">{t("Add terms and conditions")}</p>
      <form onSubmit={formik.handleSubmit} className="mt-5 md:mt-8" noValidate>
        <div className="grid grid-cols-1 gap-y-6 md:gap-6">

          <div className="flex flex-col gap-2 md:gap-3 mb-3 md:mb-4">
            <label className="custom-label">{t("Title")}</label>
            <input type="text" className="custom-input" placeholder={t("Enter title")} {...formik.getFieldProps('title')} />
            {formik.touched.title && formik.errors.title && (
              <p className="error-text">{formik.errors.title}</p>
            )}
          </div>

          <div className="flex flex-col gap-2 md:gap-3 mb-3 md:mb-4">
            <div className="flex_between gap-4">
              <label className="custom-label">{t("Conditions")}</label>
              <button
                type="button"
                onClick={addInput}
                className="hvr-icon-pulse-shrink flex_center rounded-full bg-grayColor3 text-mainColor p-3 md:p-4"
              >
                <MdOutlineAddCircle className='text-2xl-3xl hvr-icon' />
              </button>
            </div>
            {inputValues?.map((condition, index) => (
              <Fragment key={index}>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
                  className="flex_between gap-4 my-2 px-4"
                >
                  <span className="text-base-l font-medium">{index + 1}</span>
                  <input
                    type="text"
                    className="custom-input"
                    value={condition}
                    placeholder={t("Enter condition")}
                    onChange={(event) => handleInputChange(index, event)}
                  />
                  <button
                    type="button"
                    onClick={() => removeInput(index)}
                    className="hvr-icon-pulse-shrink flex_center rounded-full bg-grayColor3 text-redColor p-3 md:p-4"
                  >
                    <FaTrash className='text-l-xl hvr-icon' />
                  </button>
                </motion.div>
              </Fragment>
            ))}
            {formik.touched.conditions && formik.errors.conditions && (
              <p className="error-text">{formik.errors.conditions}</p>
            )}
          </div>


        </div>

        <div className="flex justify-end mt-20">
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

export default AddTerm