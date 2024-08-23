import Drawer from '@mui/material/Drawer';
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { images } from '../../Constants';
import AsideMenu from './AsideMenu';
import { useEffect, useState } from 'react';

const AsideDrawer = ({ open, setOpen }: any) => {
  const { i18n } = useTranslation();
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Drawer open={open && width < 1024} onClose={() => setOpen(false)} anchor={i18n.language !== 'en' ? "right" : "left"}>
      <aside className={`xs:w-[320px] max-w-full start-0 ps-4 pe-2 xs:ps-8 xs:pe-4 py-10 h-full bg-whiteColor`}>
        <div className="flex flex-col justify-between h-full pe-2 xs:pe-4 custom-scroll overflow-y-scroll">
          <div>
            <div className={`mb-8 flex_center`}>
              <Link to="/" onClick={() => setOpen && setOpen(false)}>
                <img
                  src={images?.logo}
                  alt="logo"
                  className="max-h-14"
                />
              </Link>
            </div>
            <AsideMenu drawer setOpen={setOpen} />
          </div>
        </div>
      </aside>
    </Drawer>
  )
}

export default AsideDrawer