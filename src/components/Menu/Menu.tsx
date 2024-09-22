import { NavLink } from "react-router-dom";
import settingsIcon from "../../assets/icons/settings.svg";
import homeIcon from "../../assets/icons/home.svg";

import "./Menu.css";

const Menu = () => {
  return (
    <nav className="menu">
      <NavLink to="/">
        <img src={homeIcon} alt="Todo List Page" />
      </NavLink>
      <NavLink to="/settings">
        <img src={settingsIcon} alt="Settings Page" />
      </NavLink>
    </nav>
  );
};

export default Menu;
