import { motion } from "framer-motion";

const transitionIn = { duration: 1, ease: [1, 0.16, 0, 0.33]};
const transitionOut = { duration:1, ease: [0.33, 0, 0.16, 1]};
const transition = { duration: 0.5, ease: [0.33, 0, 0.16, 1] };
const PageTransition = {
  initial: { scale: 0.8, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition },
  exit: {
    scale: 1.1,
    opacity: 0,
    transition: transition 
  }
};
const PageTitle = props => {
    return (
      <div style={{display:"block"}}>
        <motion.div 
        variants={PageTransition} 
        style={{display:"block", transformOrigin:"20% 20%"}}>
          <h1>{props.text}</h1>
        </motion.div>
      </div>
      
    );
  };
  export default PageTitle;

  