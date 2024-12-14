import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CreateCampaign from "./Create_Campaign.jsx";
import EditCampaign from "./Edit_Camaign.jsx";
import CancelCampaign from "./Cancel_Campaign.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <CreateCampaign /> */}
    {/* <EditCampaign /> */}
    <CancelCampaign />
  </StrictMode>
);
