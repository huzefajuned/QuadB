import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App";

// State
import ShowsState from "./context/shows/ShowsState";
import AlertsState from "./context/alerts/AlertsState";

ReactDOM.render(
  <ShowsState>
    <AlertsState>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AlertsState>
  </ShowsState>,
  document.getElementById("root")
);
