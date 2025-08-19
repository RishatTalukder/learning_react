import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import "bootswatch/dist/darkly/bootstrap.min.css"; // Import Bootswatch theme CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JS

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
