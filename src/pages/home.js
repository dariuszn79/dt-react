import Title from "../components/Title"
import RailSwitcher from "../components/RailSwitcher"
const Home = (props) =>
  <div>
      <Title title={props.title} text={props.text}/>
      {/* <RailSwitcher/> */}
  </div>;

export default Home;

Home.defaultProps = {
  title:"Home",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure"
}
