
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Menu from '@mui/material/Menu';
import Fade from '@mui/material/Fade';
import { images } from '../Constants';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link, useNavigate } from 'react-router-dom';

const ProfileNavbar = () => {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null)
  }

  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/login")
  }

  return (
    <div>
      <Button variant="text"
        id="profile-button"
        aria-controls={open ? 'profile-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className='!text-grayColor'
      >
        <LazyLoadImage
          src={images?.person}
          alt='american_flag'
          effect='blur'
          className='w-12 rounded-full'
        />
      </Button>
      <Menu
        id='profile-menu'
        MenuListProps={{
          'aria-labelledby': 'profile-button',
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
        <div className='w-[380px] md:w-[320px]'>
          <div className='p-4 flex items-center gap-3 border-b-2'>
            <LazyLoadImage
              src={images?.person}
              alt='american_flag'
              effect='blur'
              className='w-12 rounded-full'
            />
            <div className='flex-1'>
              <p className='text-xs-sm font-bold'>Zaki mohsen</p>
              <p className='text-xs-sm font-medium text-grayColor'>Zakimohsen@gmail.com</p>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <Link
              to="/show-Profile"
              onClick={handleClose}
              className={`flex items-center font-medium py-4 px-8 duration-300 hover:text-grayColor hover:ps-10`}
            >
              {t("My profile")}
            </Link>
            <button
              onClick={handleLogout}
              className={`flex items-center font-medium py-4 !pt-0 px-8 duration-300 hover:text-grayColor hover:ps-10`}
            >
              {t("Sign out")}
            </button>
          </div>
        </div>
      </Menu>
    </div>
  )
}

export default ProfileNavbar