import React from "react";
import App from "./App.jsx";
import store from "./store";
import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { PageContext } from "./Modules/PageDate.js";
import LanguageDetector from "./Modules/LanguageDetector.js";
import "./index.css";
import "./i18n";
import { TasksContext } from "./Modules/TaskContext.js";

const container = document.getElementById('root')

if (container) {
  createRoot(container).render(
    <React.StrictMode>
      <Provider store={store}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <LanguageDetector>
            <PageContext>
              <TasksContext>
                <App />
              </TasksContext>
            </PageContext>
          </LanguageDetector>
        </LocalizationProvider>
      </Provider>
    </React.StrictMode>
  );
}
