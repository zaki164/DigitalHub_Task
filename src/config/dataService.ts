export const BASE_URL = "https://mandobk.com.sa/website-dashboard/api";

export const BASE_HEADERS = (headers: any) => {
  headers.set("locale", localStorage.getItem("language") || "en");

  return headers;
};
