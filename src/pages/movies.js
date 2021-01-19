import PageDescription from "../components/PageDescription"
import PageTitle from "../components/PageTitle"

const Movies = (props) => 
  <div>
  <PageTitle text={props.title}/>
       <PageDescription  text={props.text}/>
  </div>;
export default Movies;

Movies.defaultProps = {
  title:"Movies",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure"
}
