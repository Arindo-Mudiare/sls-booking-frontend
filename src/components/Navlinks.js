import links from "../utils/links";
import adminLinks from "../utils/adminLinks";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const NavLinks = ({ toggleSidebar }) => {
  const { user } = useSelector((state) => state.user);
  const menuToBeRendered = user?.isSuperAdmin ? adminLinks : links;

  return (
    <div className="nav-links">
      {menuToBeRendered.map((link) => {
        const { text, path, id, icon } = link;

        return (
          <NavLink
            to={path}
            key={id}
            onClick={toggleSidebar}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
