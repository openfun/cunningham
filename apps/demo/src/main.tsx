import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { Button } from "@openfun/cunningham-react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="center">
      <h1 className="test">Cunningham Demo.</h1>
      <Button />
    </div>
  </React.StrictMode>
);
