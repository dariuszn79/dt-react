import React from "react";
import { render } from "react-dom";
// import react router
import { BrowserRouter as Router, Route } from "react-router-dom";
import './index.css';
import Menu from "./components/Menu";
import AppRoutes from "./pages/routes";
import { SunbeamProvider, FocusManager } from "react-sunbeam"
const focusManager = new FocusManager({
  initialFocusPath: ["menuContainer", "menuItem1"],
})

// Use arrow key presses to control focus.
document.addEventListener("keydown", (event) => {
  switch (event.key) {
      case "ArrowRight":
          focusManager.moveRight()
          return
      case "ArrowLeft":
          focusManager.moveLeft()
          return
      case "ArrowUp":
          focusManager.moveUp()
          return
      case "ArrowDown":
          focusManager.moveDown()
          return
      case "Backspace":
          focusManager.setFocus(["carousel", "item-1"])
          return
  }
})
const App = () =>
  <Router>
    <div className="container">
        <Menu />
        <Route path="/" component={AppRoutes} />
    </div>
  </Router>;

render( <SunbeamProvider focusManager={focusManager}>
  <App />
</SunbeamProvider>, document.getElementById("app"));
