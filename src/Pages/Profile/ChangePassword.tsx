
import * as yup from "yup";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { motion } from "framer-motion";
import { useState } from "react";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";

const ChangePassword = () => {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const schema = yup.object().shape({
    current_password: yup.string()
      .matches(
        /^(?=.*[A-Z])(?=.*\d)(?=.*[_\W])[A-Za-z\d_\W]{8,25}$/,
        t("Current password is invaild")
      ).required(t("Current password is required")),
    new_password: yup.string()
      .matches(
        /^(?=.*[A-Z])(?=.*\d)(?=.*[_\W])[A-Za-z\d_\W]{8,25}$/,
        t("New password is invaild")
      ).required(t("New password is required")),
    confirm_new_password: yup.string()
      .oneOf([yup.ref("new_password")], t("Password doesn't match"))
      .required(t("Confirm new password is required")),
  });

  let initialValues: initialValuesTypes = {
    current_password: '',
    new_password: '',
    confirm_new_password: '',
  }

  type initialValuesTypes = {
    current_password: string,
    new_password: string,
    confirm_new_password: string,
  }

  const formik = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit: async (values) => {
      console.log(values)
    },
  });

  return (
    <motion.section
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
      className="content-container p-container">
      <p className="page-header">{t("Change password")}</p>
      <form onSubmit={formik.handleSubmit} className="mt-5 md:mt-8 px-6" noValidate>

        <div className="flex flex-col gap-2 md:gap-3 mb-3 md:mb-4">
          <label className="custom-label">{t("Current password")}</label>
          <div className="custom-input overflow-hidden flex_center gap-3">
            <input
              type={showPassword?.current ? "text" : "password"}
              className="w-full bg-transparent outline-none focus:border-0"
              placeholder={t("Enter current password")}
              {...formik.getFieldProps('current_password')}
            />
            {!showPassword?.current ? (
              <BiSolidHide
                onClick={() =>
                  setShowPassword((prev) => ({
                    ...prev,
                    current: !prev.current,
                  }))
                }
                className="cursor-pointer text-2xl me-4 text-grayColor"
              />
            ) : (
              <BiSolidShow
                onClick={() =>
                  setShowPassword((prev) => ({
                    ...prev,
                    current: !prev.current,
                  }))
                }
                className="cursor-pointer text-2xl me-4 text-grayColor"
              />
            )}
          </div>
          {formik.touched.current_password && formik.errors.current_password && (
            <p className="error-text">{formik.errors.current_password}</p>
          )}
        </div>

        <div className="flex flex-col gap-2 md:gap-3 mb-3 md:mb-4">
          <label className="custom-label">{t("New password")}</label>
          <div className="custom-input overflow-hidden flex_center gap-3">
            <input
              type={showPassword?.new ? "text" : "password"}
              className="w-full bg-transparent outline-none focus:border-0"
              placeholder={t("Enter new password")}
              {...formik.getFieldProps('new_password')}
            />
            {!showPassword?.new ? (
              <BiSolidHide
                onClick={() =>
                  setShowPassword((prev) => ({
                    ...prev,
                    new: !prev.new,
                  }))
                }
                className="cursor-pointer text-2xl me-4 text-grayColor"
              />
            ) : (
              <BiSolidShow
                onClick={() =>
                  setShowPassword((prev) => ({
                    ...prev,
                    new: !prev.new,
                  }))
                }
                className="cursor-pointer text-2xl me-4 text-grayColor"
              />
            )}
          </div>
          {formik.touched.new_password && formik.errors.new_password && (
            <p className="error-text">{formik.errors.new_password}</p>
          )}
        </div>

        <div className="flex flex-col gap-2 md:gap-3 mb-3 md:mb-4">
          <label className="custom-label">{t("Confirm new password")}</label>
          <div className="custom-input overflow-hidden flex_center gap-3">
            <input
              type={showPassword?.confirm ? "text" : "password"}
              className="w-full bg-transparent outline-none focus:border-0"
              placeholder={t("Enter confirm new password")}
              {...formik.getFieldProps('confirm_new_password')}
            />
            {!showPassword?.confirm ? (
              <BiSolidHide
                onClick={() =>
                  setShowPassword((prev) => ({
                    ...prev,
                    confirm: !prev.confirm,
                  }))
                }
                className="cursor-pointer text-2xl me-4 text-grayColor"
              />
            ) : (
              <BiSolidShow
                onClick={() =>
                  setShowPassword((prev) => ({
                    ...prev,
                    confirm: !prev.confirm,
                  }))
                }
                className="cursor-pointer text-2xl me-4 text-grayColor"
              />
            )}
          </div>
          {formik.touched.confirm_new_password && formik.errors.confirm_new_password && (
            <p className="error-text">{formik.errors.confirm_new_password}</p>
          )}
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
              t("Confirm")
            )}
          </button>
        </div>
      </form>
    </motion.section>
  )
}

export default ChangePassword