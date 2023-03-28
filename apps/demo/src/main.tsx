import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { CunninghamProvider } from "@openfun/cunningham-react";
import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CunninghamProvider>
      <App />
    </CunninghamProvider>
  </React.StrictMode>
);
