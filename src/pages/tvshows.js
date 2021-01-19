
import Title from "../components/Title"
import RailSwitcher from "../components/RailSwitcher"

const TVShows = (props) => 
  <div>
       <Title title={props.title} text={props.text}/>
       {/* <RailSwitcher/> */}
  </div>;

export default TVShows;

TVShows.defaultProps = {
  title:"TV Shows",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure"
}