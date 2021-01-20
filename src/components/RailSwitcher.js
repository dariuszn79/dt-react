import { motion } from "framer-motion";
import TileSwitcher from "./TileSwitcher"
const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

const thumbnailVariants = {
  initial: { scale: 0.9, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition },
  exit: {
    scale: 1.3,
    opacity: 0,
    transition: { duration: 1.5, ...transition }
  }
};
const RailSwitcher = () => 
  <div>
        <motion.div className="thumbnail" variants={thumbnailVariants}>
    <motion.div
      exit="exit"
      enter="enter"
      variants={{ exit: { transition: { staggerChildren: 0.2 } }, enter: { transition: { staggerChildren: 0.2 } } }}
      style={{display:"inline-flex", transformOrigin:" 50% 50%"}}
    >
      <TileSwitcher/>
      <TileSwitcher/>
      <TileSwitcher/>
      <TileSwitcher/>
      <TileSwitcher/>
    </motion.div>
    </motion.div>
  </div>;

export default RailSwitcher;
