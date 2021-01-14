
import MenuButton  from "../components/MenuButton";
const Menu = props => {
  return (
    <div>
      <MenuButton name={"Home"} to={"/"} />
      <MenuButton name={"Movies"} to={"/movies"}/>
      <MenuButton name={"TV Shows"} to={"tvshows"}/>
    </div>
  );
};

export default Menu;
