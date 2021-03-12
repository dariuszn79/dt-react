import GridItem from "./GridItem.tsx";
const GridRow = (props) => {
  return (
    <div style={{ display: "flex" }}>
      <GridItem name={"Home"}  />
      <GridItem name={"Movies"}  />
      <GridItem name={"TV Shows"} />
      <GridItem name={"TV Guide"}  />
    </div>
  );
};

export default GridRow;
