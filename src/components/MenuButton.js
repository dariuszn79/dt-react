import { Link } from "react-router-dom";
import '../global/_variables.css';
const MenuButton = props => {
    return (
      <Link style={{ marginRight: "5px", color:"var(--colors-white-100)", fontSize:"var(----typography-h-5-font-size)"}} to={props.to} className="btn btn-secondary">
        {props.name}
      </Link>
  );
};

export default MenuButton;