import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { bidule, truc } from "@openfun/cunningham-tokens";
import { Button } from "@openfun/cunningham-react";

truc();
bidule();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Button />
  </React.StrictMode>
);
