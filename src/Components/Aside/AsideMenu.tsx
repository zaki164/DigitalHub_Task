import React, { Dispatch, SetStateAction, useState } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../../Constants/data";
import { useTranslation } from "react-i18next";

const AsideMenu = ({ drawer, setOpen }: { drawer?: Boolean, setOpen?: Dispatch<SetStateAction<Boolean>> }) => {
  const { t } = useTranslation();
  const location = useLocation()

  const defaultExpanded = navLinks?.filter(accordion => accordion?.sub && (accordion?.sub?.filter(sublink => location.pathname === sublink?.link).length !== 0))[0]?.title
  const [expanded, setExpanded] = useState<string | false>(defaultExpanded || false);
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      {navLinks?.map((accordion, i) => (
        !accordion?.accordion ?
          <Link
            to={accordion?.link as string}
            key={i}
            onClick={() => {
              setExpanded(accordion?.title)
              drawer && setOpen && setOpen(false)
            }}
            className={`duration-300 hover:custom_shadow ${(expanded === accordion?.title) || (location.pathname === accordion?.link) ? "bg-mainColor text-white custom_shadow opacity-100" : "bg-white opacity-70"} flex items-center w-full my-3 rounded-xl py-4 px-3`}>
            <span className="ms-1 me-3 text-xl-2xl">
              {accordion?.icon}
            </span>
            <span className="text-base-lg font-medium">
              {t(accordion?.title)}
            </span>
          </Link> :
          <Accordion key={i}
            sx={{
              boxShadow: 0,
              border: 0,
              color: "inherit",
              "&::before": {
                height: 0
              },
              "& .MuiAccordionSummary-root": {
                opacity: .7,
                px: 2,
                py: 2,
                minHeight: "auto !important",
                borderStartStartRadius: "12px",
                borderStartEndRadius: "12px",
                transition: ".3s",
                ":hover": {
                  opacity: 1,
                  boxShadow: "0 4px 4px 0 #c6c6c680",
                },
                "&.Mui-expanded": {
                  opacity: 1,
                  borderBottom: "1px solid #c6c6c680",
                  backgroundColor: "#324001",
                  color: "white",
                }
              },
              "& .MuiAccordionSummary-expandIconWrapper": {
                color: "inherit"
              }
            }}
            expanded={expanded === accordion?.title} onChange={handleChange(accordion?.title)} className="bg-white rounded-xl my-3">
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls={`${accordion?.title}-content`}
              id={`${accordion?.title}-header`}
              sx={{
                "& .MuiAccordionSummary-content": {
                  margin: "0 !important"
                }
              }}
            >
              <span className="ms-1 me-3 text-xl-2xl">
                {accordion?.icon}
              </span>
              <span className="text-sm-base font-medium">{t(accordion?.title)}</span>
            </AccordionSummary>
            <AccordionDetails sx={{ px: 4, backgroundColor: "#324001", boxShadow: "0 4px 4px 0 #c6c6c680", borderEndStartRadius: "12px", borderEndEndRadius: "12px", }}>
              {
                accordion?.sub?.map((sub, i) => (
                  <Link key={i} to={sub?.link} onClick={() => drawer && setOpen && setOpen(false)} className={`ps-3 my-2 block text-sm-base font-medium p-2 rounded-xl duration-200 hover:ps-4 ${sub?.link === location?.pathname ? "bg-white" : "text-white"}`}>{t(sub?.title)}</Link>
                ))
              }
            </AccordionDetails>
          </Accordion>
      ))
      }
    </div >
  )
}

export default AsideMenu