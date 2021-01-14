import React from "react";
import { TransitionGroup, Transition } from "react-transition-group";
import { Route, Switch } from "react-router-dom";
import { TweenMax, TweenLite } from "gsap/all";
// import components
import Home from "./home";
import Movies from "./movies";
import TVShows from "./tvshows";

const completeCall = target => {
  TweenLite.set(target, { clearProps: "position, width" });
};

const AppRoutes = props =>
  <TransitionGroup>
    <Transition
      key={props.location.pathname}
      timeout={500}
      mountOnEnter={true}
      unmountOnExit={true}
      onEnter={node => {
        // first kill all tweens of the target
        TweenMax.killTweensOf(node);
        const parent = node.parentNode;
        const targetWidth =
          parent.clientWidth -
          parseFloat(getComputedStyle(node.parentNode).paddingLeft) * 2;
        // set the position and properties of the entering element
        TweenLite.set(node, {
          position: "fixed",
          x: 100,
          autoAlpha: 0,
          width: targetWidth
        });
        // animate in the element
        TweenLite.to(node, 0.5, {
          autoAlpha: 1,
          x: 0,
          onComplete: completeCall,
          onCompleteParams: [node]
        });
      }} // on enter end

      onExit={node => {
        // first kill all tweens of the target
        TweenMax.killTweensOf(node);
        const parent = node.parentNode;
        const targetWidth =
          parent.clientWidth -
          parseFloat(getComputedStyle(node.parentNode).paddingLeft) * 2;
        // set the position of the element
        TweenLite.set(node, {
          position: "fixed",
          width: targetWidth
        });
        // animate out the element
        TweenLite.to(node, 0.5, {
          position: "fixed",
          opacity: 0,
          x: -100
        });
      }} // on exit end
    >
      <Switch location={props.location}>
        <Route exact path="/" component={Home} />
        <Route exact path="/movies" component={Movies} />
        <Route exact path="/tvshows" component={TVShows} />
      </Switch>
    </Transition>
  </TransitionGroup>;

export default AppRoutes;
