import { motion } from "framer-motion";
import TileSwitcher from "./TileSwitcher"
const transitionIn = { duration: 1, ease: [1, 0.16, 0, 0.33]};
const transitionOut = { duration:1, ease: [0.33, 0, 0.16, 1]};
const transition = { duration: 0.5, ease: [0.33, 0, 0.16, 1], staggerChildren: 0.3  };

const PageTransition = {
  initial: { scale: 0.8, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition },
  exit: {
    scale: 1.1,
    opacity: 0,
    transition: transition 
  }
};
const RailSwitcher = () => 
  <>
    <motion.div
      exit="exit"
      enter="enter"
      variants={PageTransition}
      style={{display:"inline-flex", transformOrigin:" 50% 50%"}}
    >
      <TileSwitcher/>
      <TileSwitcher/>
      <TileSwitcher/>
      <TileSwitcher/>
      <TileSwitcher/>
    </motion.div>
  </>;

export default RailSwitcher;
