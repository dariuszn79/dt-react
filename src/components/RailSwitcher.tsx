import TileSwitcher from "./TileSwitcher";
import {
  useAnimation,
  Frame,
  Stack,
  addPropertyControls,
  ControlType,
} from "framer"

const RailSwitcher = () => 
  <div className="card" style={{opacity:0, visibility:"hidden", transform:"translate(100px,0)"}}>
    <h4>Movies Page</h4>
    <Stack 
          direction="vertical"
                distribution="start"
                alignment="start"
                gap={520}>
      <Frame width={"100%"}
                    height={"100%"}>
      <TileSwitcher image={""} progress={0}/>
      <TileSwitcher/>
      </Frame>
      <Frame width={"100%"}
                    height={"100%"}>
      <TileSwitcher/>
      <TileSwitcher/>
      </Frame>
      </Stack>
      
  </div>;

export default RailSwitcher;
