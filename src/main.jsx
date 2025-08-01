import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/Portfolio-v.05">
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
);
