import React from "react";
import ReactDOM from "react-dom/client";
import { bidule, truc } from "cunningham-tokens";
import "./index.scss";

truc();
bidule();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>coucou</React.StrictMode>
);
