import { motion } from "framer-motion";
import GridRow from "../components/GridRow";
import PageDescription from "../components/PageDescription"
import PageTitle from "../components/PageTitle"

const transitionIn = { duration: 0.5, ease: [1, 0.16, 0, 0.33]};
const transitionOut = { duration:0.5, ease: [0.33, 0, 0.16, 1]};

const transition = { duration: 1, ease: [0.33, 0, 0.16, 1], staggerChildren: 0.3 };
const PageTransition = {
  initial: { scale: 0.8, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition, delay:-0.25 },
  exit: {
    scale: 1.1,
    opacity: 0,
    transition: { duration: 1.5, ...transition }
  }
};
const TVGuide = (props) =>
<div style={{display:"block", width:"60%"}}>
    <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        enter="enter"
        variants={PageTransition}>
      <PageTitle text={props.title}/>
      <GridRow/>
      <GridRow/>
      <GridRow/>
      <GridRow/>
      <GridRow/>
      <GridRow/>
      <GridRow/>
    </motion.div>
  </div>;

export default TVGuide;

TVGuide.defaultProps = {
  title:"Home",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure"
}
