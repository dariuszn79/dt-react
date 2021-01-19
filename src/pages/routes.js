import React from "react";
import { TransitionGroup, Transition } from "react-transition-group";
import { Route, Switch } from "react-router-dom";
import { TweenMax, TweenLite } from "gsap/all";

//Components
import Home from "./home";
import Movies from "./movies";
import TVShows from "./tvshows";

const completeCall = target => {
  TweenLite.set(target, {clearProps: "position, width"});
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
          position:"absolute",
          transformOrigin: '50% 50%',
          autoAlpha: 0,
          scale:0.8,
          width: targetWidth
        });
        // animate in the element
        TweenLite.to(node, 0.5, {
          position:"absolute",
          autoAlpha: 1,
          scale:1,
          delay:0.125,
          ease: "sine.inOut",
          onComplete: completeCall,
          onCompleteParams: [node]
        });
        TweenLite.set(node.children[1], {
          transformOrigin: '50% 50%',
          autoAlpha: 0,
          scale:0.8,
          width: targetWidth
        });
        TweenLite.to(node.children[1], 0.5, {
          autoAlpha: 1,
          scale:1,
          delay:0.5,
          ease: "sine.inOut",
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
          position:"absolute",
          width: targetWidth,
          transformOrigin: '50% 50%',
        });
        // animate out the element
        TweenLite.to(node, 0.5, {
          position:"absolute",
          opacity: 0,
          scale:1.3,
          ease: "sine.inOut",
        });
        TweenLite.set(node.children[1],{
          width: targetWidth,
          transformOrigin: '50% 50%',
        });
        TweenLite.to(node.children[1], 0.5, {
          width: targetWidth,
          opacity: 0,
          scale:1.3,
          ease: "sine.inOut",
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
