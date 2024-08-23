import React from "react";
import App from "./App.jsx";
import { createRoot } from 'react-dom/client'
import { PageContext } from "./Modules/PageDate.js";
import LanguageDetector from "./Modules/LanguageDetector.js";
import "./index.css";
import "./i18n";
import { TasksContext } from "./Modules/TaskContext.js";

const container = document.getElementById('root')

if (container) {
  createRoot(container).render(
    <React.StrictMode>
      <LanguageDetector>
        <PageContext>
          <TasksContext>
            <App />
          </TasksContext>
        </PageContext>
      </LanguageDetector>
    </React.StrictMode>
  );
}
