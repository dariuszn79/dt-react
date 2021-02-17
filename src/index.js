import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import {defineCustomElements} from "@ixd-group/nowtv-components"

import './index.css';
import Menu from "./components/Menu";
import Home from "./pages/home"
import Movies from "./pages/movies"
import TVShows from "./pages/tvshows"
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
      default:
  }
})
const App = () => (
  <Router>
    <div className="container">
        <Menu />
        <Route
      render={({ location }) => (
        <AnimatePresence exitBeforeEnter initial={false}>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={Home} />
            <Route exact path="/movies" component={Movies} />
            <Route exact path="/tvshows" component={TVShows} />
          </Switch>
        </AnimatePresence>
      )}
    />
    </div>
  </Router>
  );

  const rootElement = document.getElementById("app");
  ReactDOM.render(<SunbeamProvider focusManager={focusManager}><App /></SunbeamProvider>, rootElement);
  defineCustomElements()


