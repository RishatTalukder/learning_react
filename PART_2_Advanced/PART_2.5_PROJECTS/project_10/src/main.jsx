import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootswatch/dist/lux/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import App from "./App.jsx";
import GlobalContextProvider from "./GlobalContextProvider.jsx"; // importing the GlobalContextProvider component

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalContextProvider> {/* wrapping the App component with the GlobalContextProvider component */}
      <App />
    </GlobalContextProvider>
  </StrictMode>
);