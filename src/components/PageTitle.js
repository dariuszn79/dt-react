import { motion } from "framer-motion";

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

const thumbnailVariants = {
  initial: { scale: 0.9, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition },
  exit: {
    scale: 1.3,
    opacity: 0,
    transition
  }
};
const PageTitle = props => {
    return (
      <div style={{display:"block", transformOrigin:" 50% 50%"}}>
        <motion.div variants={thumbnailVariants}>
        <h1>{props.text}</h1>
        </motion.div>
      </div>
      
    );
  };
  export default PageTitle;

  