import TileSwitcher from "./TileSwitcher";


const RailSwitcher = () => 
  <div style={{display:"flex", flexDirection:"row",  width:"900px", height:"auto", overflowX:"scroll", overflowY:"visible"}} >
    <TileSwitcher/>
    <TileSwitcher/>
    <TileSwitcher/>
    <TileSwitcher/>
    <TileSwitcher/>
  </div>;

export default RailSwitcher;
