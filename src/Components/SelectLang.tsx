
import Button from '@mui/material/Button';
import { ArrowDropDownIcon } from '@mui/x-date-pickers/icons';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Menu from '@mui/material/Menu';
import Fade from '@mui/material/Fade';
import { data, images } from '../Constants';
import LanguageIcon from '@mui/icons-material/Language';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const SelectLang = () => {
  const { t, i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleSelection = (option: string) => {
    i18n.changeLanguage(option);
    handleClose();
  };

  return (
    <div>
      <Button variant="text"
        id="language-button"
        aria-controls={open ? 'language-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className='hover:!bg-white hover:!text-grayColor2 text-sm-base !text-grayColor !p-0'
      >
        <LanguageIcon className='!text-2xl md:!text-3xl' />
      </Button>
      <Menu
        id='language-menu'
        MenuListProps={{
          'aria-labelledby': 'language-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        disableScrollLock
        sx={{
          "& .MuiMenu-paper": {
            borderRadius: '10px',
            overflowY: 'hidden'
          }
        }}
      >
        <div className='flex flex-col'>
          <button
            onClick={() => handleSelection("en")}
            disabled={i18n.language === "en"}
            className={`flex_center py-4 px-8 duration-300 hover:text-grayColor ${i18n.language === "en" ? "bg-[#eee] text-grayColor" : ""}`}
          >
            <LazyLoadImage
              src={images?.american_flag}
              alt='american_flag'
              effect='blur'
              className='w-5 me-3'
            />
            {t("English")}
          </button>
          <button
            onClick={() => handleSelection("ar")}
            disabled={i18n.language === "ar"}
            className={`flex_center py-4 px-8 duration-300 hover:text-grayColor ${i18n.language === "ar" ? "bg-[#eee] text-grayColor" : ""}`}
          >
            <LazyLoadImage
              src={images?.saudi_flag}
              alt='american_flag'
              effect='blur'
              className='w-5 me-3'
            />
            {t("Arabic")}
          </button>
        </div>
      </Menu>
    </div>
  )
}

export default SelectLang