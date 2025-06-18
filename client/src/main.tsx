import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* App now contains the BrowserRouter setup from react-router-dom */}
    <App />
  </React.StrictMode>
);
