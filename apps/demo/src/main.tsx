import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { Button } from '@openfun/cunningham-react';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Button />
    <div className="test">TEST</div>
  </React.StrictMode>
);
