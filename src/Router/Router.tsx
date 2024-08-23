import { Route, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next";
import RouteData from "./RouteData";
import Layout from "../Layout/Layout";
import { Home, PageNotFound, Login, OrdersPersonal, SingleOrderPersonal, OrdersCompany, SingleOrderCompany, AllPosters, AddPoster, AllUsers, AddUser, ShowUser, SingleUser, AllAdmins, AddAdmin, ShowAdmin, ChangePassword, ShowProfile, AllPayments, AddPayment, ShowPayment, ShowNotification, AddNotification, AllNotifications, AddCompany, AllCompanies, ShowCompany, AddProducts, CorporateProducts, ShowCorporateProduct, Wallet, SingleTransaction, Language, SupportedCities, SingleCompany, ShowCity, AddCity, ShowLinks, ShowSocialMedia, AddIntroductionPage, IntroductionPages, ShowIntroductionPage, AllTerms, AddTerm, ShowTerm } from "../Pages";
import AddTask from "../Pages/AddTask";
import EditTask from "../Pages/EditTask";

const Router = () => {
  const { t } = useTranslation();

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<RouteData title={t("Dashboard")} />}>
          <Route path="/" element={<Home />} />
          <Route path="/add-task" element={<AddTask />} />
          <Route path="/update-task/:id" element={<EditTask />} />
        </Route>
        <Route element={<RouteData title={t("Orders")} />}>
          <Route path="/orders-personal" element={<OrdersPersonal />} />
          <Route path="/orders-personal">
            <Route path=":order" element={<SingleOrderPersonal />} />
          </Route>
          <Route path="/orders-company" element={<OrdersCompany />} />
          <Route path="/orders-company">
            <Route path=":order" element={<SingleOrderCompany />} />
          </Route>
        </Route>
        <Route element={<RouteData title={t("Posters")} />}>
          <Route path="/posters" element={<AllPosters />} />
          <Route path="/add-Poster" element={<AddPoster />} />
        </Route>
        <Route element={<RouteData title={t("Users")} />}>
          <Route path="/users" element={<AllUsers />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/update-user">
            <Route path=":user" element={<ShowUser />} />
          </Route>
          <Route path="/users">
            <Route path=":user" element={<SingleUser />} />
          </Route>
        </Route>
        <Route element={<RouteData title={t("Admins")} />}>
          <Route path="/admins" element={<AllAdmins />} />
          <Route path="/add-admin" element={<AddAdmin />} />
          <Route path="/update-admin">
            <Route path=":admin" element={<ShowAdmin />} />
          </Route>
        </Route>
        <Route element={<RouteData title={t("Profile")} />}>
          <Route path="/show-profile" element={<ShowProfile />} />
          <Route path="/change-password" element={<ChangePassword />} />
        </Route>
        <Route element={<RouteData title={t("Payment type")} />}>
          <Route path="/all-payments" element={<AllPayments />} />
          <Route path="/add-payment" element={<AddPayment />} />
          <Route path="/update-payment">
            <Route path=":payment" element={<ShowPayment />} />
          </Route>
        </Route>
        <Route element={<RouteData title={t("Notification")} />}>
          <Route path="/all-notifications" element={<AllNotifications />} />
          <Route path="/send-notification" element={<AddNotification />} />
          <Route path="/update-notification">
            <Route path=":notification" element={<ShowNotification />} />
          </Route>
        </Route>
        <Route element={<RouteData title={t("Company")} />}>
          <Route path="/all-companies" element={<AllCompanies />} />
          <Route path="/add-company" element={<AddCompany />} />
          <Route path="/update-company">
            <Route path=":company" element={<ShowCompany />} />
          </Route>
          <Route path="/companies">
            <Route path=":company" element={<SingleCompany />} />
          </Route>
          <Route path="/add-product" element={<AddProducts />} />
        </Route>
        <Route element={<RouteData title={t("Corporate products")} />}>
          <Route path="/corporate-products" element={<CorporateProducts />} />
          <Route path="/corporate-products">
            <Route path=":product" element={<ShowCorporateProduct />} />
          </Route>
        </Route>
        <Route element={<RouteData title={t("Wallet")} />}>
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/transactions">
            <Route path=":transaction" element={<SingleTransaction />} />
          </Route>
        </Route>
        <Route element={<RouteData title={t("Setting")} />}>
          <Route path="/language" element={<Language />} />
          <Route path="/supported-cities" element={<SupportedCities />} />
          <Route path="/add-city" element={<AddCity />} />
          <Route path="/update-city">
            <Route path=":city" element={<ShowCity />} />
          </Route>
          <Route path="/social-media" element={<ShowSocialMedia />} />
          <Route path="/introduction-pages" element={<IntroductionPages />} />
          <Route path="/add-introduction-page" element={<AddIntroductionPage />} />
          <Route path="/update-introduction-page">
            <Route path=":page" element={<ShowIntroductionPage />} />
          </Route>
          <Route path="/terms-and-conditions" element={<AllTerms />} />
          <Route path="/add-terms-and-conditions" element={<AddTerm />} />
          <Route path="/update-terms-and-conditions">
            <Route path=":term" element={<ShowTerm />} />
          </Route>
          <Route path="/application-download-links" element={<ShowLinks />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Router;
