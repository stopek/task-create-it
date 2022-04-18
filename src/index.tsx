import * as React from "react";
import ReactDOM from "react-dom/client";

import reportWebVitals from "./reportWebVitals";
import Root from "./root";

import "./index.scss";

const container = document.getElementById("root");
if (!container) {
  const notFoundMessage = document.createElement("div");
  notFoundMessage.textContent = "Root doesn't found.";
  document.body.appendChild(notFoundMessage);
} else {
  const root = ReactDOM.createRoot(container);

  root.render(
    <React.StrictMode>
      <Root />
    </React.StrictMode>,
  );

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
}

