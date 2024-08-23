import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Aside, Navbar } from "../Components";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <main className="min-h-screen flex duration-300 lg:ms-[320px] bg-whiteColor overflow-hidden">
      <Aside className="bg-white" />
      <div className="relative w-full">
        <Navbar className="bg-white p-4 sm:p-5 md:p-6" />
        <div className="p-4 sm:p-5 md:p-6 h-[calc(100%-130px)] sm:h-[calc(100%-96px)] md:h-[calc(100%-112px)]">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default Layout;
