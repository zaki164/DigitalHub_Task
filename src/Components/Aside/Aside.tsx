import { images } from "../../Constants"
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import AsideMenu from "./AsideMenu";

const Aside = ({ className }: any) => {
  const { i18n } = useTranslation();

  return (
    <aside className={`max-lg:-ms-[320px] duration-300 w-[320px] fixed start-0 ps-8 pe-4 py-10 h-full ${className}`}>
      <div className="flex flex-col justify-between h-full overflow-y-scroll custom-scroll pe-4">
        <div>
          <div className={`mb-8 flex_center animate__animated ${i18n.language !== 'en' ? 'animate__backInRight' : 'animate__backInLeft'}`}>
            <Link to="/">
              <img
                src={images?.logo}
                alt="logo"
                className="max-h-14"
              />
            </Link>
          </div>
          <AsideMenu />
        </div>
      </div>
    </aside>
  )
}

export default Aside