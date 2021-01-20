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


const PageDescription = props => {
    return (
      <div style={{display:"block", transformOrigin:" 50% 50%"}}>
        <motion.div className="thumbnail" variants={thumbnailVariants}>
          <p>{props.text}</p>
        </motion.div>
      </div>
      
    );
  };
  export default PageDescription;

  