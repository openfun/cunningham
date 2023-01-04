import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { Button } from "@openfun/cunningham-react";
import { tokens } from "./cunningham-tokens";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="center">
      <h1 className="test">Cunningham Demo.</h1>
      <Button>World best button.</Button>
      <h3>Primary color is {tokens.theme.colors.primary}</h3>
    </div>
  </React.StrictMode>
);
