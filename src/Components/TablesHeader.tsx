import { useTranslation } from "react-i18next";
import { Dispatch, SetStateAction } from "react";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const TablesHeader = ({ name, setName, title, linkTitle, link }: { name: string, setName: Dispatch<SetStateAction<string>>, title: string, linkTitle: string, link: string }) => {
  const { t } = useTranslation();

  return (
    <section className="flex items-center flex-wrap gap-2 md:gap-3 gap-y-3 mb-6">
      <p className="page-header">{title}</p>
      <div className="w-full md:flex-1 justify-end flex flex-wrap gap-6 md:gap-8">
        <div className="max-xs:w-full xs:w-[300px] relative flex_center rounded-xl border border-grayColor4 ps-12 pe-6 py-2">
          <input
            type="text"
            placeholder={t("Search")}
            value={name}
            className="outline-none caret-grayColor4 placeholder:text-grayColor4 bg-transparent w-full"
            onChange={(e) => setName(e.target.value)}
          />
          <span className="absolute start-4 top-1/2 -translate-y-1/2 text-l-xl text-[#AEAEAE]">
            <CiSearch />
          </span>
        </div>
        <Link
          to={link}
          className={`max-xs:w-full custom-button hover-button1 text-sm-base bg-mainColor px-8 md:px-10 py-2 md:py-4`}
        >
          {linkTitle}
        </Link>
      </div>
    </section>
  )
}

export default TablesHeader