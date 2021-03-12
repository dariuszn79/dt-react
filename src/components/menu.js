import MenuButton from "./MenuButton";
const Menu = props => {
  return (
    <div style={{display:"flex"}}>
      <MenuButton name={"Home"} to={"/"} />
      <MenuButton name={"Movies"} to={"/movies"}/>
      <MenuButton name={"TV Shows"} to={"tvshows"}/>
      <MenuButton name={"TV Guide"} to={"tvguide"}/>
    </div>
  );
};

export default Menu;
