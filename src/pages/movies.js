import PageDescription from "../components/PageDescription"
import PageTitle from "../components/PageTitle"
import RailSwitcher from "../components/RailSwitcher";
import TileSwitcher from "../components/TileDefault"

const Movies = (props) => 
  <div>
  <PageTitle text={props.title}/>
  <RailSwitcher/>
    
  </div>;
export default Movies;

Movies.defaultProps = {
  title:"Movies",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure"
}
