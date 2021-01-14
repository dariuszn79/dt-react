import React from "react";
import { render } from "react-dom";
// import react router
import { BrowserRouter as Router, Route } from "react-router-dom";
import './index.css';
import Menu from "./components/menu";
import AppRoutes from "./pages/routes";

const App = () =>
  <Router>
    <div className="container">
        <Menu />
        <Route path="/" component={AppRoutes} />
    </div>
  </Router>;

render(<App />, document.getElementById("app"));
