import { useState } from "react";
import { usePageDate } from "../Modules/PageDate"
import { GiHamburgerMenu } from "react-icons/gi";
import AsideDrawer from "./Aside/AsideDrawer";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = ({ className }: any) => {
  const { t, i18n } = useTranslation();
  const { title } = usePageDate();
  const [open, setOpen] = useState(false);
  const handleMenu = () => {
    setOpen(true)
  }
  return (
    <header className={`${className} flex_between max-xs:flex-col flex-wrap gap-4 custom_shadow2`}>
      <div className="flex flex-wrap gap-4 items-center">
        <span onClick={handleMenu} className={`lg:hidden animate__animated ${i18n.language !== 'en' ? 'animate__bounceInRight' : 'animate__bounceInLeft'} cursor-pointer text-2xl hover-mainColor`}>
          <GiHamburgerMenu />
        </span>
        <motion.div
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
          key={title}
        >
          <h1 className="text-xl-2xl font-semibold">{title}</h1>
        </motion.div>
      </div>
      <div className="flex_center flex-1 xs:justify-end flex-wrap gap-2 md:gap-3">
        <Link
          to="/login"
          className={`max-xs:w-full custom-button2 hover-button2 text-sm-base bg-mainColor px-8 md:px-10 py-3`}
        >
          {t("Login")}
        </Link>
      </div>
      <AsideDrawer open={open} setOpen={setOpen} />
    </header>
  )
}

export default Navbar