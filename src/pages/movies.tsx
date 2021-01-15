import RatilSwitcher from "../components/RailSwitcher";
import {
  useAnimation,
  Frame,
  Stack,
  addPropertyControls,
  ControlType,
} from "framer"
const Movies = () => 
  <div className="card" style={{opacity:0, visibility:"hidden", transform:"translate(100px,0)"}}>
    <h4>Movies Page</h4>
    <RatilSwitcher></RatilSwitcher>
      
  </div>;

export default Movies;
