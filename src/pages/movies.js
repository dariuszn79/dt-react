import { motion } from "framer-motion";
import PageDescription from "../components/PageDescription"
import PageTitle from "../components/PageTitle"
import RailSwitcher from "../components/RailSwitcher";
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
const Movies = (props) => 
  <div>
     <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        enter="enter"
        variants={PageTransition}
      >
      <PageTitle text={props.title}/>
      <PageDescription text={props.text}/>
      <RailSwitcher/>
  </motion.div>
  </div>;
export default Movies;

Movies.defaultProps = {
  title:"Movies",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}
