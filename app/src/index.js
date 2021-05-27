import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import Routes from "./routes/Routes";

import "./index.css";
// import HomePageContainer from "./pages/HomePage/containers/HomePageContainer";
// import App from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
