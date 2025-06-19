import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { IpoProvider } from "./context/IpoContext"; // ✅ Import Context Provider
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <IpoProvider> {/* ✅ Wrap App inside IpoProvider */}
        <App />
      </IpoProvider>
    </BrowserRouter>
  </StrictMode>
);
