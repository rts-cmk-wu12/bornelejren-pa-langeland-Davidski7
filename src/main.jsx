import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./pages/App.jsx";
import OmOs from "./pages/omos.jsx";
import Sponsor from "./pages/sponsor.jsx";
import Takker from "./pages/takker.jsx";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/omos" element={<OmOs />} />
        <Route path="/sponsor" element={<Sponsor />} />
        <Route path="/takker" element={<Takker />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);