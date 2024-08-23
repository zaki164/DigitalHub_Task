import * as yup from "yup";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useState } from "react";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/")
  }
  const [showPassword, setShowPassword] = useState(false);

  const schema = yup.object().shape({
    email: yup.string().required(t("Email is required"))
      .email("Wrong email format")
      .matches(
        /^[\w.!#$%&'*+/=?^_`{|}~-]+@([\w-]+\.)+[\w-]{2,4}$/,
        t("Wrong email format")
      ),
    password: yup.string()
      .matches(
        /^(?=.*[A-Z])(?=.*\d)(?=.*[_\W])[A-Za-z\d_\W]{8,25}$/,
        t("Password is invaild")
      ).required(t("Password is required")),
  });

  let initialValues = {
    email: '',
    password: '',
  }

  const formik = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit: async () => {
      handleLogin()
    },
  });

  return (
    <main className="flex max-md:flex-col-reverse max-md:gap-10 md:h-screen">
      <div className="w-full md:flex-1 flex_center max-md:pb-8">
        <motion.section
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
          className="max-sm:w-[90%] sm:w-[80%] md:w-[90%] lg:w-[80%] xl:w-[60%]">
          <form
            className='ps-6 flex flex-col gap-12'
            onSubmit={formik.handleSubmit}
            noValidate
          >
            <div className="text-center flex flex-col gap-2 md:gap-4">
              <p className="font-bold text-3xl-4xl">{t("Log Your Account")}</p>
              <p className="font-medium text-l-xl text-grayColor">{t("Welcome Back Help Dot App, log in now")}</p>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <p className='text-base-l font-bold mb-4'>{t("E-mail")}</p>
                <input
                  className="custom-input shadow-[0_3px_3px_rgba(0,0,0,0.25)] bg-white"
                  placeholder={t("Enter your email address")}
                  {...formik.getFieldProps('email')}
                  type='text'
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="error-text">{formik.errors.email}</p>
                )}
              </div>
              <div>
                <p className='text-base-l font-bold mb-4'>{t("Password")}</p>
                <div
                  className="custom-input shadow-[0_3px_3px_rgba(0,0,0,0.25)] overflow-hidden flex_center gap-3"
                >
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full bg-transparent outline-none focus:border-0"
                    placeholder={t("Enter your password")}
                    {...formik.getFieldProps('password')}
                  />
                  {!showPassword ? (
                    <BiSolidHide
                      onClick={() => setShowPassword(!showPassword)}
                      className="cursor-pointer text-2xl me-4 text-grayColor"
                    />
                  ) : (
                    <BiSolidShow
                      onClick={() => setShowPassword(!showPassword)}
                      className="cursor-pointer text-2xl me-4 text-grayColor"
                    />
                  )}
                </div>
                {formik.touched.password && formik.errors.password && (
                  <p className="error-text">{formik.errors.password}</p>
                )}
              </div>
            </div>
            <div className="w-full">
              <button
                type="submit"
                aria-label="Submit Form"
                disabled={
                  formik?.isSubmitting ||
                  !formik?.dirty
                }
                className={`custom-button text-base-l px-3 md:px-6 py-4 md:py-5 w-full ${formik?.isSubmitting || !formik?.dirty ? "cursor-not-allowed opacity-70" : ""} hvr-float-shadow`}
              >
                {formik?.isSubmitting ? (
                  <AiOutlineLoading3Quarters className="animate-spin text-2xl" />
                ) : (
                  t("Login")
                )}
              </button>
            </div>
          </form>
        </motion.section>
      </div>
      <div className="relative w-full max-sm:min-h-[350px] max-md:min-h-[400px] md:flex-1 bg-login bg-cover bg-top"></div>
    </main>
  )
}

export default Login