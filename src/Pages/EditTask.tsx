import { useTranslation } from "react-i18next";
import * as Yup from 'yup'
import { useFormik } from "formik";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import SelectReact from 'react-select';
import SelectColors2 from "../config/SelectColors2";
import { useTasksData } from "../Modules/TaskContext";
import { Slide, toast } from "react-toastify";

const EditTask = () => {
  const { t, i18n } = useTranslation();
  const route = useNavigate()
  const { Tasks, setTasks } = useTasksData()
  const { state } = useLocation();
  const data = state?.data;

  const Schema = Yup.object().shape({
    name: Yup.string().required(t("Name is required")),
    description: Yup.string().required(t("Description is required")),
    status: Yup.string().required(t("Status is required")),
  })

  const initialValues: InitialValues = {
    name: data?.name || '',
    description: data?.description || '',
    status: data?.status || '',
  }
  type InitialValues = {
    name: string,
    description: string,
    status: string,
  }

  const formik = useFormik({
    initialValues,
    validationSchema: Schema,
    onSubmit: async (values) => {
      setTasks(Tasks?.map((ele) => ele?.id === data?.id ? { id: data?.id, ...values } : ele))
      toast.success("Data updated successfully", {
        position: i18n.language === "en" ? "top-right" : "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
      route(`/`)
    }
  })

  const Option1 = [
    { value: "Not Started", label: 'Not Started' },
    { value: "In Progress", label: 'In Progress' },
    { value: "Finished", label: 'Finished' },
  ]

  return (
    <motion.section
      initial={{ opacity: 0, x: 100, y: 100 }}
      animate={{ opacity: 1, x: 0, y: 0, transition: { delay: 0.2 } }}
      className="content-container p-container">
      <p className="page-header">{t("Edit task")}</p>
      <form onSubmit={formik.handleSubmit} className="mt-5 md:mt-8" noValidate>
        <div className="grid grid-cols-1 gap-y-6 md:gap-6">

          <div className="flex flex-col gap-2 md:gap-3 mb-3 md:mb-4">
            <label className="custom-label">{t("Name")}</label>
            <input type="text" className="custom-input" placeholder={t("Enter name")} {...formik.getFieldProps('name')} />
            {formik.touched.name && formik.errors.name && (
              <p className="error-text">{formik.errors.name}</p>
            )}
          </div>

          <div className="flex flex-col gap-2 md:gap-3 mb-3 md:mb-4">
            <label className="custom-label">{t("Description")}</label>
            <input type="text" className="custom-input" placeholder={t("Enter description")} {...formik.getFieldProps('description')} />
            {formik.touched.description && formik.errors.description && (
              <p className="error-text">{formik.errors.description}</p>
            )}
          </div>

          <div className="flex flex-col gap-2 md:gap-3 mb-3 md:mb-4">
            <label className="custom-label">{t("Status")}</label>
            <SelectReact
              noOptionsMessage={() => t('No option')}
              loadingMessage={() => t('Loading...')}
              options={Option1}
              isClearable
              styles={SelectColors2}
              defaultValue={Option1.find(option => option.value === data?.status)}
              placeholder={t('Choose status')}
              onChange={(newValue: any) => {
                formik.setFieldValue("status", newValue ? newValue?.value : '');
              }}
            />
            {formik.touched.status && formik.errors.status && (
              <p className="error-text">{formik.errors.status}</p>
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

export default EditTask