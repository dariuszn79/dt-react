
import { motion } from "framer-motion";
import PageDescription from "../components/PageDescription"
import PageTitle from "../components/PageTitle"
const transitionIn = { duration: 0.6, ease: [0.33, 0, 0.16, 1], staggerChildren: 0.25};
const transitionOut = { duration: 0.6, ease: [0.33, 0, 0.16, 1]};

const PageTransition = {
  initial: { scale: 0.9, opacity: 0 },
  enter: { scale: 1, opacity: 1, transitionIn },
  exit: {
    scale: 1.3,
    opacity: 0,
    transition: transitionOut 
  }
};
const TVShows = (props) => 
<div style={{display:"block"}}>
    <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        enter="enter"
        variants={PageTransition}>
       <PageTitle text={props.title}/>
       <PageDescription  text={props.text}/>
       </motion.div>
  </div>;

export default TVShows;

TVShows.defaultProps = {
  title:"TV Shows",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure"
}