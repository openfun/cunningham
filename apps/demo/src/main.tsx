import React from "react";
import ReactDOM from "react-dom/client";
import { bidule, truc } from "cunningham-tokens";
import App from "./App";
import "./index.css";

truc();
bidule();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
